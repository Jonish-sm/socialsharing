import "./rightbar.scss";
import User from "../../assets/user.jpg";
import pratap from "../../assets/pratap.jpg";

function RightBar() {
  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img src={User} alt="" />
              <span>Jonish</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={pratap} alt="" />
              <span>Pratap</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src={User} alt="" />
              <p>
                <span>Jonish</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={User} alt="" />
              <p>
                <span>Jonish</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={pratap} alt="" />
              <p>
                <span>Pratap</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={User} alt="" />
              <p>
                <span>Jonish</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src={pratap} alt="" />
              <div className="online" />
              <span>Pratap</span> 
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={User} alt="" />
              <div className="online" />
              <span>Jonish</span> 
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={pratap} alt="" />
              <div className="online" />
              <span>Pratap</span> 
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={User} alt="" />
              <div className="online" />
              <span>Jonish</span> 
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={User} alt="" />
              <div className="online" />
              <span>Jonish</span> 
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={User} alt="" />
              <div className="online" />
              <span>Jonish</span> 
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={User} alt="" />
              <div className="online" />
              <span>Jonish</span> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightBar;
