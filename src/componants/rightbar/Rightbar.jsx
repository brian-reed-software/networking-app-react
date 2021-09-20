import "./Rightbar.css"
import { RssFeed, Chat, OndemandVideo, Group, Bookmark, HelpOutline, Event, School  } from "@material-ui/icons";


export default function Rightbar() {
    return (
        <div className="rightbarContainer">
        <div className="rightbarWrapper">
            <ul className="rightbarList">
            <li className="rightbarListItem">
            <img className="birthdayImg" 
            src="/assets/gift.png" 
            alt=""/>
                    <span className="rightbarListItemText">
                        
                        <b>Rajs</b> and 3 others have <b>birthdays</b> today!
                    </span>

                </li>
                <li className="rightbarListItem">
                    <span className="rightbardFriendOnline">
                    Friends Online

                    </span>
                    <span className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                        <img className="rightbarProfileImg" 
                        src="/assets/person/4.jpeg" 
                        alt=""/>
                        <div className="rightbarProfileImgName">
                            Leo
                        </div>
                        </div>
                    </span>
                </li>
                <li className="rightbarListItem">
                    <OndemandVideo className="rightbarIcon" />
                    <span className="rightbarListItemText">
                        Videos
                    </span>
                </li>
                <li className="rightbarListItem">
                    <Group className="rightbarIcon" />
                    <span className="rightbarListItemText">
                        Groups
                    </span>
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
                <img className="rightbarFriendImg" src="/assets/person/2.jpeg"/>
                <span className="rightbarFriendName">
                    Friend Name
                </span>
            </li>
            <li className="rightbarFriend">
                <img className="rightbarFriendImg" src="/assets/person/2.jpeg"/>
                <span className="rightbarFriendName">
                    Friend Name
                </span>
            </li>
            <li className="rightbarFriend">
                <img className="rightbarFriendImg" src="/assets/person/2.jpeg"/>
                <span className="rightbarFriendName">
                    Friend Name
                </span>
            </li>
            <li className="rightbarFriend">
                <img className="rightbarFriendImg" src="/assets/person/2.jpeg"/>
                <span className="rightbarFriendName">
                    Friend Name
                </span>
            </li>
            <li className="rightbarFriend">
                <img className="rightbarFriendImg" src="/assets/person/2.jpeg"/>
                <span className="rightbarFriendName">
                    Friend Name
                </span>
            </li>
            <li className="rightbarFriend">
                <img className="rightbarFriendImg" src="/assets/person/2.jpeg"/>
                <span className="rightbarFriendName">
                    Friend Name
                </span>
            </li>
            </div>
            
        </div>
        </div>
    );
}
