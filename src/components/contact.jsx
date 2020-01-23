import React from "react";
import "../stylesheets/forms.scss";

const Contact = (props) => {
  return (
    <div className='section'>
      <div className="box">
        <h5>Go on. Reach out to me.</h5>
        <form onSubmit={props.submitForm}>
          <span className='success'>{props.success}</span>
          <div className="inputBox">
            <input type="name" name="name" required value={props.name}
              onChange={props.handleNameChange}
            />
            <label>Name</label>
            <span className='error'>{props.nameError}</span>
          </div>
          <div className="inputBox">
            <input type="email" name="email"
              required
              value={props.email} onChange={props.handleEmailChange}
            />
            <label>Email</label>
            <span className='error'>{props.emailError}</span>
          </div>
          <div className="inputBox">
            <input type="text" name="subject"
              required
              value={props.subject} onChange={props.handleSubjectChange}
            />
            <label>Subject</label>
            <span className='error'>{props.subjectError}</span>
          </div>
          <div className="inputBox">
            <textarea type="textarea" name="message"
              required
              value={props.message} onChange={props.handleMessageChange}
            />
            <label>Message</label>
            <span className='error'>{props.subjectError}</span>
          </div>          
          <input className="btn-submit" type="submit"  value='submit' disabled={props.submitEnabled}/>
        </form>
      </div>
    </div>
  );
}

export default Contact;
