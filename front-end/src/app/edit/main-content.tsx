"use client"

import React, { useState } from 'react'
import useAuth from '@/lib/hooks/useAuth'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { Skeleton } from '@/components/ui/skeleton'
import UserMessage from '@/components/user-message'
import AIMessage from '@/components/ai-message'
import InputForm from '@/components/input-form'
import EditedPoemMessage from '@/components/edited_poem'
import axios from 'axios'

interface Step {
  step_content: string
  reasoning_score: number,
  poem_text: string,
  meaning_score: number,
  imagery_score: number
}

interface Chain {
  original_poem: string
  steps: Step[]
}

const MainContent = () => {
  const [chain, setChain] = useState<Chain | null>(null)
  const [messages, setMessages] = useState<string[]>([])
  const [response, setResponse] = useState({
    status: '',
    step_content: '',
    poem_text: '',
  })

  const hasMessages = messages.length > 0
  const lastStep = chain?.steps?.[chain.steps.length - 1]
  const isComplete = lastStep?.step_content?.includes("<eos>")

  const { user, loading } = useAuth()
  const router = useRouter()

  // bấm lần đầu
  const handleSend = async (text: string) => {
    const newChain: Chain = {
      original_poem: text,
      steps: []
    }

    setMessages([text])
    setChain(newChain)
    
    try {
      // const res = await axios.post("/edit-poem/step/", newChain)
      // response sample
      const res = {
        "status": "ok",
        "step_content": "string <eois>",
        "poem_text": "string"
      }
      setResponse(res)

      const step = {
        "step_content": "string <eois>",
        "reasoning_score": 4,
        "poem_text": "string",
        "meaning_score": 4,
        "imagery_score": 4
      }

      // lưu step vào steps[]
      setChain(prev => ({
        ...prev!,
        steps: [...prev!.steps, step]
      }))
    } catch (err) {
      console.error("Gửi API lỗi:", err)
    }
  }
  console.log(chain)

  // các lần bấm sau
  const handleNextStep = async () => {
    if (!chain || isComplete) return

    try {
      // const res = await axios.post("/edit-poem/step/", chain)
      // response sample
      const res = {
        "status": "ok",
        "step_content": "string <eois>",
        "poem_text": "string"
      }
      setResponse(res)

      const step = {
        "step_content": "string <eos>",
        "reasoning_score": 4,
        "poem_text": "string",
        "meaning_score": 4,
        "imagery_score": 4
      }

      // lưu step vào steps[]
      setChain(prev => ({
        ...prev!,
        steps: [...prev!.steps, step]
      }))
    } catch (err) {
      console.error("Lỗi khi gửi bước tiếp theo:", err)
    }
  }

  if (loading) {
    return (
      <Skeleton className='w-full h-40'/>
    )
  }

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold">You need to login to write a poem</h1>
        <Button onClick={() => router.push("/login")} className="mt-4">
          Click here
        </Button>
      </div>
    )
  }

  return (
    <div className={`main w-full ${hasMessages ? 'pb-32 mt-16' : 'h-screen flex items-center justify-center'}`}>
      <div className={`content ${hasMessages ? 'mx-auto w-8/12 min-w-[960px] my-4 p-4 bg-white space-y-4 rounded-lg' : 'w-full max-w-xl px-4'}`}>
        {hasMessages && messages.map((msg, idx) => (
          <UserMessage key={`user-${idx}`} content={msg} />
        ))}

        {response.step_content != '' && (
          <AIMessage content={response.step_content} />
        )}

        {!isComplete && chain && (
          <button
            onClick={handleNextStep}
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Đang xử lý..." : "Tiếp tục"}
          </button>
        )}
        {/* <EditedPoemMessage /> */}
        
        <InputForm onSend={handleSend} isCentered={!hasMessages} />
      </div>
    </div>
  )
}

export default MainContent