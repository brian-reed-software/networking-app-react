import "./CloseFriend.css"
import {  } from "@material-ui/icons";
// import Post from "../../componants/post/Post";
import {Users} from "../../Data.js"
import Online from "../online/Online";

export default function CloseFriend({user}) {
    return (
        <li className="sidebarFriend">
            <img className="sidebarFriendImg" src={user.profilePicture} alt=""/>
            <span className="sidebarFriendName">{user.username}</span>
                
                {Users.map((u) =>
                    <Online key={u.id} user={u} />
                        )}

        </li>
    );
}
