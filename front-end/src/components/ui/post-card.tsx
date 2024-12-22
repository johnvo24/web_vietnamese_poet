'use client'

import { HiOutlineViewfinderCircle } from "react-icons/hi2";
import UserAvatar from "./avatar";
import { useRouter } from "next/navigation";
import { FaRegBookmark, FaRegHeart, FaRegShareSquare } from "react-icons/fa";
import { PiShareFat } from "react-icons/pi";
import { RiShareForwardLine } from "react-icons/ri";

const PostCard = ({className}:{className: string}) => {
  const router = useRouter();

  const poemData = {
    userId: 1,
    genreId: 1,
    userName: "Johnny Dark",
    prompt: "Thơ lục bát về tình yêu",
    title: "Nhặt Tình Lục Bát",
    image: "https://cdn.vectorstock.com/i/1000v/16/84/romantic-background-vector-27211684.jpg",
    content: "Thương ai ngày tháng đợi chờ?\nCho ta say nhớ vần thơ nghĩa tình\nTừ ấy Lục Bát lung linh\nĐể Ta nhặt lấy cho mình chơi vơi!\nLục tình Bát nghĩa ai rơi?\nRồi gieo nhung nhớ cho đời thắm tươi\nTình yêu muôn sắc rạng ngời\nThơ tình Lục bát luôn cười đón em.\nLục bát…rơi chi… lệ mềm!\nCho mi em vướng… ái êm giọt tình\nNgày đêm nỗi nhớ riêng mình\nVần thơ Lục bát thắm in vào hồn.\nDù ai lý lẽ ngoan khôn!!!\nThơ ta Lục bát ru hồn mộng yêu\nSắc màu nắng ngã tím chiều\nVần thơ ta mãi Lục tình Bát thương…",
    note: "",
    createAt: "Dec 20 · 12:19 PM"
  }
  
  return (
    <div className={`${className} post-card p-2 bg-white rounded-lg shadow-sm`}>
      <div className="post-header flex justify-between p-2">
        <div className="info-box flex">
          <UserAvatar 
            id={'post-avatar'}
            className={"w-12 h-12 cursor-pointer mr-4"}
            src={"https://upload.wikimedia.org/wikipedia/commons/2/21/Johnny_Depp_2020.jpg"}
            alt={"Johnny Dark"}
            fallbackText={"JD"}
          />
          <div className="info-text">
            <p className="username text-lg font-bold -mb-1">{poemData.userName}</p>
            <p className="time text-gray-500 text-sm">{poemData.createAt}</p>
          </div>
        </div>
        <HiOutlineViewfinderCircle 
          className="cursor-pointer rounded-lg hover:bg-gray-200"
          size={36}
          onClick={() => router.push('/view')}
        />
      </div>
      <div 
        className="p-6 text-center rounded-lg"
        style={{
          backgroundImage: `url('${poemData.image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#000",
        }}
      >
        <p className="post-title text-xl font-bold mb-2">{poemData.title}</p>
        <p className="text-base whitespace-pre-wrap">{`${poemData.content}`}</p>
      </div>
      <div className="interaction-box flex mt-2 rounded-lg border">
        {/* Nút Like */}
        <button className="action-btn flex flex-1 items-center justify-center space-x-2 hover:bg-gray-200 p-2 rounded-md">
          <FaRegHeart className="text-gray-600" size={20} />
          {/* <FaHeart className="text-red-500" size={20} /> */}
          <span className="w-16 text-start text-gray-700 font-medium">120</span>
        </button>

        {/* Nút Save */}
        <button className="action-btn flex flex-1 items-center justify-center space-x-2 hover:bg-gray-200 p-2 rounded-md">
          <FaRegBookmark className="text-gray-600" size={20} />
          {/* <FaBookmark className="text-yellow-500" size={20} /> */}
          <span className="w-16 text-start text-gray-700 font-medium">45</span>
        </button>

        {/* Nút Share */}
        <button className="action-btn flex flex-1 items-center justify-center space-x-2 hover:bg-gray-200 p-2 rounded-md">
          <FaRegShareSquare className="text-gray-600" size={21} />
          <span className="text-start text-gray-700 font-medium">Share</span>
        </button>
      </div>
    </div>
  )
}

export default PostCard;