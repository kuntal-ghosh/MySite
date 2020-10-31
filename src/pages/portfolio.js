import React from "react"
import Layout from "../components/layout"
import Projects from "../components/Projects"
import { Link } from "gatsby"

const Portfolio = () => {
  return (
    <Layout>
      <section className="cta-section theme-bg-light py-5">
        <div className="container text-center single-col-max-width">
          <h2 className="heading">Portfolio</h2>
          <div className="intro">
            <p>
              Welcome to my online portfolio.Here you will find products that i
              have built for my clients and for open source community. I'm
              taking on freelance work at the moment. Want some help building
              your software?
            </p>
          </div>
          <Link className="btn btn-primary" to="/Contact">
            Hire Me
          </Link>
        </div>
      </section>
      {/* <section className="projects-list px-3 py-5 p-md-5">
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
        </section> */}
      <section className="projects-list px-3 py-5 p-md-5" id="projects">
        <div className="container">
          {/* <h2 className="section-title font-weight-bold mb-5">
          Featured Projects
        </h2> */}
          <div className="text-center">
            <Projects></Projects>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Portfolio
