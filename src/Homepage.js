import React from "react";
import "./Homepage.css";
import Sidenav from "./navigation/Sidenav";
import CreatePost from "./timeline/Post/CreatePost";

function Homepage() {
  return (
    <div className="homepage">
      <div className="homepage__navWraper">
        <Sidenav />
      </div>
      <div className="homepage__timeline">
        <CreatePost />      
      </div>
    </div>
  );
}

export default Homepage;
