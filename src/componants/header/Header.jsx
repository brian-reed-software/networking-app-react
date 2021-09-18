import "./Header.css"
import { Search, Person, Chat, Notifications } from "@material-ui/icons";


export default function Header() {
    return (
        <div className="headerContainer">
            <div className="headerLeft">
                <span className="logoSpan"><img  className="logo" src="https://res.cloudinary.com/at100dev/image/upload/v1628713361/social_again_l9lsgr.svg"></img></span>
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
                <img src="/assets/person/1.jpeg" alt="" className="headerImg" />
            </div>
            </div>
    );
}
