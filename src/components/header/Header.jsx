import "./Header.css"
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Header() {
    const { user } = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <div className="headerContainer">
            <div className="headerLeft">
            <Link to="/" style={{ textDecoration: "none" }}>
          <span >
          {/* <img className="logo" src="Friend Connection"/> */}
          Friend Connection
          </span>
        </Link>
                    </div>
            <div className="headerCenter">
                <div className="searchBar">
                    <Search className="searchIcon" />
                    <input placeholder="Search for friends, posts or videos." type="text" className="searchInput" />
                </div>
            </div>
            <div className="headerWrapper">
            <div className="headerRight">
                <span className="headerLink">
                    Homepage
                </span>
                <span className="headerLink">
                    Timeline
                </span>
            </div>
                <div className="headerIcons">
                    <div className="headerIconItem">
                    <Person />
                    <span className="headerIconBadge">
                        1
                    </span>
                    <div className="headerIconItem">
                    <Chat />
                    <span className="headerIconBadge">
                        1
                    </span>
                    <div className="headerIconItem">
                    <Notifications />
                    <span className="headerIconBadge">
                        1
                    </span>
                    
                    </div>
                    </div>
                    </div>
                    </div>
                    <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + user.profilePicture + '1600x900/?man'
            }
            alt=""
            className="headerImg"
          />
        </Link>
            </div>
            </div>
    );
}
