import Header from "../../componants/header/Header";
import Sidebar from "../../componants/sidebar/Sidebar";
import Feed from "../../componants/feed/Feed";
import Rightbar from "../../componants/rightbar/Rightbar";
import "./Profile.css"

export default function Home() {

    return (
        <>
        <Header/>
        <div className="profile">
        <Sidebar/>
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                <img className="profileCoverImg" 
                src="assets/post/3.jpeg" 
                alt=""/>
                <img className="profileUserImg" 
                src="assets/person/7.jpeg" 
                alt=""/>
                    
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">Name</h4>
                    <h4 className="profileInfoDesc">Desc</h4>
                </div>

                <div className="profileRightBottom">
                <Feed/>
                <Rightbar profile/>
                </div>
            </div>

        </div>

        </div>
        </>
    );
}
