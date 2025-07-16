"use client"
import { useState } from "react"
import { IoSend } from "react-icons/io5"

const InputForm = ({ onSend, isCentered = false }: {
  onSend: (text: string) => void,
  isCentered?: boolean
}) => {
  const [input, setInput] = useState("")

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      if (input.trim() === "") return
      onSend(input)
      setInput("")
    }
  }

  const handleSubmit = () => {
    if (input.trim() === "") return
    onSend(input)
    setInput("")
  }

  return (
    <div className={`${isCentered ? '' : 'mx-auto w-8/12 min-w-[960px] fixed bottom-4 left-0 right-0'} bg-white px-4 py-2 rounded-full border border-[#dddddd] shadow-xl`}>
      <div className="flex items-center max-w-8/12 mx-auto w-full">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Nhập thơ của bạn..."
          rows={1}
          className="flex-grow px-4 py-4 text-base rounded-lg border-none focus:border-none focus:outline-none resize-none overflow-hidden"
        />
        <button
          type="button"
          onClick={handleSubmit}
          className="ml-4 px-4 py-4 bg-[#0d0d0d] text-white rounded-full hover:opacity-70 transition"
        >
          <IoSend />
        </button>
      </div>
    </div>
  )
}

export default InputForm
