import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import header_image from "../images/profile_kuntal.jpg"
import {
  SiJavascript,
  SiAngular,
  SiReact,
  SiNodeDotJs,
  SiPython,
  SiDjango,
  SiNpm,
  SiYarn,
  SiWebpack,
  SiHtml5,
  SiCss3,
  SiSass,
  SiStrapi,
  SiGithub,
  SiGatsby,
  SiFlutter,
  SiDart,
  SiTypescript,
  SiLinkedin,
  SiYoutube,
  SiMedium,
} from "react-icons/si"
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
      <h1 className="blog-name pt-lg-4 mb-0 d-none d-lg-block">
        <Link to="/">Kuntal Ghosh</Link>
      </h1>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <button
          className="navbar-toggler collapsed"
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
            <div className="bio mb-3 font-weight-light text-">
              Hi, my name is Kuntal Ghosh and I'm a Full-Stack Mobile & Web
              Application Developer. Welcome to my personal website!
            </div>
            {/* <!--//bio--> */}
            <ul className="social-list list-inline py-2 mx-auto">
              <li className="list-inline-item">
                <a
                  href="https://github.com/kuntal-ghosh"
                  style={{ color: "green", fontSize: "16px" }}
                >
                  <SiGithub />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://medium.com/@kuntalghosh.ewu"
                  style={{ color: "green", fontSize: "16px" }}
                >
                  <SiMedium />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.linkedin.com/in/kuntal-ghosh/"
                  style={{ color: "green", fontSize: "16px" }}
                >
                  <SiLinkedin />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.youtube.com/channel/UC96pPZxWZforxHE6yNC8ZtQ?view_as=subscriber"
                  style={{ color: "green", fontSize: "16px" }}
                >
                  <SiYoutube />
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
