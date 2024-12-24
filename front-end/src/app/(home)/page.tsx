import Header from "@/components/header";
import UserAvatar from "@/components/ui/avatar";
import PostCard from "@/components/ui/post-card";
import Image from "next/image";
import Link from "next/link";
import ShowWriters from "@/app/(home)/show-writer";
import ShowPoem from "@/app/(home)/show-poem";

export default function Home() {

  // const writers = Array.from({ length: 20 }, (_, index) => ({
  //   userId: index + 1,
  //   fullName: `Johnny Dark ${index}`,
  //   avatar: "https://upload.wikimedia.org/wikipedia/commons/2/21/Johnny_Depp_2020.jpg",
  //   fallback: `W${index + 1}`,
  // }));

  return (
    <div className="bg-transparent">
      <Header 
        className="fixed top-0 left-0"
      />
      <div className="main pt-12 w-full">
        <div className="content flex mx-auto w-8/12 min-w-[960px] py-4">
          <div className="left-content flex-1 mr-4">
            <ShowPoem />
          </div>
          <div className="right-content w-1/4">
            {/* <PostCard className="mb-4"/> */}
            <div className="p-4 rounded-lg shadow-sm bg-white mb-2">
              <p className="font-bold text-lg mb-2">Themes & Topics</p>
              <Link 
                className="text-sm py-1 px-2 mb-1 w-fit hover:underline block text-gray-700 bg-gray-200 rounded-lg" 
                href={"#"}
              >Memory (<i>49 poems</i>)</Link>
              <Link 
                className="text-sm py-1 px-2 mb-1 w-fit hover:underline block text-gray-700 bg-gray-200 rounded-lg" 
                href={"#"}
              >Falling asleep or waking up (<i>42 poems</i>)</Link>
              <Link 
                className="text-sm py-1 px-2 mb-1 w-fit hover:underline block text-gray-700 bg-gray-200 rounded-lg" 
                href={"#"}
              >Growing older (<i>16 poems</i>)</Link>
              <Link 
                className="text-sm py-1 px-2 mb-1 w-fit hover:underline block text-gray-700 bg-gray-200 rounded-lg" 
                href={"#"}
              >When day becomes night (<i>21 poems</i>)</Link>
              <Link 
                className="text-sm py-1 px-2 mb-1 w-fit hover:underline block text-gray-700 bg-gray-200 rounded-lg" 
                href={"#"}
              >Fear and courage (<i>27 poems</i>)</Link>
              <Link 
                className="text-sm py-1 px-2 mb-1 w-fit hover:underline block text-gray-700 bg-gray-200 rounded-lg" 
                href={"#"}
              >Love and hatred (<i>134 poems</i>)</Link>
              <hr className="mt-4 mb-2"/>
              <p className="font-bold text-lg mb-2">Prominent Writers</p>
              <ShowWriters />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}