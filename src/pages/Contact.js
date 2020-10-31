import React from "react"
import Layout from "../components/layout"
import {
  SiGithub,
  SiFacebook,
  SiLinkedin,
  SiYoutube,
  SiMedium,
} from "react-icons/si"
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
              <a href="mailto:#" style={{ color: "green", fontSize: "16px" }}>
                kuntalghosh.ewu@gmail.com
              </a>
            </p>
            <p>
              Want to get connected? Follow me on the social channels below.
            </p>
            <ul className="list-inline mb-0">
              <li className="list-inline-item mb-3">
                <a
                  href="https://www.facebook.com/tarikul.islam.94617999/"
                  style={{ color: "green", fontSize: "16px" }}
                >
                  <SiFacebook />
                </a>
              </li>
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
                  <option value="basic">Frontend Web Apps</option>
                  <option value="standard">Backend Web Apps</option>
                  <option value="premium">Full-Stack Web Apps</option>
                  <option value="not sure">Mobile Apps</option>
                </select>
                {/* <small className="form-text text-muted pt-1">
                  <i className="fas fa-info-circle mr-2 text-primary"></i>Want
                  to know what's included in each package? Check the{" "}
                  <a
                    href="../../../devcard/bs4/2-2/services.html"
                    target="_blank"
                  >
                    Services &amp; Pricing
                  </a>{" "}
                  page.
                </small> */}
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
                <button
                  type="submit"
                  className="btn btn-block btn-primary py-2"
                >
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
