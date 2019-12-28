import React from 'react';
import './Social.css';


const Social = () =>  {
  return (
    <section className="social">
      <a href="#"><i className="fab fa-facebook-f"></i><span className="sr-only">facebook</span></a>
      <a href="#"><i className="fab fa-twitter"></i><span className="sr-only">twitter</span></a>
      <a href="#"><i className="fab fa-instagram"></i><span className="sr-only">instagram</span></a>
    </section>
  )
}

export default Social;