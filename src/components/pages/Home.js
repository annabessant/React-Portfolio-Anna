import React from 'react';
import Header from '../Header';
import "./Home.css"
let Image1 = "/assets/images/Anna_Bessant.jpg";
let Image2 = "/assets/images/Project_7_Web_garage.png";

export default function Home() {
  return (
    <div>
        {/* <Header backgroundImage="https://i.imgur.com/qkdpN.jpg">
            <h1>Pupster</h1>
            <h2>They're the Good Boys and Girls</h2>
        </Header> */}
      <h3 style={{backgroundColor: "lightblue"}}>I'm Anna Bessant😊</h3>
      <img className="float-left" height="150px" width="150px" src={process.env.PUBLIC_URL+Image1} alt="Self-portrait" /> 
      <img className="float-right" height="250px" width="200px" src={process.env.PUBLIC_URL+Image2} alt="Web_Garage_App_Screenshot" />  
      <p className="para-style">
      Web design is my new area of interest. I am fascinated about coding.
      <br></br>
      I have other areas of interest such as photography or another recent one like canva design that I post using Intagram yet another new area to discover.
      <br></br>
      I am trying to learn how to apply my natural designer skills to coding. I am grateful to Thomas Scott and Ralph Cox for the opportunity to join the team work on web Garage where I could contribute with my sense of color, visual representation and idea conceptualization. 
      <br></br>
      <a href="https://github.com/tascott" target="_blank" rel="noreferrer">Thoms' Gihub</a>
      {/* <br></br> */}
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <a href="https://github.com/essexgit" target="_blank" rel="noreferrer">Ralph's Github</a>
      </p>
    </div>
  );
}
