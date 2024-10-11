import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

function Post({ text, user, postImage }) {
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerAuthor">
          <Avatar style={{ marginRight: "10px" }}>
            {user.charAt(0).toUpperCase()}
          </Avatar>{" "}
          {user}
        </div>       
      </div>
      <div className="post__image">
        <h1>{text}</h1>
        <img src={postImage} alt="PostImage" />
      </div>
      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__iconsMain">            
          </div>
          <div className="post__iconSave">
            <BookmarkBorderIcon className="postIcon" />
          </div>
        </div>        
      </div>
    </div>
  );
}

export default Post;
