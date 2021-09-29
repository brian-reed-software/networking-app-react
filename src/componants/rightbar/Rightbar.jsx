import "./Rightbar.css"
import {Bookmark, HelpOutline, Event, School  } from "@material-ui/icons";
import Online from "../../componants/online/Online";
import {Users} from "../../Data.js"
export default function Rightbar({profile}) {
    
        const HomeRightbar = () =>{
            return(
                <>
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

                </>
            )
        }

const ProfileRightbar = () => {
    return(
    <>
    <h4 className="rightbarTitle">User Information</h4>
    <div className="rightbarInfo">
        
    <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">
                City:
            </span>
            <span className="rightbarInfoValue">
                PTRLD
            </span>            
        </div>

        <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">
                From:
            </span>
            <span className="rightbarInfoValue">
                PTRLD
            </span>            
        </div>

        <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">
                Bio:
            </span>
            <span className="rightbarInfoValue">
                Working
            </span>            
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
            <div className="rightbarFollowing">
                <img src="assets/people/1.jpeg" alt="" className="rightbarFollowingImg" />
                <div className="span rightbarFollowingName">
                    Johnnnnnn
                </div>
            </div>
        </div>

    </div>
    </>)
}
        return (

        <div className="rightbarContainer">
        <div className="rightbarWrapper">
       <ProfileRightbar/>  
        </div>
        </div>
    );
}
