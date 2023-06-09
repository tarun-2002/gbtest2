import React from "react";
import { Link } from "react-router-dom";
import "../components/Footer.css";
import SocialMedia from "./SocialMedia/SocialMedia";

function Footer() {
  return (
    <>
      <footer className="foot-border py-4">

        <div  className="container-xxl">
          <div className="row">
            <div className="logo-div col-md-4">
              <img className="gb-logo" src="/images/logoGBfin.png" alt="logo" />
            </div>
            <div className="col-md-3 col-sm-6 foot-content mb-4">
              <h4 className="footer-head">Quick Links</h4>
              <div className="footer-link d-flex flex-column">
                <Link to="/" className="link-class foot-content mb-1 py-1">
                  Home
                </Link>
                <Link to="/aboutus" className="link-class foot-content mb-1 py-1">
                  About
                </Link>
                <Link to="/book" className="link-class foot-content mb-1 py-1">
                  Book
                </Link>
                <Link to="/contactus" className="link-class foot-content mb-1 py-1">
                  Contact
                </Link>
                <Link to="/login" className="link-class foot-content mb-1 py-1">
                  Login
                </Link>
                <Link to="/privacy" className="link-class foot-content mb-1 py-1">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="link-class foot-content mb-1 py-1">
                  Terms & Conditions
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 foot-content mb-4">
              <h4 className="footer-head">Contact Us</h4>
              <div className="footer-link d-flex flex-column">
                <Link to="/help" className="link-class foot-content mb-1 py-1">
                  Need Help or Have a Question?
                </Link>
                <p>Phone: 870-7493108</p>
                <p>Email: info@gamersburnout.com</p>
                <SocialMedia/>
              </div>
            </div>
            <div className="col-md-2 col-sm-6 foot-content get-Dir mb-4">
              <h4 className="footer-head">Get Direction</h4>
              <div className="footer-link d-flex flex-column">
                <p>Gamer's Burnout, Sector-DS, Chandralok, Lucknow, Uttar Pradesh Pin - 226024</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="foot-border py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 mb-0 foot-content">
              <p className="text-center">&copy; {new Date().getFullYear()} Gamer's Burnout</p>
            </div>
          </div>
        </div>

      </footer>
    </>
  );
}

export default Footer;
