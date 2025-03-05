import "./componentCSS/profile.css";
import ProfileImg from "../assets/profile.jpg";
import React from "react";

const Profile = () => {
  
  return (
    <>
      <div className="profile">
        <div className="profile-setting">
          <img src={ProfileImg} alt="" />
          <h2>Christian</h2>
        </div>
        <div className="main-menu">
          <a className="journal">Journal</a>
          <a className="fx-journal">Fx Journal</a>
          <a className="topics">Topics</a>
          <a className="image-gallery">Image Gallery</a>
        </div>
      </div>
    </>
  );
};

export default Profile;
