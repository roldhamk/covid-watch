import React, { Component } from "react";
import { Link } from 'react-router-dom'
import cvlogo from "./images/Logo.png";
import "./Home.css";

export class Home extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="headerwrap">
          <div className="header">
            <img src={cvlogo} alt="covid-watch logo" />
          </div>
        </div>
        <div className="page-wrap">
          <div className="page-text">
            <h1>What is Covid-Watch?</h1>
            <p>
              Extraordinary times call for extraordinary measures...and
              extraordinary people.
            </p>
            <p>
              We're here to help you stay connected with your local community
              whilst in isolation, so it doesn't have to feel so isolating.
            </p>
            <h3>How does it work?</h3>
            <p>
              Sign up either as a volunteer to to request assistance, and we can
              match you with people in your local area to help.
            </p>
            <p>
              If you are in need of assistance, you can post requests for
              anything that you need but are unable to get, whether you are at
              risk or self-isolating. This includes shopping for necessities,
              collecting medicine or even just needing someone to talk to.
            </p>
            <p>
              Volunteers will be able to find posts from others close to their
              location to offer help to anyone in any way that they can. There
              is no obligation to take jobs on, and we encourage people to stick
              to the government guidelines at all times.
            </p>
          </div>
          <div className="buttons">
          <Link to="/Signup">
              <button type="button">
                    Sign up as a volunteer
              </button>
          </Link>
            <button>Sign up to request assistance</button>
          </div>
          <div className="existingacc">
            <h3>Already a member?</h3>
            <p>login form here...</p>
            <button>Log In</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
