import userEvent from "@testing-library/user-event"
import "./Online.css"

export default function Online({user}) {
    return (
       
        <li className="rightbarListItem">
        <span className="rightbarFriendItem">
        <div className="rightbarProfileImgContainer">
        <img alt ="" className="rightbarProfileImg" 
        src={user.profilePicture} 
        alt=""/>

        <span className="rightbarProfileUsername">
            {user.username}
        </span>

        </div>
        <div className="rightbarProfileOnline">
         </div>
    </span>
    </li>


    )
}
