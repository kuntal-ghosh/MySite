import React from "react"
import { Link } from "gatsby"
import profile from "../images/profile-lg.jpg"
import "react-mdl/extra/material.css"
import "react-mdl/extra/material.js"

import Layout from "../components/layout"
import Projects from "../components/Projects"
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
} from "react-icons/si"
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
            <h2 className="name font-weight-bold mb-1">Tarikul Islam</h2>
            <div className="tagline mb-3">Mobile Application Developer</div>
            <div className="bio mb-4">
              I'm a software engineer specialised in native android and
              flutter(hybrid)development for complex scalable Mobile apps. I
              write about software development on
              <a
                className="link-on-bg ml-1"
                href="devcard/bs4/2-2/blog-home.html"
              >
                my blog
              </a>
              . Want to know how I may help your project? Check out my project
              <a className="link-on-bg ml-1 mr-1" href="index.html">
                portfolio
              </a>
              and
              <a className="link-on-bg ml-1" href="devcard/bs4/2-2/resume.html">
                online resume
              </a>
            </div>
            {/* <!--//bio--> */}
            <div className="mb-4">
              <Link
                className="btn btn-primary mr-2 mb-3"
                className="btn btn-primary mr-2 mb-3"
                to="/portfolio"
              >
                <i className="fas fa-arrow-alt-circle-right mr-2"></i>
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
          I have more than 3 years' experience building mobile apps for clients
          all over the world. Below is a quick overview of my main technical
          skill sets and technologies I use. Want to find out more about my
          experience? Check out my
          <a href="devcard/bs4/2-2/resume.html">online resume</a> and
          <a href="devcard/bs4/2-2/portfolio.html">project portfolio</a>.
        </div>
        <div className="row">
          <div className="item col-6 col-lg-3">
            <div className="item-inner">
              <div className="item-icon">
                <SiJavascript />
              </div>
              <h3 className="item-title">Vanilla JavaScript</h3>
              <div className="item-desc">
                List skills/technologies here. You can change the icon above to
                any of the 1500+
                <a className="theme-link" href="https://fontawesome.com/">
                  FontAwesome 5 free icons
                </a>
                available. Aenean commodo ligula eget dolor.
              </div>
            </div>
            {/* <!--//item-inner--> */}
          </div>
          {/* <!--//item--> */}
          <div className="item col-6 col-lg-3">
            <div className="item-inner">
              <div className="item-icon">
                <SiAngular />
                <SiReact />
              </div>
              <h3 className="item-title">Angular &amp; React </h3>
              <div className="item-desc">
                List skills/technologies here. You can change the icon above to
                any of the 1500+
                <a className="theme-link" href="https://fontawesome.com/">
                  FontAwesome 5 free icons
                </a>
                available. Aenean commodo ligula eget dolor.
              </div>
            </div>
            {/* <!--//item-inner--> */}
          </div>
          {/* <!--//item--> */}
          <div className="item col-6 col-lg-3">
            <div className="item-inner">
              <div className="item-icon">
                <SiNodeDotJs />
                <SiStrapi />
              </div>
              <h3 className="item-title">Node.js</h3>
              <div className="item-desc">
                List skills/technologies here. You can change the icon above to
                any of the 1500+
                <a className="theme-link" href="https://fontawesome.com/">
                  FontAwesome 5 free icons
                </a>
                available. Aenean commodo ligula eget dolor.
              </div>
            </div>
            {/* <!--//item-inner--> */}
          </div>
          {/* <!--//item--> */}
          <div className="item col-6 col-lg-3">
            <div className="item-inner">
              <div className="item-icon">
                <SiPython />
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
          </div>
          {/* <!--//item--> */}
          <div className="item col-6 col-lg-3">
            <div className="item-inner">
              <div className="item-icon">
                {/* <img
                    src="webpack.png"
                    style="width: 40px; margin-top: -8px;"
                    className="mr-2"
                  /> */}
              </div>
              <h3 className="item-title">Asp.Net Core</h3>
              <div className="item-desc">
                List skills/technologies here. You can change the icon above to
                any of the 1500+
                <a className="theme-link" href="https://fontawesome.com/">
                  FontAwesome 5 free icons
                </a>
                available. Aenean commodo ligula eget dolor.
              </div>
            </div>
          </div>

          <div className="item col-6 col-lg-3">
            <div className="item-inner">
              <div className="item-icon">
                <SiNpm />
                <SiYarn />
                <SiWebpack />
                {/* <img
                  src="webpack.png"
                  style={ {width: "40px", marginTop: "-8px"}}
                  className="mr-2"
                /> */}
              </div>
              <h3 className="item-title">npm, Yarn &amp; Webpack</h3>
              <div className="item-desc">
                List skills/technologies here. You can change the icon above to
                any of the 1500+ available. Aenean commodo ligula eget dolor.
              </div>
            </div>
            {/* <!--//item-inner--> */}
          </div>
          {/* <!--//item--> */}
          <div className="item col-6 col-lg-3">
            <div className="item-inner">
              <div className="item-icon">
                <SiHtml5 /> <SiCss3 />
                <SiSass />
              </div>
              <h3 className="item-title">HTML &amp; CSS</h3>
              <div className="item-desc">
                List skills/technologies here. You can change the icon above to
                any of the 1500+
                <a className="theme-link" href="https://fontawesome.com/">
                  FontAwesome 5 free icons
                </a>
                available. Aenean commodo ligula eget dolor.
              </div>
            </div>
            {/* <!--//item-inner--> */}
          </div>
          {/* <!--//item--> */}
          <div className="item col-6 col-lg-3">
            <div className="item-inner">
              <div className="item-icon">
                <i className="fab fa-sass mr-2"></i>
              </div>
              <h3 className="item-title">Sass</h3>
              <div className="item-desc">
                List skills/technologies here. You can change the icon above to
                any of the 1500+
                <a className="theme-link" href="https://fontawesome.com/">
                  FontAwesome 5 free icons
                </a>
                available. Aenean commodo ligula eget dolor.
              </div>
            </div>
            {/* <!--//item-inner--> */}
          </div>
          {/* <!--//item--> */}
        </div>
        {/* <!--//row--> */}
        <div className="text-center py-3">
          <a href="devcard/bs4/2-2/services.html" className="btn btn-primary">
            <i className="fas fa-arrow-alt-circle-right mr-2"></i>Services &amp;
            Pricing
          </a>
        </div>
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
                src="devcard/bs4/2-2/assets/images/blog/blog-post-thumb-card-1.jpg"
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
                src="devcard/bs4/2-2/assets/images/blog/blog-post-thumb-card-2.jpg"
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
              <img
                className="card-img-top"
                src="devcard/bs4/2-2/assets/images/blog/blog-post-thumb-card-3.jpg"
                alt="blog picture"
              />
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
