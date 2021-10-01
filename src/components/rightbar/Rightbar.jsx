import "./Rightbar.css";
import { Users } from "../../Data";
import Online from "../online/Online";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Add, Remove } from "@material-ui/icons";

export default function Rightbar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(
    currentUser.followings.includes(user?.id)
  );

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("/users/friends/" + user._id);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user]);

  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put(`/users/${user._id}/unfollow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await axios.put(`/users/${user._id}/follow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "FOLLOW", payload: user._id });
      }
      setFollowed(!followed);
    } catch (err) {
    }
  };
  const HomeRightbar = () => {
    return (
      <>
      <div className="rightbarContainer">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img className="rightbarAd" src="https://source.unsplash.com/300x300/?programming" alt="" />

       <h4 className="rightbarTitle">Online Friends</h4>

        <div className="rightbarWrapper">
        <span className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </span>
        </div>
        </div>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
            <div className="rightbarContainer">
              <div className="rightbarWrapper">
        <span className="rightbarFriendList">
                  <div className="rightbarInfo">
              {user.username !== currentUser.username && (
          <button className="rightbarFollowButton" onClick={handleClick}>
            {followed ? "Unfollow" : "Follow"}
            {followed ? <Remove /> : <Add />}
          </button>
        )}
        <h4 className="rightbarTitle">User information</h4>

          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
                  Sydney

          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Friends?</span>
            <span className="rightbarInfoValue">
              {user.relationship === 1
                ? "Friend"
                : user.relationship === 1
                ? "Not friend"
                : "Ask Again"}
            </span>
            <span className="rightbarInfoValue"> </span>
          </div>
        </div>
        <h4 className="rightbarTitle"></h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
          
          {friends.map((friend) => (
            <Link
              to={"/profile/" + friend.username}
              style={{ textDecoration: "none" }}
            >
              <div className="rightbarFollowing">
                <img
                  src={
                    friend.profilePicture
                      ? PF + friend.profilePicture
                      : PF + user.profilePicture
                  }
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">{friend.username}</span>
              </div>
            </Link>
     ))}
          </div>
          <div className="rightbarFollowing">
          {friends.map((friend) => (
            <Link
              to={"/profile/" + friend.username}
              style={{ textDecoration: "none" }}
            >
              <div className="rightbarFollowing">
                <img
                  src={
                    friend.profilePicture
                      ? PF + friend.profilePicture
                      : PF + user.profilePicture
                  }
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">{friend.username}</span>
              </div>
            </Link>
          ))}
          </div>
        </div>
        
        </span>
        </div>
        </div>
      </>
    );
  };





  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
      {user ? <ProfileRightbar /> : <HomeRightbar />}      </div>
    </div>
  );
}