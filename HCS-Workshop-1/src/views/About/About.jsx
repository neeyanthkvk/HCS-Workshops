import React from "react";
import "./About.css";
import Neeyanth from '../../assets/Neeyanth.jpg';

export default function AboutScreen() {
  return (
    <div className="screen-background">
      <div className="intro-background">
        <div className="intro-item">
          <div style={{"text-align": "center"}}><img src={Neeyanth} alt="" height={200}/></div>
        </div>
        <div className="intro-item">
          Hi! I'm Neeyanth! This is my website! Click the links above to see more information!
        </div>
      </div>
    </div>
  );
}
