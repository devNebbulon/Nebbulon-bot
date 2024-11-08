import { useQuery } from "@tanstack/react-query";
import "./chatList.css";
import { Link } from "react-router-dom";

const ChatList = () => {

  // Fetch data from the API endpoint using the useQuery hook
  const { isPending, error, data } = useQuery({
    queryKey: ["userChats"],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_API_URL}/api/userchats`, {
        credentials: "include",
      }).then((res) => res.json()),
  });

  return (
    <div className="chatList">
      <span className="title">DASHBOARD</span>
      <Link to="/dashboard">Create a new chat</Link>
      <Link to="/">Explore Lama AI</Link>
      <Link to="/">Contact</Link>
      <hr />
      <span className="title">RECENT CHATS</span>
      <div className="list">
        {isPending
          ? "Loading..."
          : error
          ? "Something went wrong..."
          : data?.map((chat) => (
              <Link to={`/dashboard/chats/${chat._id}`} key={chat._id}>
                {chat.title}
              </Link>
            ))}
      </div>
      <hr />
      <div className="upgrade">
        <img src="/logo.png" alt="" />
        <div className="texts">
          <span>Upgrade to Nebbulon Pro</span>
          <span>Get unlimited chats, better performance, and more</span>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
