import React from "react";
import Navigation from "../Navigation/Navigation";
import "./About.css";

function About(){
  return (
    <>
    <div className="About-main">
    <div className="About">
      <div className="container">
            <div className="aboutcontent">
              <h2 className="aboutcontent-heading">About Me</h2>
              <p style={{wordSpacing:'5px' ,fontSize:'25px'}}>
                Hello, <br></br>
                My name is rakshit verma.<br></br>
                I'm a Front End Developer and I have a ambition to become a full stack developer.
                I love to design things and solve design related problems.
                I love using different mediums and try different technologies. 
                My work is mainly focused on frontend-devlopment and designing animations .
                <br></br>
                My hobbies include playing sports and reading.
                My ambition is learn new things and I am intersted in block-chain and machine-learning.
              </p>
        </div>
      </div>
    </div>

    </div>
    </>
  );
};

export default About;