import React from 'react';

export default function Footer () {
return(
  <div className="row">
  <div className="col-md-12">
  <footer>
      <div className="row">
          <div className="col span-1-of-2">
              <ul className="footer-nav">
                  <li><a href="#">About us</a></li>
                  <li><a href="#">Courses</a></li>
                  <li><a href="#">Products</a></li>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">Contact</a></li>
              </ul>
          </div>
          <div className="col span-1-of-2">
              <ul className="social-links">
                  <li><a href="#"><i className="icon ion-logo-facebook"></i></a></li>
                  <li><a href="#"><i className="icon ion-logo-twitter"></i></a></li>
                  <li><a href="#"><i className="icon ion-logo-googleplus"></i></a></li>
                  <li><a href="#"><i className="icon ion-logo-instagram"></i></a></li>
              </ul>
          </div>
      </div>
      <div className="row">
          <p>
              This SPA was created for Gloify.
          </p>
          <p>
            Gloify  &copy; All rights reserved.
          </p>
      </div>
      </footer>
      </div>
    </div>
);


}
