'use client'

import { HiOutlineViewfinderCircle } from "react-icons/hi2";
import UserAvatar from "./avatar";
import { useRouter } from "next/navigation";
import { FaRegBookmark, FaRegHeart, FaRegShareSquare } from "react-icons/fa";
import { PiShareFat } from "react-icons/pi";
import { RiShareForwardLine } from "react-icons/ri";
import { api } from "@/lib/utils";

const PostCard = ({ className, poemData }: { className: string, poemData: any }) => {
  const router = useRouter();

  const handleSaveToCol = async () => {
    try {
      const token = localStorage.getItem("token")
      const response = await api.post("/collection/", { poem_id: poemData.poem_id }, {
        headers: { Authorization: `Bearer ${token}`},
      })
      if (response != null) {
        alert("Poem added to collection successfully")
      }
    } catch (error) {
      alert(error)
    }
  }

  const handleSaveToDB = async () => {
    const formData = {
      genre_id: 1,
      prompt: poemData.prompt,
      title: poemData.title,
      image: "https://cdn.vectorstock.com/i/1000v/16/84/romantic-background-vector-27211684.jpg",
      content: poemData.content,
      note: poemData.note || ""
    }
    try {
      const token = localStorage.getItem("token")
      const response = await api.post("/poem/create", JSON.stringify(formData), {
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      console.log(response)
      if (response != null) {
        alert("Poem added to collection successfully")
      }
    } catch (error) {
      alert(error)
    }
  }
  return (
    <div className={`${className} post-card p-2 bg-white rounded-lg shadow-md`}>
      <div className="post-header flex justify-between p-2">
        <div className="info-box flex">
          <UserAvatar 
            id={'post-avatar'}
            className={"w-12 h-12 cursor-pointer mr-4"}
            src={"https://upload.wikimedia.org/wikipedia/commons/2/21/Johnny_Depp_2020.jpg"}
            alt={poemData.user_name}
            fallbackText=""
          />
          <div className="info-text">
            <p className="username text-lg font-bold -mb-1">{poemData.user_name}</p>
            <p className="time text-gray-500 text-sm">{poemData.created_at}</p>
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
        <p className="post-title text-xl font-bold mb-2 text-white">{poemData.title}</p>
        <p className="text-base whitespace-pre-wrap text-white">{`${poemData.content}`}</p>
      </div>
      <div className="interaction-box flex mt-2 rounded-lg border">
        {/* Nút Like */}
        <button className="action-btn flex flex-1 items-center justify-center space-x-2 hover:bg-gray-200 p-2 rounded-md">
          <FaRegHeart className="text-gray-600" size={20} />
          {/* <FaHeart className="text-red-500" size={20} /> */}
          <span className="w-auto text-gray-700 font-medium">???</span>
        </button>

        {/* Nút Save */}
        <button onClick={handleSaveToDB} className="action-btn flex flex-1 items-center justify-center space-x-2 hover:bg-gray-200 p-2 rounded-md">
          <FaRegBookmark className="text-gray-600" size={20} />
          {/* <FaBookmark className="text-yellow-500" size={20} /> */}
          <span className="w-auto text-gray-700 font-medium">???</span>
        </button>

        {/* Nút Share */}
        <button className="action-btn flex flex-1 items-center justify-center space-x-2 hover:bg-gray-200 p-2 rounded-md">
          <FaRegShareSquare className="text-gray-600" size={21} />
          <span className="w-auto text-gray-700 font-medium">Share</span>
        </button>
      </div>
    </div>
  )
}

export default PostCard;