import React from "react";
import Project from "../../components/Project/Project";

export default function ProjectsScreen() {
  return (
      <div className="screen-background">
          <Project
              title="PDGAN"
              description="Cool Machine Learning!"
              link="https://github.com/neeyanthkvk/PDGAN"
          />
          <Project
              title="CTS"
              description="Cool Other Project!"
              link="https://github.com/neeyanthkvk/hackworld-poc"
          />
          <Project
              title="Personal Portfolio"
              description="This is my personal website!"
              link="https://neeyanth.com"
          />
      </div>
  );
}
