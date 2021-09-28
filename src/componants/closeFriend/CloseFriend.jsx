import "./CloseFriend.css"
import {  } from "@material-ui/icons";
// import Post from "../../componants/post/Post";
import {Users} from "../../Data.js"
import Online from "../online/Online";

export default function CloseFriend() {
    return (
        <div className="closeFriendContainer">
            <div className="closeFriendWrapper">

                {Users.map((u) =>
                    <Online key={u.id} user={u} />
                        )}

            </div>
        </div>
    );
}
