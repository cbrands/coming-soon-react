import React from 'react';
import './EmailForm.css';

class EmailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    const email = document.getElementById('email');
    const warning = document.getElementById('warning');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    
    if(!re.test(email.value)){
      email.classList.add('error');
      warning.style.visibility = 'visible';
    } else {
      email.classList.remove('error');
      warning.style.visibility = 'hidden';
    }
    event.preventDefault();
  }

  render() {
    return (
      <form className="email-form" onSubmit={this.handleSubmit}>
        <input id="email" className="email" type="text" name="email" 
          placeholder="Your email address..." aria-label="Email input"
          value={this.state.value} onChange={this.handleChange}/>
        <p id="warning" className="validation-error">Please provide a valid email address</p>
        <input className="submit" type="submit" value="Notify me" aria-label="Submit button"/>
      </form>
    );
  }
}

export default EmailForm;
