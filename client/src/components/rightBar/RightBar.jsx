import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/7475818/pexels-photo-7475818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <span>riyaz</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <span>kp</span>
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
              <img
                src="https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <p>
                <span>Shreekarthick.photo</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/3299386/pexels-photo-3299386.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <p>
                <span>sri</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4631085/pexels-photo-4631085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <p>
                <span>randy</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <p>
                <span>anush</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
  
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="online" />
              <span>Shreekarthick.photo</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/3541916/pexels-photo-3541916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="online" />
              <span>kamatchiraman.photo</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/3299386/pexels-photo-3299386.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div className="online" />
              <span>sri</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4631085/pexels-photo-4631085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="online" />
              <span>randy</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/7475818/pexels-photo-7475818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="online" />
              <span>Aravind</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
