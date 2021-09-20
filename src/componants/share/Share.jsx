import "./Share.css"
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";


export default function Share() {
    return (
        <div className="shareContainer">
        <div className="shareWrapper">
            <div className="shareUserInfoWrapper">
            <div className="shareUserInfo">
            <div className="userName">
            <img alt ="" className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
            <div className="shareProfileText">
                Betty
            </div>
            </div>
            </div>
            <div className="shareBar">
            <input
            placeholder="What would you like to share Betty?"
            className="shareInput"
            type="text"
            />

            </div>
            <div className="shareButton">
                Send
            </div>
            </div>
            {/* <hr className="shareHr"/> */}

            <div className="shareOptions">
                <div className="shareOption">
                <PermMedia className="shareIcons"/>
                    <span className="shareOptionText">
                        Upload <br/>
                    </span>
                </div>
                <div className="shareOption">
                <Label className="shareIcons"/>
                    <span className="shareOptionText">
                        Tag <br/>
                    </span>
                </div>
                <div className="shareOption">
                <Room className="shareIcons"/>
                    <span className="shareOptionText">
                        Location <br/>
                    </span>
                </div>
                <div className="shareOption">
                <EmojiEmotions className="shareIcons"/>
                    <span className="shareOptionText">
                        Emoji <br/>
                    </span>
                </div>

            </div>


        </div>
        
        </div>
    );
}