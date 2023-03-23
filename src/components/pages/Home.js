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
      <h3>I am Anna 😊 and who are you?😉</h3>
      <img height="150px" width="150px" src={process.env.PUBLIC_URL+Image1} alt="Self-portrait" /> 
      <p>
      Web design is my new area of interest. I am fascinated about coding.
      <br></br>
      I have other areas of interest such as photography or another recent one like canva design that I post using Intagram yet another new area to discover.
      <br></br>
      I am trying to learn how to apply my natural designer skills to coding. I am grateful to Thomas Scott and Ralph Cox for the opportunity to join the team work on web Garage where I could contribute with my sense of color, visual representation and idea conceptualization. 
      {/* <a href="https://github.com/tascott" target="_blank" rel="noreferrer"></a> */}
      {/* <a href="https://github.com/essexgit" target="_blank" rel="noreferrer"></a> */}
      <img height="250px" width="200px" src={process.env.PUBLIC_URL+Image2} alt="Web_Garage_App_Screenshot" />  
      </p>
    </div>
  );
}
