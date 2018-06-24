import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1 style={{marginBottom : "50px"}}>Welcome to Vdemy</h1>
        <Link to="/login" className="btn btn-ghost btn-login">Login</Link>
        <h3>New User ?</h3>
        <Link to="/signup" className="btn btn-ghost btn-login">Sign Up</Link>
        <Footer />
      </div>
    );
  }
}
