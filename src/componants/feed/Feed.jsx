import "./Feed.css"
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import Share from "../../componants/share/Share";

export default function Header() {
    return (
        <div className="feedContainer">
            <div className="feedWrapper">
              <Share/>
            </div>
        </div>
    );
}
