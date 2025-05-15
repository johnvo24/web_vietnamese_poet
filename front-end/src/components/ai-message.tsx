"use client"

const starts = [1, 2, 3, 4, 5]

const AIMessage = ({ content }: { content: string }) => {
  return (
    <div className='flex flex-col items-start space-y-1 group'>
      <div className="bg-[#e9e9e980] text-base px-4 py-2 leading-relaxed rounded-lg w-3/4">
        { content }
        {/* <p className="font-semibold">Phát hiện lỗi cấu trúc</p>
        <p>
          <span className="font-semibold">Mô tả:</span> Câu thơ 1 chỉ có 5 chữ, điều này phá vỡ cấu trúc bài thơ.
        </p>
        <p>
          <span className="font-semibold">Suy luận:</span> Để sửa lỗi này, cần thêm hoặc thay đổi từ ngữ câu 1 sao cho câu thơ có đúng 6 chữ.
          Đồng thời vẫn giữ được ý nghĩa ban đầu của nó.
        </p>
        <p>
          <span className="font-semibold">Hành động:</span> Thay “người” bằng “người ta” ở dòng 1 vị trí thứ 5
        </p>
        <p>
          <span className="font-semibold">Hiệu quả:</span> Sau khi sửa lỗi, bài thơ trở nên hoàn chỉnh và ý nghĩa hơn.
        </p> */}
      </div>
      <div className="flex flex-row items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-sm me-2 italic">Đánh giá:</span>
        {starts.map((value) => (
          <button key={value} className="w-8 h-8 me-2 border border-[#00000026] rounded-full text-sm text-[#0d0d0d] hover:bg-[#f9f9f9]">
            {value}
          </button>
        ))}
      </div>
    </div>
  )
}

export default AIMessage