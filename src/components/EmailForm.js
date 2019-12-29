import React from 'react';
import './EmailForm.css';


const EmailForm = () =>  {
  return (
    <form className="email-form"  action="#">
      <input className="email" type="text" name="email" placeholder="Your email address..." aria-label="Email input"/>
      <p id="warning" className="validation-error">Please provide a valid email address</p>
      <input className="submit" type="submit" value="Notify me" aria-label="Submit button"/>
    </form>
  );
}

export default EmailForm;