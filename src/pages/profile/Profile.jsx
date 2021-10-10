import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./Profile.css"

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`https://friends-again-api.herokuapp.com/api/users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [username]);

    return (
        <>
        <Header/>
        <div className="profileContainer">
        <Sidebar/>
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">

        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + user.profilePicture + '500x500/?landscape'
            }
            alt=""
            className="profileCoverImg"
          />
        </Link>

        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + user.profilePicture + '500x500/?woman?2'
            }
            alt=""
            className="profileUserImg"
          />
        </Link>
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">Name</h4>
                    <h4 className="profileInfoDesc">Desc</h4>
                </div>

                <div className="profileRightBottom">
                <Feed username={username} />
            <Rightbar user={user} />
                </div>
            </div>

        </div>

        </div>
        </>
    );
}
