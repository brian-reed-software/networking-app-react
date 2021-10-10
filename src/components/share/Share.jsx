import "./Share.css"
import {
  PermMedia,
  Label,
  Room,
  EmojiEmotions,
  Cancel,
} from "@material-ui/icons";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

export default function Share() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();
  const [file, setFile] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      console.log(newPost);
      try {
        await axios.post("https://friends-again-api.herokuapp.com/api/upload", data);
      } catch (err) {}
    }
    try {
      await axios.post("https://friends-again-api.herokuapp.com/api/posts", newPost);
      window.location.reload();
    } catch (err) {}
  };

    return (

        <div className="shareContainer">
        <div className="shareWrapper">
        <div className="shareUserWrapper">
          <div className="shareTop">
            <img
              className="shareProfileImg"
              src={
                user.profilePicture
                  ? PF + user.profilePicture
                  : PF + user.profilePicture + '1600x900/?woman'
              }
              alt=""
            />
            <input
              placeholder={"What would you like to share " + user.username + "?"}
              className="shareInput"
              ref={desc}
            />
          <button className="shareButton" type="submit">
              Share
        </button>
        <hr className="shareHr" />
          </div>

          {file && (
            <div className="shareImgContainer">
              <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
              <Cancel className="shareCancelImg" onClick={() => setFile(null)} />
            </div>
          )}
          <form className="shareBottom" onSubmit={submitHandler}>
            <div className="shareOptions">
              <label htmlFor="file" className="shareOption">
                <PermMedia htmlColor="tomato" className="shareIcon" />
                <span className="shareOptionText">Photo or Video</span>
                <input
                  style={{ display: "none" }}
                  type="file"
                  id="file"
                  accept=".png,.jpeg,.jpg"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </label>
              <div className="shareOption">
                <Label htmlColor="blue" className="shareIcon" />
                <span className="shareOptionText">Tag</span>
              </div>
              <div className="shareOption">
                <Room htmlColor="green" className="shareIcon" />
                <span className="shareOptionText">Location</span>
              </div>
              <div className="shareOption">
                <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
                <span className="shareOptionText">Feelings</span>
              </div>
            </div>

          </form>
        </div>
      </div>
      </div>


        // <div className="shareContainer">
        // <div className="shareWrapper">
        //     <div className="shareUserInfoWrapper">
        //     <div className="shareUserInfo">
        //     <div className="userName">
        //     <img alt ="" className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
        //     <div className="shareProfileText">
        //         Betty
        //     </div>
        //     </div>
        //     </div>
        //     <div className="shareBar">
        //     <input
        //     placeholder="What would you like to share Betty?"
        //     className="shareInput"
        //     type="text"
        //     />

        //     </div>
        //     <div className="shareButton">
        //         Send
        //     </div>
        //     </div>
        //     {/* <hr className="shareHr"/> */}

        //     <div className="shareOptions">
        //         <div className="shareOption">
        //         <PermMedia className="shareIcons"/>
        //             <span className="shareOptionText">
        //                 Upload <br/>
        //             </span>
        //         </div>
        //         <div className="shareOption">
        //         <Label className="shareIcons"/>
        //             <span className="shareOptionText">
        //                 Tag <br/>
        //             </span>
        //         </div>
        //         <div className="shareOption">
        //         <Room className="shareIcons"/>
        //             <span className="shareOptionText">
        //                 Location <br/>
        //             </span>
        //         </div>
        //         <div className="shareOption">
        //         <EmojiEmotions className="shareIcons"/>
        //             <span className="shareOptionText">
        //                 Emoji <br/>
        //             </span>
        //         </div>

        //     </div>


        // </div>
        
        // </div>
    );
}