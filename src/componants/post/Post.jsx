import "./Post.css"
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";


export default function Post() {
    return (
        <div className="postContainer">
        
        <div className="postWrapper">
        <div className="postUserWrapper">
                    <span className="postName">
                    <PermMedia className="postIcons"/> 
                    Image Name posted min 20 ago
                    </span>
                        <img className="postImg" alt="" src="/assets/post/8.jpeg" ></img>
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
                            15
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
                    Comments
                </span> 
                </div>

        </div>
               
            <div className="postStoryWrapper">
                <textarea
                     className="postStory">   
                        this Story
                        this story
                        this story
                    </textarea>
            </div>
    </div>


            
            <div className="postUserInfoWrapper">
            <div className="postUserInfo">
            <div className="postNameText">
            <img className="postProfileImg" src="/assets/person/1.jpeg" alt="" />
            <div className="postProfileText">
                Betty
            </div>
            </div>
            </div>
            <div className="postBar">
            {/* <input
            placeholder="What would you like to share Betty?"
            className="postInput"
            type="text"
            /> */}
            Posted at 1:23 PM PST
            </div>
            {/* <div className="postButton">
                Send
            </div> */}
            </div>
            {/* <hr className="shareHr"/> */}
        </div>
        <div className="postWrapper">
        <div className="postUserWrapper">
                    <span className="postName">
                    <PermMedia className="postIcons"/> 
                    Image Name posted min 20 ago
                    </span>
                        <img className="postImg" alt="" src="/assets/post/8.jpeg" ></img>
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
                            15
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
                    Comments
                </span> 
                </div>

        </div>
               
            <div className="postStoryWrapper">
                <textarea
                     className="postStory">   
                        this Story
                        this story
                        this story
                    </textarea>
            </div>
    </div>


            
            <div className="postUserInfoWrapper">
            <div className="postUserInfo">
            <div className="postNameText">
            <img className="postProfileImg" src="/assets/person/1.jpeg" alt="" />
            <div className="postProfileText">
                Betty
            </div>
            </div>
            </div>
            <div className="postBar">
            {/* <input
            placeholder="What would you like to share Betty?"
            className="postInput"
            type="text"
            /> */}
            Posted at 1:23 PM PST
            </div>
            {/* <div className="postButton">
                Send
            </div> */}
            </div>
            {/* <hr className="shareHr"/> */}
        </div>
        <div className="postWrapper">
        <div className="postUserWrapper">
                    <span className="postName">
                    <PermMedia className="postIcons"/> 
                    Image Name posted min 20 ago
                    </span>
                        <img className="postImg" alt="" src="/assets/post/8.jpeg" ></img>
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
                            15
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
                    Comments
                </span> 
                </div>

        </div>
               
            <div className="postStoryWrapper">
                <textarea
                     className="postStory">   
                        this Story
                        this story
                        this story
                    </textarea>
            </div>
    </div>


            
            <div className="postUserInfoWrapper">
            <div className="postUserInfo">
            <div className="postNameText">
            <img className="postProfileImg" src="/assets/person/1.jpeg" alt="" />
            <div className="postProfileText">
                Betty
            </div>
            </div>
            </div>
            <div className="postBar">
            {/* <input
            placeholder="What would you like to share Betty?"
            className="postInput"
            type="text"
            /> */}
            Posted at 1:23 PM PST
            </div>
            {/* <div className="postButton">
                Send
            </div> */}
            </div>
            {/* <hr className="shareHr"/> */}
        </div>
        <div className="postWrapper">
        <div className="postUserWrapper">
                    <span className="postName">
                    <PermMedia className="postIcons"/> 
                    Image Name posted min 20 ago
                    </span>
                        <img className="postImg" alt="" src="/assets/post/8.jpeg" ></img>
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
                            15
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
                    Comments
                </span> 
                </div>

        </div>
               
            <div className="postStoryWrapper">
                <textarea
                     className="postStory">   
                        this Story
                        this story
                        this story
                    </textarea>
            </div>
    </div>


            
            <div className="postUserInfoWrapper">
            <div className="postUserInfo">
            <div className="postNameText">
            <img className="postProfileImg" src="/assets/person/1.jpeg" alt="" />
            <div className="postProfileText">
                Betty
            </div>
            </div>
            </div>
            <div className="postBar">
            {/* <input
            placeholder="What would you like to share Betty?"
            className="postInput"
            type="text"
            /> */}
            Posted at 1:23 PM PST
            </div>
            {/* <div className="postButton">
                Send
            </div> */}
            </div>
            {/* <hr className="shareHr"/> */}
        </div>
                
        <div className="postWrapper">
        <div className="postUserWrapper">
                    <span className="postName">
                    <PermMedia className="postIcons"/> 
                    Image Name posted min 20 ago
                    </span>
                        <img className="postImg" alt="" src="/assets/post/8.jpeg" ></img>
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
                            15
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
                    Comments
                </span> 
                </div>

        </div>
               
            <div className="postStoryWrapper">
                <textarea
                     className="postStory">   
                        this Story
                        this story
                        this story
                    </textarea>
            </div>
    </div>


            
            <div className="postUserInfoWrapper">
            <div className="postUserInfo">
            <div className="postNameText">
            <img className="postProfileImg" src="/assets/person/1.jpeg" alt="" />
            <div className="postProfileText">
                Betty
            </div>
            </div>
            </div>
            <div className="postBar">
            {/* <input
            placeholder="What would you like to share Betty?"
            className="postInput"
            type="text"
            /> */}
            Posted at 1:23 PM PST
            </div>
            {/* <div className="postButton">
                Send
            </div> */}
            </div>
            {/* <hr className="shareHr"/> */}
        </div>
        
        </div>
    );
}
