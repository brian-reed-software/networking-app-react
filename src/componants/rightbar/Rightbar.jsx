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

                    <span className="rightbarBirthdayOnline">
                    <img alt ="" className="birthdayImg" 
            src="/assets/gift.png" 
            alt=""/>
                        <b>Rajs</b> and 3 others have <b>birthdays</b> today!
                    </span>

                </li>
                <li className="rightbarFriendsOnlineCount">
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
                
            </ul>
            <button className="rightbarButton">
                Show More
            </button>
            <hr className="rightbarHr"/>

            
        </div>
        </div>
    );
}
