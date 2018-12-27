import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/sass/materialize.scss";
import M from "materialize-css";
import tucsonImage from "../public/tucson1.jpg"; // Tell Webpack this JS file uses this image

class Landing extends Component {
  componentDidMount() {
    M.Parallax.init(this.Landing);
  }

  render() {
    return (
      <div>
        <div
          ref={Landing => {
            this.Landing = Landing;
          }}
          id="index-banner"
          className="parallax-container"
        >
          <div className="section no-pad">
            <div className="container landing-container">
              <h1 className="header center title">
                Tucson Community Meditation Center
              </h1>
              <div className="landing-links">
                <h4>
                  <Link to="#">Classes</Link>
                </h4>
                <h4>
                  <Link to="/retreats">Retreats</Link>
                </h4>
                <h4>
                  <Link to="#">Schedule</Link>
                </h4>
                <h4>
                  <Link to="#">Donate</Link>
                </h4>
                <h4>
                  <Link to="#">About</Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="parallax">
            <img src={tucsonImage} alt="Unsplashed background img 1" />
          </div>
        </div>
        <div className="container">
          <div className="section no-pad">
            <div className="row">
              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center black-text">
                    <i className="material-icons">flash_on</i>
                  </h2>
                  <h5 className="center">Speeds up development</h5>

                  <p className="light">
                    We did most of the heavy lifting for you to provide a
                    default stylings that incorporate our custom components.
                    Additionally, we refined animations and transitions to
                    provide a smoother experience for developers.
                  </p>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center black-text">
                    <i className="material-icons">group</i>
                  </h2>
                  <h5 className="center">User Experience Focused</h5>

                  <p className="light">
                    By utilizing elements and principles of Material Design, we
                    were able to create a framework that incorporates components
                    and animations that provide more feedback to users.
                    Additionally, a single underlying responsive system across
                    all platforms allow for a more unified user experience.
                  </p>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center black-text">
                    <i className="material-icons">settings</i>
                  </h2>
                  <h5 className="center">Easy to work with</h5>

                  <p className="light">
                    We have provided detailed documentation as well as specific
                    code examples to help new users get started. We are also
                    always open to feedback and can answer any questions a user
                    may have about Materialize.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
