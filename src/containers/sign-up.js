import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';

export default class SignUp extends Component {
  render() {
    return (
      <div className="sign-up-form">
          <div className="row">
              <h2>Register to Access Unlimited Content</h2>
          </div>
          <div className="row">
              <form method="post" action="#" className="contact-form">
                  <div className="row">
                      <div className="col span-1-of-3">
                          <label htmlFor="name">Name</label>
                      </div>
                      <div className="col span-2-of-3">
                          <input type="text" name="name" id="name" placeholder="Your name" required />
                      </div>
                  </div>
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
                          <input type="password" name="password" id="password" placeholder="Enter Password" required />
                      </div>
                  </div>
                  <div className="row">
                      <div className="col span-1-of-3">
                          <label htmlFor="password">Re-Enter Password</label>
                      </div>
                      <div className="col span-2-of-3">
                          <input type="password" name="password" id="password1" placeholder="Re-Enter Password" required />
                      </div>
                  </div>
                  <div className="row">
                      <div className="col span-1-of-3">
                          <label>Newsletter?</label>
                      </div>
                      <div className="col span-2-of-3">
                          <input type="checkbox" name="news" id="news" defaultChecked /> Yes, please
                      </div>
                  </div>

                  <div className="row">
                      <div className="col span-1-of-3">
                          <label>&nbsp;</label>
                      </div>
                      <div className="col span-2-of-3">
                          <Link to="/watch_video_page" className="btn btn-ghost btn-login">Register</Link>
                      </div>
                  </div>

              </form>

          </div>

          <Footer />
      </div>
    );
  }

}
