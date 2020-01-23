import React from "react";
import "../stylesheets/portfolio.scss";

import mp from "../assets/palace.PNG";
import snake from "../assets/snake.PNG";
import zebe from '../assets/zebe.PNG';
import nyambu from '../assets/nyambu.PNG'
import { FaArrowRight, FaGitAlt } from 'react-icons/fa'


const Portfolio=()=> {
    return (
      <div className="section">
        <h4 style={{padding: '20px'}}> Below is my recent work<span role='img' >&#128516; </span> </h4>
        <div className='project'>
          <img className="img-fluid" src={zebe} alt="zebehtech home page" />
          <p className='project-description'>
            <strong>Angular Js project.</strong><br />
            Developed for Zebehtech Photography, a Voi based photography company.<br />
            The front-end utilizes service workers for Progressive Web App features.<br />
            Makes use of Json web tokens for authentication and<br /> angular authentication guards for route protection.
                 <strong>The Backend</strong> is done using Express Js and Mongo DB for database.<br />
            Image hosting is done on cloudinary using the cloudinary Api.<br />
            Makes use of Bcrypt Js for password hashing.
                </p>
          <div>
            <a href='https://zebehtech.herokuapp.com' target='_blank' rel="noopener noreferrer">visit site <FaArrowRight /></a>
            <br /><br />
            <a href='https://github.com/mbuste/zebehtech' target='_blank' rel="noopener noreferrer">view source <FaGitAlt /></a>
          </div>
        </div>

        <div className='project'>
          <img className="img-fluid" src={nyambu} alt="Moses Nyambu home page" />
          <p className='project-description'>
            <strong>Website for Moses Nyambu</strong>
            <br />
            Front-end is done in React Js.<br />
            Bootstrap 4 being the preferred CSS framework.<br />
            <br />The App is hosted on heroku.<br />
            I make use of css pre processing by using SCSS.<br />
          </p>
          <div>
            <a href='https://mosesnyambu.herokuapp.com' target='_blank' rel="noopener noreferrer">visit site <FaArrowRight /></a>
            <br /><br />
            <a href='https://github.com/mbuste/mosesnyambu' target='_blank' rel="noopener noreferrer">view source <FaGitAlt /></a>
          </div>
        </div>


        <div className='project'>
          <img className="img-fluid" src={mp} alt="milimani palace home page" />
          <p className='project-description'>
            <strong>Website for Milimani palace</strong>
            <br />
            Front-end is done in React Js.<br />
            Bootstrap 4 being the preferred CSS framework.<br />
            <br />The App is hosted on heroku.<br />
            The backend is done in Express with a Mongo DB database.<br />
            Makes use of Nodemailer Smtp for email service<br />
            and json web token for authentication.
          </p>
          <div>
            <a href='https://milimanipalace.herokuapp.com' target='_blank' rel="noopener noreferrer">visit site <FaArrowRight /></a>
            <br /><br />
            <a href='https://github.com/mbuste/milimanipalace' target='_blank' rel="noopener noreferrer">view source <FaGitAlt /></a>
          </div>
        </div>

        <div className='project'>
          <img className="img-fluid" src={snake} alt="snake game paused" />  <p className='project-description'>
            This is a remake of the classic arcade snake game. <br />
            Makes use of the <strong>MVC</strong> architecture.
              <br /> The front-end is done in JavaFx. with controllers in Java.
              <br />Makes use of Java observable nodes and Object manipulation for snake display.
              <br />Utilizes SQLite for database and translation functions for object animation.
                </p>
          <div>
            <a href='https://github.com/mbuste/snakegame' target='_blank' rel="noopener noreferrer">view source <FaGitAlt /></a>
          </div>
        </div>

      </div>
    );
  }

export default Portfolio;
