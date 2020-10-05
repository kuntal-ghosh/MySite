import React from "react"
import Layout from "../components/layout"

const Portfolio = () => {
  return (
    <Layout>
      <section className="cta-section theme-bg-light py-5">
        <div className="container text-center single-col-max-width">
          <h2 className="heading">Portfolio</h2>
          <div className="intro">
            <p>
              Welcome to my online portfolio. Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
              I'm taking on freelance work at the moment. Want some help
              building your software?
            </p>
          </div>
          <a
            className="btn btn-primary"
            href="../../../devcard/bs4/2-2/contact.html"
            target="_blank"
          >
            <i className="fas fa-paper-plane mr-2"></i>Hire Me
          </a>
        </div>
      </section>
      <section className="projects-list px-3 py-5 p-md-5">
      <div className="container">
          <div className="text-center">
            <ul id="filters" className="filters mb-5 mx-auto pl-0">
              <li className="type active mb-3 mb-lg-0" data-filter="*">All</li>
              <li className="type mb-3 mb-lg-0" data-filter=".webapp">We App</li>
              <li className="type mb-3 mb-lg-0" data-filter=".mobileapp">
                Mobile App
              </li>
              <li className="type mb-3 mb-lg-0" data-filter=".frontend">
                Frontend
              </li>
              <li className="type mb-3 mb-lg-0" data-filter=".backend">Backend</li>
            </ul>
          </div>
          </div>
        </section>
    </Layout>
  )
}

export default Portfolio
