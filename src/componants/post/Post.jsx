import "./Post.css"
import { PermMedia, Room, EmojiEmotions } from "@material-ui/icons";


export default function Post({post}) {
    console.log(post.like)
    return (
        <div className="postContainer">
        
        <div className="postWrapper">
        <div className="postUserWrapper">
                    <span className="postName">
                    <PermMedia className="postIcons"/> 
                    Image Name posted min 20 ago
                    </span>
                        <img alt ="" className="postImg" alt="" src="/assets/post/8.jpeg" ></img>
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
                        Likes
                        <span className="likesCounter">
                            {post.like}
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
                    {post.comment}
                </span> 
                </div>

        </div>
               
            <div className="postStoryWrapper">
                <textarea
                     className="postStory"
                     value="" disabled>   
                        this Story
                        this story
                        this story
                    </textarea>
            </div>
    </div>    
    </div> 
    </div>
    );
}
