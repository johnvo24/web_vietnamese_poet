"use client"

import { log } from "console"
import { BiSolidCopy } from "react-icons/bi"

const starts = [
  { label: "SE", tooltip: "Lỗi cấu trúc" },
  { label: "TE", tooltip: "Lỗi thanh điệu" },
  { label: "RE", tooltip: "Lỗi vần" },
  { label: "ME", tooltip: "Lỗi nội dung" },
  { label: "IE", tooltip: "Lỗi hình ảnh" },
]

const EditedPoemMessage = ({ content }: { content: string }) => {
  return (
    <div className='flex flex-col items-start space-y-1 group'>
      <div className="bg-[#e9e9e980] text-base px-2 py-2 leading-relaxed rounded-lg w-auto">
        <div className="flex justify-between items-center">
          <span className="font-bold">Bài thơ sửa:</span>
          <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <BiSolidCopy size={20} className="hover:opacity-70"/>
          </button>
        </div>
        <div className="text-center mt-2 px-2">
          <p className="whitespace-pre-line">{content}</p>
        </div>
      </div>
      <div className="flex flex-row items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-sm me-2 italic">Cải thiện:</span>
        {starts.map(({ label, tooltip }) => (
          <div key={label} className="relative inline-block me-2">
            <button type="button" className="peer w-8 h-8 border border-[#00000026] rounded-full text-sm text-[#0d0d0d] hover:bg-[#f9f9f9]">
              {label}
            </button>
            <div
              className="absolute top-full mt-2 left-1/2 -translate-x-1/2 
                        bg-[#0d0d0d] text-white text-sm rounded px-3 py-1 
                        opacity-0 peer-hover:opacity-100 transition-opacity duration-300 
                        pointer-events-none whitespace-nowrap z-10"
            >
              {tooltip}
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#0d0d0d] rotate-45 z-[-1]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EditedPoemMessage