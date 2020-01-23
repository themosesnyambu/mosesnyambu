import React from "react";
import "../stylesheets/about.scss";
const About =()=> {
 
    return (
      <React.Fragment>
        <div className="about section">
          <div className="skills">
            <div className="skill">
              <h6>Languages</h6>
              <ul>
                <li>Java</li>
                <li>Javascript</li>
                <li>php</li>
                <li>C</li>
              </ul>
            </div>
            <div className="skill">
              <h6>Front End</h6>
              <ul>
                <li>React</li>
                <li>Angular</li>
                <li>Java Fx</li>
                <li>Scss | CSS </li>
              </ul>
            </div>
            <div className="skill">
              <h6>Back End</h6>
              <ul>
                <li>Node</li>
                <li>Express</li>
                <li>php</li>
              </ul>
            </div>
            <div className="skill">
              <h6>Deployment</h6>
              <ul>
                <li>Heroku</li>
                <li>Netlify</li>
                <li>Circle Ci</li>
              </ul>
            </div>
            <div className="skill">
              <h6>Version Control</h6>
              <ul>
                <li>Git</li>
              </ul>
            </div>
            <div className="skill">
              <h6>Database</h6>
              <ul>
                <li>Mongo db</li>
                <li>Mysql</li>
                <li>Sqlite</li>
              </ul>
            </div>
          </div>
          <div className='sum'>
          <h3>THE SUM</h3>
          <p>
            Moses Nyambu is a{" "}
            <span className="highlight">Full Stack Developer</span>.<br />
            I love programming and technology.<br/> 
            Ever since producing <span className='highlight'>"Hello World!"</span> on my console<br/> I have never looked back.<br/>
            Falling in love with this world that delivers joy to my life.
          </p>
          </div>
        </div>
      </React.Fragment>
    );
  }


export default About;
