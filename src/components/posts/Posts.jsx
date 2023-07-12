import "./posts.scss";
import Post from "../post/Post";

function Posts() {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Pratap",
      userId: 1,
      profilePic:
        "https://media.licdn.com/dms/image/D5635AQFMUrg_LYXwUw/profile-framedphoto-shrink_800_800/0/1687629756503?e=1689764400&v=beta&t=zJDoWc15UeoTlrn4QVnBHr-oTIXDzLtbIBCi9sS0enw",
      desc: "Enjoy a lot with my best friend at Hard Rock Cafe saturday night 😍❤🍻🍺 #Bangalore #MGroad",
      img: "https://images.unsplash.com/photo-1615332858674-7c78a52a5367?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 2,
      name: "Sharon",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
      img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    },
  ];
  return (
    <>
      <div className="posts">
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </>
  );
}

export default Posts;
