import React, { useState } from "react";
import "./Experience.css";

function TimeLineItem(props) {
  return (
      <div
          className="timeline-item"
          onClick={() => {
            props.setActiveTitle(props.title);
            props.setActiveDescription(props.description);
          }}
      >
        <div className="experience-info">
          <h4>{props.title}</h4>
        </div>
      </div>
  );
}

export default function ExperienceScreen() {
  const [activeTitle, setActiveTitle] = useState("");
  const [activeDescription, setActiveDescription] = useState("");
  return (
    <div className="screen-background">
      <div className="experience-background">
        <div className="timeline-background">
          <TimeLineItem
            title={"Software Engineering @ Yext"}
            description={"Fun stuff! Got to work with Go which was exciting!"}
            setActiveTitle={setActiveTitle}
            setActiveDescription={setActiveDescription}
          />
          <TimeLineItem
              title={"Machine Learning @ Boston Children's Hospital"}
              description={"Modelling of protein interaction through structural deformities. Able to improve SOTA!"}
              setActiveTitle={setActiveTitle}
              setActiveDescription={setActiveDescription}
          />
          <TimeLineItem
              title={"Deep Learning @ MITRE"}
              description={"Classified shhhh"}
              setActiveTitle={setActiveTitle}
              setActiveDescription={setActiveDescription}
          />
        </div>
        <div className="highlight-background">
          <h1>{activeTitle}</h1>
          <p>{activeDescription}</p>
        </div>
      </div>
    </div>
  );
}
