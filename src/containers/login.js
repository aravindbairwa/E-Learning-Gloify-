import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';

export default class Login extends Component {
  render() {
    return (
      <div className="row">
      <h2 style={{color: "#3746ef",marginTop: "20px"}}>Log In</h2>

      <form method="post" action="#" className="contact-form ">
          <div className="row">
              <div className="col span-1-of-3">
                  <label htmlFor="email">Email</label>
              </div>
              <div className="col span-2-of-3">
                  <input type="email" name="email" id="email" placeholder="Your email" required />
              </div>
          </div>
          <div className="row">
              <div className="col span-1-of-3">
                  <label htmlFor="password">Password</label>
              </div>
              <div className="col span-2-of-3">
                  <input type="password" name="password" id="password" placeholder="Your Password" required />
              </div>
          </div>
              <div className="row">
                  <div className="col span-1-of-3">
                      <label>&nbsp;</label>
                  </div>
                  <div className="col span-2-of-3">
                      <Link to="/watch_video_page" className="btn btn-ghost btn-login">Log In</Link>
                  </div>
              </div>
          <div className="row reg">
                <p style={{marginTop: "50px"}}>Not Registerted Yet?</p>
              </div>
          <div className="row">
            <Link to="/signup" className="btn btn-ghost btn-login">Sign Up!</Link>
          </div>


          </form>

          <Footer />
      </div>


    );
  }
}
