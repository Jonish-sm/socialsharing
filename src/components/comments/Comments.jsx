import "./comments.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import User from "../../assets/user.jpg";

export default function Comments() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  //TEMPORY
  const comments = [
    {
      id: 1,
      desc: "Yeah its was fun pratap, i love to go again",
      name: "Jyoti gowda",
      userId: 1,
      profilePicture:
        "https://scontent.fblr11-1.fna.fbcdn.net/v/t1.6435-9/146534102_104503148345016_7236929898167321961_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=973b4a&_nc_ohc=adWWASgnaEoAX-ghCan&_nc_ht=scontent.fblr11-1.fna&oh=00_AfDrfhqo0Is4c9eUtNkwmWaLR-sNO1_MOnWraDHnNNRa0g&oe=64D6081D",
    },
    {
      id: 2,
      desc: "Missing you pratap let go again this saturday ❤❤🍻",
      name: "Preeti jain",
      userId: 2,
      profilePicture:
        "https://images.locanto.me/Call-girls-in-ananthapur-23/5379842745.jpg",
    },
  ];

  return (
    <div className="comments">
      <div className="write">
        <img src={User} alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
}
