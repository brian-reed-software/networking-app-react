import "./Feed.css"
import {  } from "@material-ui/icons";
import Share from "../../componants/share/Share";
import Post from "../../componants/post/Post";
import {Posts} from "../../Data.js";

export default function Feed() {
    return (
        <div className="feedContainer">
            <div className="feedWrapper">
              <Share/>
              {Posts.map((p)=> (
                <Post key={p.id} post={p}/>
                ))}
            </div>
        </div>
    );
}
