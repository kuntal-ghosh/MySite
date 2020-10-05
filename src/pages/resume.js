import React from "react"
import Layout from "../components/layout"

const Resume = () => {
  return (
    <Layout>
      {" "}
      <section className="cta-section theme-bg-light py-5">
        <div className="container text-center single-col-max-width">
          <h2 className="heading mb-3">Online Resume</h2>
          <a
            className="btn btn-primary"
            href="../../../resources/sketch-template/resume-sketch-sketch-resume-template-for-software-developers.html"
            target="_blank"
          >
            <i className="fas fa-file-pdf mr-2"></i>Download PDF Version
          </a>
        </div>
        {/* <!--//container--> */}
      </section>
      <div className="container px-3 px-lg-5">
        <article className="resume-wrapper mx-auto theme-bg-light p-5 mb-5 my-5 shadow-lg">
          <div className="resume-header">
            <div className="row align-items-center">
              <div className="resume-title col-12 col-md-6 col-lg-8 col-xl-9">
                <h2 className="resume-name mb-0 text-uppercase">
                  Kuntal Ghosh
                </h2>
                <div className="resume-tagline mb-3 mb-md-0">
                  {" "}
                  Full Stack Web Application Developer
                </div>
              </div>
              {/* <!--//resume-title--> */}
              <div className="resume-contact col-12 col-md-6 col-lg-4 col-xl-3">
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">
                    <i className="fas fa-phone-square fa-fw fa-lg mr-2 "></i>
                    <a className="resume-link">+88 01733 029989</a>
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-envelope-square fa-fw fa-lg mr-2"></i>
                    <a className="resume-link">tarikul711@mail.com</a>
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-globe fa-fw fa-lg mr-2"></i>
                    <a className="resume-link">www.tarikul.pro</a>
                  </li>
                  <li className="mb-0">
                    <i className="fas fa-map-marker-alt fa-fw fa-lg mr-2"></i>
                    Dhaka, Bangladesh
                  </li>
                </ul>
              </div>
              {/* <!--//resume-contact--> */}
            </div>
            {/* <!--//row--> */}
          </div>
          {/* <!--//resume-header--> */}
          <hr />
          <div className="resume-intro py-3">
            <div className="media flex-column flex-md-row align-items-center">
              {/* <img className="resume-profile-image mb-3 mb-md-0 mr-md-5 ml-md-0 rounded mx-auto" src="../../../devcard/bs4/2-2/assets/images/resume-profile.png" alt="image"> */}
              <div className="media-body text-left">
                I enjoy creating things that live on the internet, whether that
                be applications, websites, or anything in between. My goal is to
                always build products that provide better user experiences
                pixel-perfect, performant. Shortly after graduating from the
                <a
                  className="theme-link"
                  href="https://www.gre.ac.uk/"
                  target="_blank"
                >
                  University of Greenwich
                </a>
                , I joined the engineering team at
                <a
                  className="theme-link"
                  href="https://topofstacksoftware.com/"
                  target="_blank"
                >
                  TopOfStack Software
                </a>
                where I work on a wide variety of interesting and meaningful
                projects on a daily basis. I am passionate about computers and
                programming since my university life. Currently, I am trying to
                learn about Data Science and Machine learning.
              </div>

              {/* <!--//media-body--> */}
            </div>
          </div>
          {/* <!--//resume-intro--> */}
          <hr />
          <div className="resume-body">
            <div className="row">
              <div className="resume-main col-12 col-lg-8 col-xl-9 pr-0 pr-lg-5">
                <section className="work-section py-3">
                  <h3 className="text-uppercase resume-section-heading mb-4">
                    Work Experiences
                  </h3>
                  <div className="item mb-3">
                    <div className="item-heading row align-items-center mb-2">
                      <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                        Senior Software Engineer
                      </h4>
                      <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">
                        Google | 2019 - Present
                      </div>
                    </div>
                    <div className="item-content">
                      <p>
                        Role description goes here ipsum dolor sit amet,
                        consectetuer adipiscing elit. Aenean commodo ligula eget
                        dolor. Aenean massa. Cum sociis natoque penatibus et
                        magnis dis parturient montes, nascetur ridiculus mus.
                        Donec quam felis, ultricies nec, pellentesque eu,
                        pretium quis, sem. Donec pede justo, fringilla vel.
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus. Donec quam felis.
                      </p>
                      <ul className="resume-list">
                        <li>Lorem ipsum dolor sit amet, consectetuer.</li>
                        <li>Aenean commodo ligula eget dolor.</li>
                        <li>Etiam ultricies nisi vel augue.</li>
                      </ul>
                    </div>
                  </div>
                  {/* <!--//item--> */}
                  <div className="item mb-3">
                    <div className="item-heading row align-items-center mb-2">
                      <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                        Lead Software Developer
                      </h4>
                      <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">
                        Apple | 2016 - 2019
                      </div>
                    </div>
                    <div className="item-content">
                      <p>
                        Role description goes here ipsum dolor sit amet,
                        consectetuer adipiscing elit. Aenean commodo ligula eget
                        dolor. Aenean massa. Cum sociis natoque penatibus et
                        magnis dis parturient montes, nascetur ridiculus mus.
                        Donec quam felis, ultricies nec, pellentesque eu,
                        pretium quis, sem. Donec pede justo, fringilla vel.
                      </p>
                      <ul className="resume-list">
                        <li>Lorem ipsum dolor sit amet, consectetuer.</li>
                        <li>Aenean commodo ligula eget dolor.</li>
                      </ul>
                    </div>
                  </div>
                  {/* <!--//item--> */}
                  <div className="item mb-3">
                    <div className="item-heading row align-items-center mb-2">
                      <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                        Senior Software Developer
                      </h4>
                      <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">
                        Dropbox | 2014 - 2016
                      </div>
                    </div>
                    <div className="item-content">
                      <p>
                        Role description goes here ipsum dolor sit amet,
                        consectetuer adipiscing elit. Aenean commodo ligula eget
                        dolor. Aenean massa. Cum sociis natoque penatibus et
                        magnis dis parturient montes, nascetur ridiculus mus.
                      </p>
                    </div>
                  </div>
                  {/* <!--//item--> */}
                  <div className="item">
                    <div className="item-heading row align-items-center mb-2">
                      <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                        Senior Developer
                      </h4>
                      <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">
                        Uber | 2013 - 2014
                      </div>
                    </div>
                    <div className="item-content">
                      <p>
                        Role description goes here ipsum dolor sit amet,
                        consectetuer adipiscing elit. Aenean commodo ligula eget
                        dolor. Aenean massa. Cum sociis natoque penatibus.{" "}
                      </p>
                    </div>
                  </div>
                  {/* <!--//item--> */}
                  <div className="item">
                    <div className="item-heading row align-items-center mb-2">
                      <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                        Backend Developer
                      </h4>
                      <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">
                        Amazon | 2014 - 2016
                      </div>
                    </div>
                    <div className="item-content">
                      <p>
                        Role description goes here ipsum dolor sit amet,
                        consectetuer adipiscing elit. Aenean commodo ligula eget
                        dolor. Aenean massa. Cum sociis natoque penatibus et
                        magnis dis parturient montes, nascetur ridiculus mus.
                      </p>
                    </div>
                  </div>
                  {/* <!--//item--> */}
                  <div className="item">
                    <div className="item-heading row align-items-center mb-2">
                      <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                        Frontend Developer
                      </h4>
                      <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">
                        Startup | 2013 - 2014
                      </div>
                    </div>
                    <div className="item-content">
                      <p>
                        Role description goes here ipsum dolor sit amet,
                        consectetuer adipiscing elit. Aenean commodo ligula eget
                        dolor. Aenean massa. Cum sociis natoque penatibus.{" "}
                      </p>
                    </div>
                  </div>
                  {/* <!--//item--> */}
                </section>
                {/* <!--//work-section--> */}
                <section className="project-section py-3">
                  <h3 className="text-uppercase resume-section-heading mb-4">
                    Projects
                  </h3>
                  <div className="item mb-3">
                    <div className="item-heading row align-items-center mb-2">
                      <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                        Kids Learn Alphabet
                      </h4>
                      <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">
                        {/* <a
                            // href="https://play.google.com/store/apps/details?id=com.tos.bnalphabet"
                            className="theme-link"
                          >
                            Google Play Store
                          </a> */}
                      </div>
                    </div>
                    <div className="item-content">
                      <p>
                        The alphabet is a learning application for a preschool
                        child. Kids can learn & practice the alphabet, number,
                        math, general knowledge, etc. by using the Application.
                        This application is available in 8 languages. I
                        developed this application from scratch & currently
                        maintain this app. Java used for developing the
                        application with the jetpack library and customized
                        animations.
                      </p>
                    </div>
                  </div>
                  {/* <!--//item--> */}
                  <div className="item">
                    <div className="item-heading row align-items-center mb-2">
                      <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                        Project Sed Fringilla
                      </h4>
                      <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">
                        Open Source
                      </div>
                    </div>
                    <div className="item-content">
                      <p>
                        You can use this section for your side projects. Cras
                        dapibus. Vivamus elementum semper nisi. Aenean vulputate
                        eleifend tellus. Aenean leo ligula, porttitor eu,
                        consequat vitae, eleifend ac, enim.
                      </p>
                    </div>
                  </div>
                  {/* <!--//item--> */}
                  <div className="item">
                    <div className="item-heading row align-items-center mb-2">
                      <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                        Project Praesent{" "}
                      </h4>
                      <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">
                        Open Source
                      </div>
                    </div>
                    <div className="item-content">
                      <p>
                        You can use this section for your side projects. Cras
                        dapibus. Vivamus elementum semper nisi. Aenean vulputate
                        eleifend tellus. Aenean leo ligula, porttitor eu,
                        consequat vitae, eleifend ac, enim.
                      </p>
                    </div>
                  </div>
                  {/* <!--//item--> */}
                </section>
                {/* <!--//project-section--> */}
              </div>
              {/* <!--//resume-main--> */}
              <aside className="resume-aside col-12 col-lg-4 col-xl-3 px-lg-4 pb-lg-4">
                <section className="skills-section py-3">
                  <h3 className="text-uppercase resume-section-heading mb-4">
                    Skills
                  </h3>
                  <div className="item">
                    <h4 className="item-title">Technical</h4>
                    <ul className="list-unstyled resume-skills-list">
                      <li className="mb-2">Java/Kotlin/Dart</li>
                      <li className="mb-2">Android/Flutter</li>
                      <li className="mb-2">MySQL/Room DB</li>
                      <li className="mb-2">Unit Testing</li>
                      <li className="mb-2">Adobe XD (UX-Basic)</li>
                      <li className="mb-2">Object-oriented design</li>
                      <li className="mb-2">
                        Design and implement database structures
                      </li>
                      <li className="mb-2">
                        Lead and deliver complex applications
                      </li>
                    </ul>
                  </div>
                  {/* <!--//item--> */}
                  <div className="item">
                    <h4 className="item-title">Professional</h4>
                    <ul className="list-unstyled resume-skills-list">
                      <li className="mb-2">Good time management</li>
                      <li className="mb-2">Effective communication</li>
                      <li className="mb-2">Team player </li>
                      <li className="mb-2">Requirement Analysis</li>
                    </ul>
                  </div>
                  {/* <!--//item--> */}
                </section>
                {/* <!--//skills-section--> */}
                <section className="education-section py-3">
                  <h3 className="text-uppercase resume-section-heading mb-4">
                    Education
                  </h3>
                  <ul className="list-unstyled resume-education-list">
                    <li className="mb-3">
                      <div className="resume-degree font-weight-bold">
                        MSc in Computer Science
                      </div>
                      <div className="resume-degree-org text-muted">
                        University College London
                      </div>
                      <div className="resume-degree-time text-muted">
                        2010 - 2011
                      </div>
                    </li>
                    <li>
                      <div className="resume-degree font-weight-bold">
                        BSc Business Information Technology
                      </div>
                      <div className="resume-degree-org text-muted">
                        University of Greenwich,London
                      </div>
                      <div className="resume-degree-time text-muted">
                        2013 - 2017
                      </div>
                    </li>
                  </ul>
                </section>
                {/* <!--//education-section--> */}
                <section className="education-section py-3">
                  <h3 className="text-uppercase resume-section-heading mb-4">
                    ertificates
                  </h3>
                  <ul className="list-unstyled resume-awards-list">
                    <li className="mb-3">
                      <div className="font-weight-bold">
                        Android Application Development
                      </div>
                      <div className="text-muted">
                        BASIS Institute of Technology & Management (BITM){" "}
                      </div>
                    </li>
                    <li>
                      <div className="font-weight-bold">
                        Advance Mobile Application Development
                      </div>
                      <div className="text-muted">
                        Leveraging ICT for Employment and Growth of the IT-ITES
                        Industry(LICT)
                      </div>
                    </li>
                  </ul>
                </section>
                {/* <!--//education-section--> */}
                <section className="skills-section py-3">
                  <h3 className="text-uppercase resume-section-heading mb-4">
                    Languages
                  </h3>
                  <ul className="list-unstyled resume-lang-list">
                    <li className="mb-2">
                      Bangla <span className="text-muted">(Native)</span>
                    </li>
                    <li>
                      English <span className="text-muted">(Professional)</span>
                    </li>
                  </ul>
                </section>
                {/* <!--//certificates-section--> */}
                <section className="skills-section py-3">
                  <h3 className="text-uppercase resume-section-heading mb-4">
                    Interests
                  </h3>
                  <ul className="list-unstyled resume-interests-list mb-0">
                    <li className="mb-2">Exploring about latest technology</li>
                    <li className="mb-2">Travelling</li>
                    <li className="mb-2">Voluntary work</li>
                    <li className="mb-2">Gaming</li>
                  </ul>
                </section>
                {/* <!--//certificates-section--> */}
              </aside>
              {/* <!--//resume-aside--> */}
            </div>
            {/* <!--//row--> */}
          </div>
          {/* <!--//resume-body--> */}
          <hr />
          <div className="resume-footer text-center ">
            <ul className="resume-social-list list-inline mx-auto mb-0 d-inline-block text-muted">
              <li className="list-inline-item mb-lg-0 mr-3">
                <a className="resume-link" href="https://github.com/Tarikul711">
                  <i
                    className="fab fa-github-square fa-2x mr-2"
                    data-fa-transform="down-4"
                  ></i>
                  <span className="d-none d-lg-inline-block text-muted">
                    github.com/tarikul711
                  </span>
                </a>
              </li>
              <li className="list-inline-item mb-lg-0 mr-3">
                <a
                  className="resume-link"
                  // href="https://www.linkedin.com/in/md-tarikul-islam-5192b713a/"
                >
                  <i
                    className="fab fa-linkedin fa-2x mr-2"
                    data-fa-transform="down-4"
                  ></i>
                  <span className="d-none d-lg-inline-block text-muted">
                    linkedin.com/in/md-tarikul-islam-5192b713a
                  </span>
                </a>
              </li>
              <li className="list-inline-item mb-lg-0 mr-lg-3">
                <a className="resume-link">
                  <i
                    className="fab fa-twitter-square fa-2x mr-2"
                    data-fa-transform="down-4"
                  ></i>
                  <span className="d-none d-lg-inline-block text-muted">
                    @twittername
                  </span>
                </a>
              </li>
            </ul>
          </div>
          {/* <!--//resume-footer--> */}
        </article>
      </div>
    </Layout>
  )
}

export default Resume
