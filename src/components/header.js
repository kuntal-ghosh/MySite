import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import header_image from "../images/profile_kuntal.jpg"

const Header = ({ siteTitle }) => (
  // <header
  //   style={{
  //     background: `rebeccapurple`,
  //     marginBottom: `1.45rem`,
  //   }}
  // >
  //   <div
  //     style={{
  //       margin: `0 auto`,
  //       maxWidth: 960,
  //       padding: `1.45rem 1.0875rem`,
  //     }}
  //   >
  //     <h1 style={{ margin: 0 }}>
  //       <Link
  //         to="/"
  //         style={{
  //           color: `white`,
  //           textDecoration: `none`,
  //         }}
  //       >
  //         {siteTitle}
  //       </Link>
  //     </h1>
  //   </div>
  // </header>

  <header className="header text-center">
    <div className="force-overflow">
      <h1 className="blog-name pt-lg-4 mb-0">
        <Link to="/">Tarikul Islam</Link>
      </h1>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navigation"
          aria-controls="navigation"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navigation" className="collapse navbar-collapse flex-column">
          <div className="profile-section pt-3 pt-lg-0">
            <img
              className="profile-image mb-3 rounded-circle mx-auto"
              src={header_image}
              alt="header'spicture"
            />
            <div className="bio mb-3">
              Hi, my name is Tarikul Islam and I'm a Mobile Application
              Developer. Welcome to my personal website!
            </div>
            {/* <!--//bio--> */}
            <ul className="social-list list-inline py-2 mx-auto">
              <li className="list-inline-item">
                <a href="https://github.com/Tarikul711">
                  <i className="fab fa-github-alt fa-fw"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://stackoverflow.com/users/5921109/md-tarikul-islam">
                  <i className="fab fa-stack-overflow fa-fw"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/in/md-tarikul-islam-5192b713a/">
                  <i className="fab fa-linkedin-in fa-fw"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://medium.com/@tarikul711">
                  <i className="fab fa-medium-m"></i>
                </a>
              </li>
              {/* <!-- <li className="list-inline-item"><a href="#"><i className="fab fa-twitter fa-fw"></i></a></li> --> */}
            </ul>
            {/* <!--//social-list--> */}
            <hr />
          </div>
          {/* <!--//profile-section--> */}
          <ul className="navbar-nav flex-column text-left">
            <li className="nav-item ">
              <Link to="/" className="nav-link" activeClassName="active_link">
                <i className="fas fa-user fa-fw mr-2"></i>About Me
                {/* <span className="sr-only">(current)</span> */}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/portfolio"
                className="nav-link"
                activeClassName="active_link"
              >
                <i className="fas fa-laptop-code fa-fw mr-2"></i>Portfolio
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/resume"
                className="nav-link"
                activeClassName="active_link"
              >
                <i className="fas fa-file-alt fa-fw mr-2"></i>Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Blog"
                className="nav-link"
                activeClassName="active_link"
              >
                <i className="fas fa-blog fa-fw mr-2"></i>Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Contact"
                className="nav-link"
                activeClassName="active_link"
              >
                <i className="fas fa-envelope-open-text fa-fw mr-2"></i>Contact
              </Link>
            </li>
          </ul>
          <div className="my-2">
            <Link
              to="/hireme"
              className="btn btn-primary"
              activeClassName="active_link"
            >
              <i className="fas fa-paper-plane mr-2"></i>Hire Me
            </Link>
          </div>

          {/* <!--//dark-mode-toggle--> */}
        </div>
      </nav>
    </div>
    {/* <!--//force-overflow--> */}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
