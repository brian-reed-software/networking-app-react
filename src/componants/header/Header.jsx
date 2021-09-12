import "./header.css"
import { Search, Person } from "@material-ui/icons";


export default function Header() {
    return (
        <div className="headerContainer">
            <div className="headerLeft">
                <span className="logo">Social</span>
            </div>
            <div className="headerCenter">
                <div className="searchBar">
                    <Search />
                    <input placeholder="Search for friend, post or video." type="text" className="searchInput" />
                </div>
            </div>
            <div className="headerRight">
                <span className="headerLink">
                    Homepage
                </span>
                
                <span className="headerLink">
                    Timeline
                </span>

                <div className="headerIcons">
                    <div className="headerIconItem">
                    <Person />
                    <span className="headerIconBadge">
                        1
                    </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
