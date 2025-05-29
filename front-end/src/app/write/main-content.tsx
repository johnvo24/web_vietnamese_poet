"use client"

import React, { useState } from 'react'
import PostCard from '@/components/ui/post-card'
import useAuth from '@/lib/hooks/useAuth'
import { cn } from "@/lib/utils"
import { RiAiGenerate } from 'react-icons/ri'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import { Check, ChevronsUpDown } from "lucide-react"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { apiAI } from '@/lib/utils'
import axios from 'axios'
import { stringify } from 'postcss'
import { Skeleton } from '@/components/ui/skeleton'

const frameworks = [
  {
    model: "phobert_gpt2",
    label: "phobert_gpt2",
  },
  {
    model: "gemini-1.5-flash",
    label: "gemini-1.5-flash",
  },
  {
    model: "claude-3-5-sonnet-20241022",
    label: "claude-3-5-sonnet-20241022",
  },
]

const MainContent = () => {
  const [open, setOpen] = useState(false)
  const [model, setModel] = useState("")
  const [prompt, setPrompt] = useState("")
  const [poem, setPoem] = useState("")
  const { user, loading } = useAuth()
  const router = useRouter()

  const poemData = {
    user_id: 1,
    genre_id: 1,
    user_name: "Johnny Dark",
    prompt: "Thơ lục bát về tình yêu",
    title: "Nhặt Tình Lục Bát",
    image: "https://cdn.vectorstock.com/i/1000v/16/84/romantic-background-vector-27211684.jpg",
    content: "Thương ai ngày tháng đợi chờ?\nCho ta say nhớ vần thơ nghĩa tình\nTừ ấy Lục Bát lung linh\nĐể Ta nhặt lấy cho mình chơi vơi!\nLục tình Bát nghĩa ai rơi?\nRồi gieo nhung nhớ cho đời thắm tươi\nTình yêu muôn sắc rạng ngời\nThơ tình Lục bát luôn cười đón em.\nLục bát…rơi chi… lệ mềm!\nCho mi em vướng… ái êm giọt tình\nNgày đêm nỗi nhớ riêng mình\nVần thơ Lục bát thắm in vào hồn.\nDù ai lý lẽ ngoan khôn!!!\nThơ ta Lục bát ru hồn mộng yêu\nSắc màu nắng ngã tím chiều\nVần thơ ta mãi Lục tình Bát thương…",
    note: "",
    created_at: "Dec 20 · 12:19 PM"
  }



  const generatePoem = async () => {
    try {
      const formData = {
        model: model,
        prompt: prompt
      };
      const response = await axios.post("http://172.16.0.180:8000/generate-poem", JSON.stringify(formData), {
        headers: {
          'Content-Type': 'application/json'
        },
      })
      setPoem(response.data)
    } catch (error) {
      
    }
  }

  if (loading) {
    return (
      <Skeleton className='w-8/12 h-96 mx-auto mt-16'/>
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

  const handlePrint = () => {
    console.log({ model, prompt })
  }

  return (
    <div className="main pt-12 w-full">
        <div className='content mx-auto flex flex-col items-center w-8/12 min-w-[960px] my-4 p-4 rounded-lg bg-white'>
          <div className='w-3/4 flex flex-col items-center'>
            <div className='flex w-full justify-between items-center'>
              <div className='w-4/6 mr-2'>
                <p className='w-full text-start text-lg mb-1 italic text-gray-700'>Prompt:</p>
                <Input placeholder='Enter promt' onChange={(e) => setPrompt(e.target.value)}/>
              </div>
              <div className='w-2/6'>
              <p className='w-full text-start text-lg mb-1 italic text-gray-700'>Model:</p>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      className="w-full justify-between"
                      size="lg"
                    >
                      {model
                        ? frameworks.find((models) => models.model === model)?.label
                        : "Select model..."}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0">
                    <Command>
                      <CommandInput placeholder="Search model..." />
                      <CommandList>
                        <CommandEmpty>No model found.</CommandEmpty>
                        <CommandGroup>
                          {frameworks.map((models) => (
                            <CommandItem
                              key={models.model}
                              value={models.model}
                              onSelect={(currentValue) => {
                                setModel(currentValue === model ? "" : currentValue)
                                setOpen(false)
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  model === models.model ? "opacity-100" : "opacity-0"
                                )}
                              />
                              {models.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <Button className='mt-4' type='submit' onClick={generatePoem}>
              <RiAiGenerate/>Generate Poem
            </Button>
          </div>
          <div className='w-3/4 items-center'>
            <p className='w-full text-start text-lg mb-1 italic text-gray-700'>Preview:</p>
            <hr className="mt-1 mb-4 w-full border-dashed border-gray-300" />
            <div className="preview bg-gray-400 p-12">
              <PostCard className={''} poemData={poem}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainContent