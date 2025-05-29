"use client"

const starts = [1, 2, 3, 4, 5]

const AIMessage = ({ content }: { content: string }) => {
  const parsed = parseStepContent(content)
  
  return (
    <div className='flex flex-col items-start space-y-1 group'>
      <div className="bg-[#e9e9e980] text-base px-4 py-2 leading-relaxed rounded-lg w-3/4">
        {parsed.error && (
          <p className="font-semibold">Phát hiện lỗi: {parsed.error}</p>
        )}
        {parsed.desc && (
          <p>
            <span className="font-semibold">Mô tả:</span> {parsed.desc}
          </p>
        )}
        {parsed.reason && (
          <p>
            <span className="font-semibold">Suy luận:</span> {parsed.reason}
          </p>
        )}
        {parsed.replace && parsed.action && parsed.line && parsed.index && (
          <p>
            <span className="font-semibold">Hành động:</span> Thay “{parsed.replace}” bằng “{parsed.action}” ở dòng {parsed.line} vị trí thứ {parsed.index}
          </p>
        )}
        {parsed.effect && (
          <p>
            <span className="font-semibold">Hiệu quả:</span> {parsed.effect}
          </p>
        )}
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

function parseStepContent(content: string) {
  const extract = (tag: string) => {
    const regex = new RegExp(`<${tag}>(.*?)<`, 's');
    const match = content.match(regex);
    return match ? match[1].trim() : "";
  };

  return {
    error: extract("error"),
    desc: extract("desc"),
    reason: extract("reason"),
    action: extract("action"),
    replace: extract("replace"),
    line: extract("line"),
    index: extract("index"),
    effect: extract("effect"),
  };
}

export default AIMessage