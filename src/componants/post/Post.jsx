import "./Post.css"
import { PermMedia, Room, EmojiEmotions } from "@material-ui/icons";
import { Users } from "../../Data.js"
import { useState } from "react";

export default function Post({post}) {

    const [like,setLike] = useState(post.like)
    const [isLiked,setIsLiked] = useState(false)

    const likeHandler =()=>{
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }
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
                    <PermMedia className="postIcons"/> 
                    Image Name posted min 20 ago
                    </span>
                        <img alt ="" 
                        className="postImg" 
                        alt="" 
                        src={post.photo} />
                <div className="postInfoWrapper">

                <div className="postLocEmoji">

                <div className="postOptionLocation">
                <Room className="postIcons"/>
                    <span className="postOptionText">
                        Somewhere
                    </span>
                </div>
                <div className="postOptionEmoji">
                <EmojiEmotions className="postIcons"/>
                    <span className="postOptionText">
                        :\
                    </span>
 
                </div>
                </div>
                <div className="postLocEmoji">

                <div className="postOptionLocEmoji">
                <EmojiEmotions className="postIcons"/>
                    <span className="postOptionLikes">
                    <img className="likeIcon" src="assets/like.png" onClick={likeHandler} alt="" />
                    <img className="likeIcon" src="assets/heart.png" onClick={likeHandler} alt="" />
                         
                        <span className="likesCounter">
                            {like} People like it
                        </span>
                    </span>
                </div>
                <div className="postOptionEmoji">
                <EmojiEmotions className="postIcons"/>
                    <span className="postOptionText">
                        Hearts
                    </span>
 
                </div>
                </div>
                <div className="postOptionComments">
                <EmojiEmotions className="postIcons"/>
                <span className="commentCounter">
                    20
                </span>
                <span className="postOptionText">
                    {post.comment} comments
                </span> 
                </div>

        </div>
               
            <div className="postStoryWrapper">
                <textarea
                     className="postStory"
                     value="" disabled>   
                        {post?.desc}
                    </textarea>
            </div>

            <div className="postUserInfoWrapper">
            <div className="postUserInfo">
            <div className="postUsername">
            <img alt ="" className="postProfileImg" 
            src={Users.filter((u) => u.id === post?.userId)[0].profilePicture} alt="" />
            <div className="postProfileText">
                {Users.filter((u) => u.id === post?.userId)[0].username}
            </div>
            </div>
            </div>
            <div className="postBar">
                <div className="postDate">
            {post.date}
            </div>
            </div>
            </div>
    </div>    
    </div> 
    </div>
    );
}
