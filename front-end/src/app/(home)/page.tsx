import Header from "@/components/header";
import PostCard from "@/components/ui/post-card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-transparent">
      <Header 
        className="absolute top-0 left-0"
      />
      <div className="main pt-12 w-full">
        <div className="content flex mx-auto w-8/12 min-w-[960px] py-4">
          <div className="left-content flex-1 mr-4">
            <PostCard className="mb-4"/>
            <PostCard className="mb-4"/>
            <PostCard className="mb-4"/>
          </div>
          <div className="right-content w-1/4 bg-white">
          <PostCard className="mb-4"/>
            
          </div>
        </div>
      </div>
    </div>
  );
}

