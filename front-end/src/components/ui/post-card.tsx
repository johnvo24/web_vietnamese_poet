import UserAvatar from "./avatar";

const PostCard = ({className}:{className: string}) => {

  const poemData = {
    userId: 1,
    genreId: 1,
    userName: "John",
    prompt: "Thơ lục bát về tình yêu",
    title: "Nhặt Tình Lục Bát",
    image: "https://cdn.vectorstock.com/i/1000v/16/84/romantic-background-vector-27211684.jpg",
    content: "Thương ai ngày tháng đợi chờ?\nCho ta say nhớ vần thơ nghĩa tình\nTừ ấy Lục Bát lung linh\nĐể Ta nhặt lấy cho mình chơi vơi!\nLục tình Bát nghĩa ai rơi?\nRồi gieo nhung nhớ cho đời thắm tươi\nTình yêu muôn sắc rạng ngời\nThơ tình Lục bát luôn cười đón em.\nLục bát…rơi chi… lệ mềm!\nCho mi em vướng… ái êm giọt tình\nNgày đêm nỗi nhớ riêng mình\nVần thơ Lục bát thắm in vào hồn.\nDù ai lý lẽ ngoan khôn!!!\nThơ ta Lục bát ru hồn mộng yêu\nSắc màu nắng ngã tím chiều\nVần thơ ta mãi Lục tình Bát thương…",
    note: "",
    createAt: "12/19/2024T03:39:59"
  }
  
  return (
    <div className={`${className} post-card p-2 bg-white rounded-lg shadow-sm`}>
      <div className="post-header flex py-2 ps-2">
        <UserAvatar 
          id={'header-avatar'}
          className={"w-12 h-12 cursor-pointer mr-4"}
          src={"https://upload.wikimedia.org/wikipedia/commons/2/21/Johnny_Depp_2020.jpg"}
          alt={"Johnny Dark"}
          fallbackText={"JD"}
        />
        <div className="post-info">
          <p className="text-lg font-bold">{poemData.userName}</p>
          <p></p>
        </div>
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
    </div>
  )
}

export default PostCard;