import React, { Component } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";
import SideNav from "./SideNav";

class Nav extends Component {
  componentDidMount() {
    M.Sidenav.init(this.Nav);
  }

  render() {
    return (
      <div>
        <nav>
          <div class="nav-wrapper white">
            <Link class="brand-logo" to="/">
              <i class="material-icons">mood</i>
            </Link>
            <a href="#!" class="brand-logo" />
            <a href="#" data-target="mobile-demo" class="sidenav-trigger">
              <SideNav />
            </a>
            <ul class="right hide-on-med-and-down">
              <li>
                <a href="sass.html">Link</a>
              </li>
              <li>
                <a href="badges.html">Link</a>
              </li>
              <li>
                <a href="collapsible.html">Link</a>
              </li>
              <li>
                <a href="mobile.html">Link</a>
              </li>
            </ul>
          </div>
        </nav>
        <ul class="sidenav" id="mobile-demo">
          <li>
            <a href="sass.html">Link</a>
          </li>
          <li>
            <a href="badges.html">Link</a>
          </li>
          <li>
            <a href="collapsible.html">Link</a>
          </li>
          <li>
            <a href="mobile.html">Link</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
