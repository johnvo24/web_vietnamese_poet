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
  error_poem: string,
  step_content: string,
  edited_poem: string,
  reasoning_score: number,
  meaning_score: boolean,
  imagery_score: boolean
}

interface Chain {
  original_poem: string
  steps: Step[]
}

type ReasonResponse = {
  status: string
  error_poem: string
  step_content: string
  edited_poem: string
}

const MainContent = () => {
  const [chain, setChain] = useState<Chain | null>(null)
  const [messages, setMessages] = useState<string[]>([])
  const [response, setResponse] = useState<ReasonResponse[]>([])
  const [loadingResponse, setLoadingResponse] = useState(false)

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
    setLoadingResponse(true)
    
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_AI_API_BASE_URL}/edit-poem/step/`, newChain)

      setResponse(prev => [...prev, res.data])

      const step = {
        "error_poem": res.data.error_poem,
        "step_content": res.data.step_content,
        "edited_poem": res.data.edited_poem,
        "reasoning_score": 0,
        "meaning_score": true,
        "imagery_score": true,
      }

      // lưu step vào steps[]
      setChain(prev => ({
        ...prev!,
        steps: [...prev!.steps, step]
      }))
    } catch (err) {
    } finally {
      setLoadingResponse(false)
    }
  }
  console.log(response)
  console.log(chain)
  // các lần bấm sau
  const handleNextStep = async () => {
    if (!chain || isComplete) return

    setLoadingResponse(true)

    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_AI_API_BASE_URL}/edit-poem/step/`, chain)

      // response sample
      setResponse(prev => [...prev, res.data])

      const step = {
        "error_poem": res.data.error_poem,
        "step_content": res.data.step_content,
        "edited_poem": res.data.edited_poem,
        "reasoning_score": 0,
        "meaning_score": true,
        "imagery_score": true,
      }

      // lưu step vào steps[]
      setChain(prev => ({
        ...prev!,
        steps: [...prev!.steps, step]
      }))
    } catch (err) {
      console.error("Lỗi khi gửi bước tiếp theo:", err)
    } finally {
      setLoadingResponse(false)
    }
  }

  if (loading) {
    return (
      <div className='main w-full h-screen flex items-center justify-center'>
        <Skeleton className='w-full max-w-xl m-auto h-[74px] rounded-full'/>
      </div>
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

        {response.map((res, index) => (
          <AIMessage key={index} content={res.step_content} />
        ))}
        {loadingResponse && <Skeleton className="w-2/4 h-20" />}

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