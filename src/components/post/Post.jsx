import "./Post.css";
import { MoreVert } from "@material-ui/icons";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { PermMedia, Room, EmojiEmotions } from "@material-ui/icons";


export default function Post({ post }) {
  const [like, setLike] = useState(post.likes ? post.likes.length : '');
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  const likeHandler = () => {
    try {
      axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
    } catch (err) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };


    // //check post works
    // console.log(post.like)
    
    // const user = Users.filter((u)=> u.id===1)

    // check user works
    // console.log(user.username)
    return (
        <div className="postContainer">
        
        <div className="postWrapper">
        <div className="postUserWrapper">
                    <span className="postName">

                    </span>

            
                <div className="postInfoWrapper">


        </div>
               
            <div className="postStoryWrapper">
         
            <Link to={`/profile/${user.username}`}>
              <img
                className="postImg"
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + user.profilePicture  + '1600x900/?woman'
                }
                alt=""
              />
            </Link>

            <div className="postUserInfoWrapper">

</div>
<div className="postStory">
           {post?.desc}
            </div>
            <span className="postOptionLikes">
    <img className="likeIcon" src="assets/like.png" onClick={likeHandler} alt="" />
    </span>
<span className="postLikeCounter">

    {like} people like it!</span>
<span className="postOptionText">
    {/* {post?.comments} comments */}
</span> 
            <div className="postUserInfo">
            <div className="postUsername">
           

            <div className="likeBox">
              
            <div className="postLocEmoji">

{/* <div className="postOptionLocation">
<Room className="postIcons"/>
    <span className="postOptionText">
        Somewhere
    </span>
</div> */}
<div className="postOptionLocEmoji">

</div>


</div>
            </div>
              </div>
            </div>

            <div className="postBar">
            <Link to={`/profile/${user.username}`}>
              <img
                className="postProfileImg"
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + user.profilePicture  + '1600x900/?man'
                }
                alt=""
              />
            </Link>
                <div className="postDate">
                <span className="postUsername">{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
            </div>
            </div>
            </div>
    </div>    
    </div> 
    </div>
    );
}
