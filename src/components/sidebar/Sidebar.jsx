import "./Sidebar.css"
import { RssFeed, Chat, OndemandVideo, Group, Bookmark, HelpOutline, Event, School  } from "@material-ui/icons";
import CloseFriend from "../../components/closeFriend/CloseFriend";
import Online from "../../components/online/Online";
import { Users } from "../../Data";

export default function Header() {
    return (
        <div className="sidebarContainer">
        <div className="sidebarWrapper">
            <ul className="sidebarList">
            <li className="sidebarListItem">
                    <RssFeed className="sidebarIcon" />
                    <span className="sidebarListItemText">
                        Feed
                    </span>
                </li>
                <li className="sidebarListItem">
                    <Chat className="sidebarIcon" />
                    <span className="sidebarListItemText">
                        Chat
                    </span>
                </li>
                <li className="sidebarListItem">
                    <OndemandVideo className="sidebarIcon" />
                    <span className="sidebarListItemText">
                        Videos
                    </span>
                </li>
                <li className="sidebarListItem">
                    <Group className="sidebarIcon" />
                    <span className="sidebarListItemText">
                        Groups
                    </span>
                </li>
                <li className="sidebarListItem">
                    <Bookmark className="sidebarIcon" />
                    <span className="sidebarListItemText">
                        Bookmarks
                    </span>
                </li>
                <li className="sidebarListItem">
                    <HelpOutline className="sidebarIcon" />
                    <span className="sidebarListItemText">
                        Help
                    </span>
                </li>
                <li className="sidebarListItem">
                    <Event className="sidebarIcon" />
                    <span className="sidebarListItemText">
                        Events
                    </span>
                </li>
                <li className="sidebarListItem">
                    <School className="sidebarIcon" />
                    <span className="sidebarListItemText">
                        School
                    </span>
                </li>
            </ul>
            <button className="sidebarButton">
                Show More
            </button>
            <hr className="sidebarHr"/>
            Close Friends
            <div className="sidebarFriendWrapper">
            <li className="sidebarFriend">
                <span className="sidebarFriendName">
                </span>
            </li>
                {Users.map(u=>(
                    <CloseFriend key={u.id} user={u} />
                ))}
            </div>
            
        </div>
        </div>
    );
}
