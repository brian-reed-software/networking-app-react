import userEvent from "@testing-library/user-event"
import "./Online.css"

export default function Online({user}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    return (
       
        <div className="rightbarUserList">
        <span className="rightbarFriendList">
        <div className="rightbarProfileImgContainer">
        <img alt ="" className="rightbarProfileImg" 
        src={PF+user.profilePicture} 
        alt=""/>

<div className="rightbarProfileOnline">
        <span className="rightbarProfileUsername">
            {user.username}
        </span>
        <div className="rightbarProfileOnline2"></div>

         </div>
        </div>

     </span>
    </div>


    )
}
