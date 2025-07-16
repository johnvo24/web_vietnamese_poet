"use client"

const UserMessage = ({ content }: { content: string }) => {
  return (
    <div className='flex flex-col items-end'>
      <div className="bg-[#EFF6FF] text-base leading-relaxed p-2 rounded-lg">
        <p className="whitespace-pre-line">
          { content }
        </p>
      </div>
    </div>
  )
}

export default UserMessage