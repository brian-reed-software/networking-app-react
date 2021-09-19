import "./Share.css"
import { PermMedia } from "@material-ui/icons";


export default function Share() {
    return (
        <div className="shareContainer">
        <div className="shareWrapper">
            <div className="shareUserInfo">
            <div className="userName">
            <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
                Betty
                </div>
            <div className="shareBar">
            <input
            placeholder="What would you like to share Betty?"
            className="shareInput"
            type="text"
            />

            </div>
            </div>
            <hr className="shareHr"/>
            <div className="shareOptions">
                <PermMedia className="shareIcons"/>
                <div className="shareOption">
                    <span className="shareOptionText">
                        Upload <br/>
                        Photo / Video
                    </span>
                </div>
            </div>
        </div>
        </div>
    );
}
