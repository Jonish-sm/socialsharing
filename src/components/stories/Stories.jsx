import "./stories.scss";
import User from "../../assets/user.jpg";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

export default function Stories() {
  const { currentUser } = useContext(AuthContext);
  // CheckThis
  console.log(currentUser);

  const stories = [
    {
      id: 1,
      name: "Pratap",
      img: "https://images.unsplash.com/photo-1535704882196-765e5fc62a53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW5pbWUlMjBnaXJsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      name: "Sharon",
      img: "https://images.unsplash.com/photo-1515202913167-d9a698095ebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YW5pbWUlMjBnaXJsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      name: "Pratap",
      img: "https://media.licdn.com/dms/image/D5635AQFMUrg_LYXwUw/profile-framedphoto-shrink_800_800/0/1687629756503?e=1689764400&v=beta&t=zJDoWc15UeoTlrn4QVnBHr-oTIXDzLtbIBCi9sS0enw",
    },
    {
      id: 4,
      name: "Sukmit",
      img: "https://images.unsplash.com/photo-1616461046183-f62780d4f879?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFuaW1lJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
        <img src={User} alt="" />
        <span>Jonish</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
}
