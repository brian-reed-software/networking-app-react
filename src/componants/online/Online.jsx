import userEvent from "@testing-library/user-event"
import "./Online.css"

export default function Online({user}) {
    return (
       
        <div className="rightbarUserList">
        <span className="rightbarFriendList">
        <div className="rightbarProfileImgContainer">
        <img alt ="" className="rightbarProfileImg" 
        src={user.profilePicture} 
        alt=""/>



        </div>
        <div className="rightbarProfileOnline">
        <span className="rightbarProfileUsername">
            {user.username}
        </span>
         </div>
    </span>
    </div>


    )
}
