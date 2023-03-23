import React from 'react';
import "./Projects.css"
import { Container, Row, Col } from "react-bootstrap";
let Project1 = "/assets/images/Project_1_Password_Generator.png";
let Project2 = "/assets/images/Project_2_Bootstrap_portfolio.png";
let Project3 = "/assets/images/Project_3_My_Team.png";
let Project4 = "/assets/images/Project_4_weather_dashboard.png";
let Project5 = "/assets/images/Project_5_Prof_README.png";
let Project6 = "/assets/images/Project_6_Movie.png";



export default function Projects() {
  return (
    <div>
      {/* Portfolio Section */}
      <section className="PortfolioSection">
      <Container>
          <h2 style={{backgroundColor: "lightblue"}}>Recent Projects</h2>
          <p>"A journey of thousand miles begins with a single step" (Lao Tsu, 571 BC). These are mine beginner's steps.</p>
        <Row className="ProjectsList">
        <Col sm="4" className="Project">                 
          <h4 class="project-title">Password Generator 🔑</h4>
          <p className='info-p'> An app that generates a password when the button is clicked with 10-64 characters of lower-, upper-, numeric and/or special case.
          </p>
          <img height="250px" width="250px" src={process.env.PUBLIC_URL+Project1} alt="Project_1_Password_Generator.png" /> 
          {/* <div style = "width:400px"> */}
            {/* <div style="float: left; width:200px"> */}
          <a href="https://github.com/annabessant/Password-Generator" target="_blank" class="project-link"><button data-inline="true">GitHub Repo</button></a>
          {/* <br></br> */}
          <a href="https://annabessant.github.io/Password-Generator/" target="_blank" class="project-link"><button data-inline="true">Deployment</button></a>
          {/* </div> */}
        </Col>
        <Col sm="4" className="Project">  
        <h4 class="project-title">Bootstrap portfolio 🧑‍🦳</h4>
          <p className='info-p'> Using Bootstrap to style your portfolio and determine how your layout behaves on different viewport sizes.
          </p>               
        <img height="250px" width="250px" src={process.env.PUBLIC_URL+Project2} alt="Project_2_Botstrap_Portfolio.png" />
          <a href="https://github.com/annabessant/Bootstrap_Portfolio" target="_blank" class="project-link">GitHub Repo</a>
          <br></br>
          <a href="https://annabessant.github.io/Bootstrap_Portfolio/" target="_blank" class="project-link">Deployment</a>
        </Col> 
        <Col sm="4" className="Project">                
          <h4 class="project-title">My Team 🎶</h4>
          <p className='info-p'> Takes in information about employees on a team, then generates an HTML webpage that displays summaries for each person.
          </p>
          <img height="250px" width="250px" src={process.env.PUBLIC_URL+Project3} alt="Project_3_My_Team.png" /> 
          <a href="https://github.com/annabessant/Team-Profile-Generator-with-Tests" target="_blank" class="project-link">GitHub Repo</a>
          <br></br>
          <a href="https://watch.screencastify.com/v/vStn9RCoqWpeMxQx0om8" target="_blank" class="project-link">Demo Video 🎥</a> 
        </Col>       
        </Row>
        <Row className='pt-4'>
        <Col sm="4" className="Project">
          <h4 class="project-title">5 Day Weather Forecast 🌨️</h4>
          <p className='info-p'> Shows weather conditions for a searched city and presents data with a 5-day forecast.
          </p>
          <img height="250px" width="250px" src={process.env.PUBLIC_URL+Project4} alt="Project_1_Password_Generator.png" /> 
          <a href="https://github.com/annabessant/Server-APIs-Weather-Dashboard" target="_blank" class="project-link">GitHub Repo</a>
          <br></br>
          <a href="https://annabessant.github.io/Server-APIs-Weather-Dashboard/" target="_blank" class="project-link">Deployment</a>
      </Col>
      <Col sm="4" className="Project">                
          <h4 class="project-title">ReadMe Generator💻</h4>
          <p className='info-p'> Generates a professional README.md file from a user's input using the Inquirer package.
          </p>
          <img height="250px" width="250px" src={process.env.PUBLIC_URL+Project5} alt="Project_5_Prof_README.png" />
          <a href="https://github.com/annabessant/Node.js-Professional-README-Generator" target="_blank" class="project-link">GitHub Repo</a>
          <br></br>
          <a href="https://watch.screencastify.com/v/zXTWfzLMnpdB0AbBDkT5" target="_blank" class="project-link">Demo Video 🎥</a>
      </Col>
      <Col sm="4" className="Project">                
          <h4 class="project-title">Movie project🎞️</h4>
          <p className='info-p'> Searches for movies, shows a trailer, stores. Done with Matt Gaarder & Milda Jancauskaite.
          </p>
          <img height="250px" width="250px" src={process.env.PUBLIC_URL+Project6} alt="Project_1_Password_Generator.png" /> 
          <a href="https://github.com/MattGaarder/moovie-project" target="_blank" class="project-link">GitHub Repo</a>
          <br></br>
          <a href="https://mattgaarder.github.io/moovie-project/" target="_blank" class="project-link">Deployment</a>  
      </Col>
        </Row>
      </Container>
    </section>

    {/* <Footer /> */}
    </div>
  )
}
