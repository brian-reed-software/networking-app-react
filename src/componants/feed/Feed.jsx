import "./Feed.css"
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import Share from "../../componants/share/Share";
import Post from "../../componants/post/Post";
import {Posts} from "../../Data.js";

export default function Header() {
    return (
        <div className="feedContainer">
            <div className="feedWrapper">
              <Share/>
              {Posts.map(p=>
                <Post 
                key={p.id} post={p}
                />
                )}
              <Post/>
            </div>
        </div>
    );
}
