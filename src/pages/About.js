import React, { Component } from "react";
import "./About.css";
import profile_pic from "../assets/profile_pic.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Jair Coronado</div>
            <div className="brief_description">
              Hi! My name is Jair. I was born and raised in San Antonio, Texas and I am a huge car/aviation enthusiast. I have very little JS experience so this should be fun!
            </div>
          </div>
        </div>
      </div>
    );
  }
}
