import React from "react";
import "../stylesheets/forms.scss";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      email: "",
      subject: "",
      message: "",
      error: ""
    };
  }
  submitForm = event => {
    event.preventDefault();
    const data = this.state;
    const url = "https://milimaniserver.herokuapp.com/contact";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        if (res.status === 200) {
          return res.json();
        } else return res.json();
      })
      .then(data => {
        this.setState({
          error: data.message
        });
      })
      .catch(err =>
        this.setState({
          error: err
        })
      );
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      error: ""
    });
  };

  showError() {
    if (this.state.error)
      return <div className="alert alert-success">{this.state.error}</div>;
  }

  render() {
    return (
      <div className='section'>
        <div className="box">
          <h5>Go on. Reach out to me.</h5>
          <form onSubmit={this.submitForm}>
          <div className="inputBox">
              <input
                type="name"
                name="name"
                required
                value={this.state.name}
                onChange={this.handleChange}
              />
              <label>Name</label>
            </div>
            <div className="inputBox">
              <input
                type="email"
                name="email"
                required
                value={this.state.email}
                onChange={this.handleChange}
              />
              <label>Email</label>
            </div>
            <div className="inputBox">
              <input
                type="text"
                name="subject"
                required
                value={this.state.subject}
                onChange={this.handleChange}
              />
              <label>Subject</label>
            </div>
            <div className="inputBox">
              <textarea
                type="textarea"
                name="message"
                required
                value={this.state.message}
                onChange={this.handleChange}
              />
              <label>Message</label>
            </div>
            {this.showError()}
            <button className="btn-outline-primary" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
