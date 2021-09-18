import Header from "../../componants/header/Header";
import Sidebar from "../../componants/sidebar/Sidebar";
import Feed from "../../componants/feed/Feed";
import Rightbar from "../../componants/rightbar/Rightbar";
import "./Home.css"

export default function Home() {

    return (
        <>
        <Header/>
        <div className="homeContainer">
        <Sidebar/>
        <Feed/>
        <Rightbar/>
        </div>
        </>
    );
}
