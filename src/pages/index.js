import React from "react"
import { Link } from "gatsby"
import profile from "../images/profile_img.jpg"
import asp from "../images/asp.png"

import "react-mdl/extra/material.css"
import "react-mdl/extra/material.js"

import Layout from "../components/layout"
import Projects from "../components/Projects"
import Blog1 from "../images/blog-post-thumb-1.jpg"

import Blog2 from "../images/blog-post-thumb-card-1.jpg"

import Blog3 from "../images/blog-post-thumb-4.jpg"

// import Image from "../components/image"
// import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCoffee,
  faShoppingCart,
  JsSquare,
} from "@fortawesome/free-solid-svg-icons"
// import { SiJavascript } from "react-icons"

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
  SiDotNet,
  SiCsharp,
  SiCplusplus,
} from "react-icons/si"

import { FaArrowCircleRight } from "react-icons/fa"
// import SiJavascript from "react-icons/lib/fa/beer"

// import { SiJavascript } from "react-icons/fa"

const IndexPage = () => (
  <Layout>
    {/* <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
    <section className="about-me-section p-3 p-lg-5 theme-bg-light">
      <div className="container">
        <div className="profile-teaser media flex-column flex-lg-row">
          <div className="media-body">
            <h2 className="name font-weight-bold mb-1">KUNTAL GHOSH</h2>
            <div className="tagline mb-3">
              Web & Mobile Application Developer
            </div>
            <div
              className="bio mb-4 "
              style={{ fontSize: "14px", textAlign: "justify" }}
            >
              I'm a software engineer specialised in Web Application Development
              for complex scalable Web Apps.I also develop cross platform Mobile
              Apps.I am motivated and enthusiastic by new challenges and complex
              projects and take excellent approach to achieve success in all
              projects.I write about software development on
              <a
                className="link-on-bg ml-1"
                href="devcard/bs4/2-2/blog-home.html"
                style={{ color: "green", fontSize: "16px", fontWeight: "600" }}
              >
                my blog
              </a>
              . Want to know how I may help your project? Check out my project
              <a
                className="link-on-bg ml-1 mr-1"
                href="index.html"
                style={{ color: "green", fontSize: "16px", fontWeight: "600" }}
              >
                portfolio
              </a>
              and
              <a
                className="link-on-bg ml-1"
                href="devcard/bs4/2-2/resume.html"
                style={{ color: "green", fontSize: "16px", fontWeight: "600" }}
              >
                online resume
              </a>
            </div>
            {/* <!--//bio--> */}
            <div className="mb-4">
              <Link
                className="btn btn-primary mr-2 mb-3"
                to="/portfolio"
                // style={{ padding: "20px 20px" }}
              >
                {/* <FaArrowCircleRight
                  className="mr-2 "
                  style={{ fontSize: "15px" }}
                /> */}
                <span className="d-none d-md-inline">View</span> Portfolio
              </Link>
              <Link
                to="/resume"
                className="btn btn-secondary mb-3"
                className="btn btn-secondary mb-3"
                // href="devcard/bs4/2-2/resume.html"
              >
                <i className="fas fa-file-alt mr-2"></i>
                <span className="d-none d-md-inline">View</span> Resume
              </Link>
            </div>
          </div>
          {/* <!--//media-body--> */}
          <img
            className="profile-image mb-3 mb-lg-0 ml-lg-5 mr-md-0"
            src={profile}
            alt="blog picture"
          />
        </div>
      </div>
    </section>

    {/* <!--//about-me-section--> */}
    <section className="overview-section p-3 ">
      <div className="container">
        <h2 className="section-title font-weight-bold mb-3">What I do</h2>
        <div className="section-intro mb-5">
          I have more than 3 years of experience in building applications for
          clients all over the world. Below is a quick overview of my main
          technical skill sets and technologies I use. Want to find out more
          about my experience? Check out my{" "}
          <a
            href="devcard/bs4/2-2/resume.html"
            style={{ color: "green", fontSize: "16px", fontWeight: "600" }}
          >
            online resume
          </a>{" "}
          and{" "}
          <a
            href="devcard/bs4/2-2/portfolio.html"
            style={{ color: "green", fontSize: "16px", fontWeight: "600" }}
          >
            project portfolio
          </a>
          .
        </div>
        <div className="row">
          <div className="item col-6 col-lg-3">
            <div className="item-inner">
              <div className="item-icon mb-2">
                <SiJavascript className="mr-2" />
                <SiTypescript />
              </div>
              <h3 className="item-title">Vanilla JavaScript</h3>
              <div className="item-desc">
                Javascript is everywhere.I have built several dynamic
                application using worlds most used programming language for
                clients.
              </div>
            </div>
            {/* <!--//item-inner--> */}
          </div>
          {/* <!--//item--> */}
          <div className="item col-6 col-lg-3">
            <div className="item-inner">
              <div className="item-icon mb-2">
                <SiAngular className="mr-2" />
                <SiReact className="mr-2" />
                <SiGatsby />
              </div>
              <h3 className="item-title">Angular &amp; React </h3>
              <div className="item-desc">
                SPA is here to make developers life easy and provide customer
                most secured and robust applications. I have developed several
                secure applications using react and angular.
              </div>
            </div>
            {/* <!--//item-inner--> */}
          </div>
          {/* <!--//item--> */}
          <div className="item col-6 col-lg-3">
            <div className="item-inner">
              <div className="item-icon mb-2">
                <SiNodeDotJs className="mr-2" />
                <SiStrapi />
              </div>
              <h3 className="item-title">Node.js</h3>
              <div className="item-desc">
                If you want to handle your vast amount of data in asyncrous way
                then node.js is the choice for you.I have built apis using
                Node.js for my clients.
              </div>
            </div>
            {/* <!--//item-inner--> */}
          </div>
          {/* <!--//item--> */}
          {/* <div className="item col-6 col-lg-3">
            <div className="item-inner">
              <div className="item-icon mb-2">
                <SiPython className="mr-2"/>
                <SiDjango />
              </div>
              <h3 className="item-title">Python &amp; Django</h3>
              <div className="item-desc">
                List skills/technologies here. You can change the icon above to
                any of the 1500+
                <a className="theme-link" href="https://fontawesome.com/">
                  FontAwesome 5 free icons
                </a>
                available. Aenean commodo ligula eget dolor.
              </div>
            </div>
          </div> */}
          {/* <!--//item--> */}
          <div className="item col-6 col-lg-3">
            <div className="item-inner">
              <div className="item-icon mb-2">
                {/* <img
                  src={asp}
                  style={{ width: "35px", marginTop: "-8px" }}
                  className="mr-2"
                /> */}
                <SiCsharp className="mr-2" />
                <SiCplusplus className="mr-2" />

                <SiDotNet />
              </div>
              <h3 className="item-title">Asp.Net Core</h3>
              <div className="item-desc">
                If you want to built enterprise level applications then .Net is
                the way to go.I have worked on large applications like HRM
                software and POS sysem using this technology.
              </div>
            </div>
          </div>

          <div className="item col-6 col-lg-3">
            <div className="item-inner">
              <div className="item-icon mb-2">
                <SiNpm className="mr-2" />
                <SiYarn className="mr-2" />
                <SiWebpack className="mr-2" />
                <SiGithub />
                {/* <img
                  src="webpack.png"
                  style={ {width: "40px", marginTop: "-8px"}}
                  className="mr-2"
                /> */}
              </div>
              <h3 className="item-title">npm, Yarn &amp; Webpack</h3>
              <div className="item-desc">
                Webpack is used to bundle our codes and make our application
                production ready.I have built vanila Javascript application and
                bundled that using webpack.npm and yarn has made developers life
                easy byprovideing the opportuniity to work with others code.
              </div>
            </div>
            {/* <!--//item-inner--> */}
          </div>
          {/* <!--//item--> */}
          <div className="item col-6 col-lg-3">
            <div className="item-inner">
              <div className="item-icon mb-2">
                <SiHtml5 className="mr-2" /> <SiCss3 className="mr-2" />
                <SiSass className="mr-2" />
              </div>
              <h3 className="item-title">HTML5,CSS3 &amp; Sass</h3>
              <div className="item-desc">
                I have done PSD,XD and Figma to HTML conversion using modern
                Css3 and Sass.{" "}
              </div>
            </div>
            {/* <!--//item-inner--> */}
          </div>
          {/* <!--//item--> */}
          <div className="item col-6 col-lg-3">
            <div className="item-inner">
              <div className="item-icon mb-2">
                <SiDart className="mr-2" />
                <SiFlutter />
              </div>
              <h3 className="item-title">Dart &amp; Flutter</h3>
              <div className="item-desc">
                I have worked this awesome technologiy to build Mobile
                Application.
              </div>
            </div>
            {/* <!--//item-inner--> */}
          </div>
          {/* <!--//item--> */}
        </div>
        {/* <!--//row--> */}
        {/* <div className="text-center py-3">
          <a href="devcard/bs4/2-2/services.html" className="btn btn-primary">
            <i className="fas fa-arrow-alt-circle-right mr-2"></i>Services &amp;
            Pricing
          </a>
        </div> */}
      </div>
      {/* <!--//container--> */}
    </section>

    <section className="projects-list px-3 py-5 p-md-5">
      <div className="container">
        <h2 className="section-title font-weight-bold mb-5">
          Featured Projects
        </h2>
        <div className="text-center">
          <Projects></Projects>
        </div>
      </div>
    </section>
    <section className="latest-blog-section p-3 p-lg-5">
      <div className="container">
        <h2 className="section-title font-weight-bold mb-5">
          Latest Blog Posts
        </h2>
        <div className="row">
          <div className="col-md-4 mb-5">
            <div className="card blog-post-card">
              <img
                className="card-img-top"
                src={Blog1}
                alt="kuntal's picture"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <a
                    className="theme-link"
                    href="devcard/bs4/2-2/blog-post.html"
                  >
                    Top 3 JavaScript Frameworks
                  </a>
                </h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient...
                </p>
                <p className="mb-0">
                  <a
                    className="more-link"
                    href="devcard/bs4/2-2/blog-post.html"
                  >
                    Read more &rarr;
                  </a>
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Published 2 days ago</small>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card blog-post-card">
              <img
                className="card-img-top"
                src={Blog2}
                alt="kuntal's Picture"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <a
                    className="theme-link"
                    href="devcard/bs4/2-2/blog-post.html"
                  >
                    About Remote Working
                  </a>
                </h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient...
                </p>
                <p className="mb-0">
                  <a
                    className="more-link"
                    href="devcard/bs4/2-2/blog-post.html"
                  >
                    Read more &rarr;
                  </a>
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Published a week ago</small>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card blog-post-card">
              <img className="card-img-top" src={Blog3} alt="blog picture" />
              <div className="card-body">
                <h5 className="card-title">
                  <a
                    className="theme-link"
                    href="devcard/bs4/2-2/blog-post.html"
                  >
                    A Guide to Becoming a Full-Stack Developer
                  </a>
                </h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient...
                </p>
                <p className="mb-0">
                  <a
                    className="more-link"
                    href="devcard/bs4/2-2/blog-post.html"
                  >
                    Read more &rarr;
                  </a>
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Published 3 weeks ago</small>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center py-3">
          <a href="devcard/bs4/2-2/blog-home.html" className="btn btn-primary">
            <i className="fas fa-arrow-alt-circle-right mr-2"></i>View Blog
          </a>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
