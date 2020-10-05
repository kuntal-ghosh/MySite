import React from "react"
import Layout from "../components/layout"

const Contact = () => {
  return (
    <Layout>
      <section className="cta-section theme-bg-light py-5">
        <div className="container text-center single-col-max-width">
          <h2 className="heading">Contact</h2>
          <div className="intro">
            <p>
              Interested in hiring me for your project or just want to say hi?
              You can fill in the contact form below or send me an email to{" "}
              <a href="mailto:#">tarikul711@gmail.com</a>
            </p>
            <p>
              Want to get connected? Follow me on the social channels below.
            </p>
            <ul className="list-inline mb-0">
              <li className="list-inline-item mb-3">
                <a
                  className="facebook"
                  href="https://www.facebook.com/tarikul.islam.94617999/"
                >
                  <i className="fab fa-facebook-f fa-fw fa-lg"></i>
                </a>
              </li>
              <li className="list-inline-item mb-3">
                <a
                  className="linkedin"
                  href="https://www.linkedin.com/in/md-tarikul-islam-5192b713a/"
                >
                  <i className="fab fa-linkedin-in fa-fw fa-lg"></i>
                </a>
              </li>
              <li className="list-inline-item mb-3">
                <a className="github" href="https://github.com/Tarikul711">
                  <i className="fab fa-github-alt fa-fw fa-lg"></i>
                </a>
              </li>

              <li className="list-inline-item mb-3">
                <a className="stack-overflow" href="https://stackoverflow.com/">
                  <i className="fab fa-stack-overflow fa-fw fa-lg"></i>
                </a>
              </li>
              <li className="list-inline-item mb-3">
                <a className="medium" href="https://medium.com/@tarikul711">
                  <i className="fab fa-medium-m fa-fw fa-lg"></i>
                </a>
              </li>

              <li className="list-inline-item mb-3">
                <a className="facebook" href="https://medium.com/@tarikul711">
                  <i className="fab fa-facebook-f fa-fw fa-lg"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="contact-section px-3 py-5 p-md-5">
        <div className="container">
          <form
            id="contact-form"
            className="contact-form col-lg-8 mx-lg-auto"
            method="post"
            action=""
          >
            <h3 className="text-center mb-3">Get In Touch</h3>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label className="sr-only" for="cname">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cname"
                  name="name"
                  placeholder="Name"
                  minlength="2"
                  required=""
                  aria-required="true"
                />
              </div>
              <div className="form-group col-md-6">
                <label className="sr-only" for="cemail">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="cemail"
                  name="email"
                  placeholder="Email"
                  required=""
                  aria-required="true"
                />
              </div>
              <div className="form-group col-12">
                <select id="services" className="custom-select" name="services">
                  <option selected>
                    Select a service package you're interested in...
                  </option>
                  <option value="basic">Native Android Apps</option>
                  <option value="standard">Native IOS Apps</option>
                  <option value="premium">Hybrid Apps</option>
                  <option value="not sure">Android & IOS Apps</option>
                </select>
                <small className="form-text text-muted pt-1">
                  <i className="fas fa-info-circle mr-2 text-primary"></i>Want to
                  know what's included in each package? Check the{" "}
                  <a
                    href="../../../devcard/bs4/2-2/services.html"
                    target="_blank"
                  >
                    Services &amp; Pricing
                  </a>{" "}
                  page.
                </small>
              </div>
              <div className="form-group col-12">
                <label className="sr-only" for="cmessage">
                  Your message
                </label>
                <textarea
                  className="form-control"
                  id="cmessage"
                  name="message"
                  placeholder="Enter your message"
                  rows="10"
                  required=""
                  aria-required="true"
                ></textarea>
              </div>
              <div className="form-group col-12">
                <button type="submit" className="btn btn-block btn-primary py-2">
                  Send Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default Contact
