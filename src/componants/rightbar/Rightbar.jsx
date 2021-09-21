import "./Rightbar.css"
import {Bookmark, HelpOutline, Event, School  } from "@material-ui/icons";
import Online from "../../componants/online/Online";
import {Users} from "../../Data.js"
export default function Rightbar() {
    return (
        <div className="rightbarContainer">
        <div className="rightbarWrapper">
            <ul className="rightbarList">
            <li className="rightbarListItem">
            <img alt ="" className="birthdayImg" 
            src="/assets/gift.png" 
            alt=""/>
                    <span className="rightbarListItemText">
                        
                        <b>Rajs</b> and 3 others have <b>birthdays</b> today!
                    </span>

                </li>
                <li className="rightbarListItem">
                        Friends Online
                    <span className="rightbardFriendOnline">
                    </span>
                </li>

                <div className="rightbarFriendList">

                    {Users.map((u) =>
                    <Online key={u.id} user={u} />
                        )}

                </div>
                
                <li className="rightbarListItem">
                </li>
                <li className="rightbarListItem">
                    <Bookmark className="rightbarIcon" />
                    <span className="rightbarListItemText">
                        Bookmarks
                    </span>
                </li>
                <li className="rightbarListItem">
                    <HelpOutline className="rightbarIcon" />
                    <span className="rightbarListItemText">
                        Help
                    </span>
                </li>
                <li className="rightbarListItem">
                    <Event className="rightbarIcon" />
                    <span className="rightbarListItemText">
                        Events
                    </span>
                </li>
                <li className="rightbarListItem">
                    <School className="rightbarIcon" />
                    <span className="rightbarListItemText">
                        School
                    </span>
                </li>
            </ul>
            <button className="rightbarButton">
                Show More
            </button>
            <hr className="rightbarHr"/>
            <div className="rightbarFriendWrapper">
            <li className="rightbarFriend">
                <img alt ="" className="rightbarFriendImg" src="/assets/person/2.jpeg"/>
                <span className="rightbarFriendName">
                    Friend Name
                </span>
            </li>
            <li className="rightbarFriend">
                <img alt ="" className="rightbarFriendImg" src="/assets/person/2.jpeg"/>
                <span className="rightbarFriendName">
                    Friend Name
                </span>
            </li>
            <li className="rightbarFriend">
                <img alt ="" className="rightbarFriendImg" src="/assets/person/2.jpeg"/>
                <span className="rightbarFriendName">
                    Friend Name
                </span>
            </li>
            <li className="rightbarFriend">
                <img alt ="" className="rightbarFriendImg" src="/assets/person/2.jpeg"/>
                <span className="rightbarFriendName">
                    Friend Name
                </span>
            </li>
            <li className="rightbarFriend">
                <img alt ="" className="rightbarFriendImg" src="/assets/person/2.jpeg"/>
                <span className="rightbarFriendName">
                    Friend Name
                </span>
            </li>
            <li className="rightbarFriend">
                <img alt ="" className="rightbarFriendImg" src="/assets/person/2.jpeg"/>
                <span className="rightbarFriendName">
                    Friend Name
                </span>
            </li>
            </div>
            
        </div>
        </div>
    );
}
