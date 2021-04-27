import React from "react"
import Layout from "../components/layout"
import { SiGithub, SiLinkedin, SiYoutube, SiMedium,SiTwitter } from "react-icons/si"

const Resume = () => {
  return (
    <Layout>
      {" "}
      <section className="cta-section theme-bg-light py-5">
        <div className="container text-center single-col-max-width">
          <h2 className="heading mb-3">Online Resume</h2>
          <a
            className="btn btn-primary"
            href="https://drive.google.com/file/d/1rEACHyH8z4ssqKyYriL45S0CQMzyPd91/view?usp=sharing"
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
                  Software Engineer (Full Stack Developer)
                </div>
              </div>
              {/* <!--//resume-title--> */}
              <div className="resume-contact col-12 col-md-6 col-lg-4 col-xl-3">
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">
                    <i className="fas fa-phone-square fa-fw fa-lg mr-2 "></i>
                    <a href="#phone" className="resume-link">
                      +88 01772 132915
                    </a>
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-envelope-square fa-fw fa-lg mr-2"></i>
                    <a href="#mail" className="resume-link">
                      kuntalghosh.ewu@mail.com
                    </a>
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-globe fa-fw fa-lg mr-2"></i>
                    <a href="#mail" className="resume-link">
                      www.kuntal-ghosh.tk
                    </a>
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
                I am a passionate and pragmatic Software Engineer with one year
                of professional experience. I am motivated and enthusiastic by
                new challenges and tasks and take excellent approach to achieve
                success in all projects. I am specialized in JavaScript,
                Typescript, Html, CSS, Bootstrap, React.js, and Angular and have
                experience working with Asp.Net Core, Node.js & Flutter. As a
                lifelong learner, I am always willing to work on complex
                projects with scope for learning.
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
                        Software Engineer
                      </h4>
                      <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right mt-4">
                        Gain Solutions | January 2021 – present
                      </div>
                    </div>
                    <div className="item-content">
                      <p>
                        Currently i am working as a Software Engineer(Full Stack JavaScript Developer) in this company.
                      </p>
                      <ul className="resume-list">
                        <li>Communication with clients and analyzing the requirements based on milestones.</li>
                        <li>Reviewing code, work for accuracy and functionality.</li>
                        <li>Working on Aws Lambda and CI/CD workflow.</li>
                        <li>Developing new features and solving existing bugs.</li>
                      </ul>
                    </div>
                  </div>


                  <div className="item mb-3">
                    <div className="item-heading row align-items-center mb-2">
                      <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                        Software Engineer
                      </h4>
                      <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right mt-3">
                        Enlight Solutions | Dec 2019 – Aug 2020
                      </div>
                    </div>
                    <div className="item-content">
                      <p>
                        I have contributed as a full stack developer in a HRM
                        product that was built for USA market and some in house
                        product. I mainly worked as an Angular Developer there.
                      </p>
                      <ul className="resume-list">
                        <li>Develop, Design and Debug Application.</li>
                        <li>Developing components using angular.</li>
                        <li>Developing API using .Net core</li>
                      </ul>
                    </div>
                  </div>

                  <div className="item mb-3">
                    <div className="item-heading row align-items-center mb-2">
                      <h4 className="item-title col-12 col-md-6 col-lg-6 mb-2 mb-md-0">
                        Junior Software Engineer
                      </h4>
                      <div className="item-meta col-12 col-md-6 col-lg-6 text-muted text-left text-md-right mt-4">
                      CODE STACK SOFT | July 2018 – November 2019
                      </div>
                    </div>
                    <div className="item-content">
                      <p>
                        I have worked there as a junior software developer and contributed in developing pos system,Inventory Management System,ERP Solution and Ecommerce website and also contributed in building single page applications.
                      </p>
                      <ul className="resume-list">
                        <li>Developed pos system and Inventory Management System</li>
                        <li>Contributed in ERP Solution and Ecommerce website</li>
                        <li>Developed fully customized Components for SPAS</li>
                      </ul>
                    </div>
                  </div>
                  {/* <!--//item--> */}

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
                        Catalyzr
                      </h4>
                      <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">
                        {/* <a
                            // href="https://play.google.com/store/apps/details?id=com.tos.bnalphabet"
                            className="theme-link"
                          >
                            Google Play Store
                          </a> */}
                        Client project
                      </div>
                    </div>
                    <div className="item-content">
                      <p>
                        This is a HRM software that is built for USA market. I
                        have worked on this project for Enlight Solution. This
                        project is built using modern technology such as Anguar,
                        Asp.Net Core. We had a team of 3 members for this
                        project.
                      </p>
                    </div>
                  </div>
                  {/* <!--//item--> */}
                  <div className="item">
                    <div className="item-heading row align-items-center mb-2">
                      <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                        Travel Buddy
                      </h4>
                      <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">
                        Open Source
                      </div>
                    </div>
                    <div className="item-content">
                      <p>
                        This is an open source application for travel lovers to
                        book hotels around Bangladesh. Travelers will be able to
                        look for available hotels and their information such as
                        price, number of rooms and number of beds etc, in their
                        destination on selected dates .They will also able to
                        see the location of the hotels on google map and book
                        hotels according to their preferences .Users can use
                        social login and user password login for authentication.
                        I developed this application from scratch. React.js is
                        used for developing the application with Node.js and
                        Firebase.
                      </p>
                    </div>
                  </div>
                  {/* <!--//item--> */}
                  <div className="item">
                    <div className="item-heading row align-items-center mb-2">
                      <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                        Voluteer-Network
                      </h4>
                      <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">
                        Open Source
                      </div>
                    </div>
                    <div className="item-content">
                      <p>
                        This is an open source application for people who wants
                        to help others in different way. People will be able to
                        look for list of Social works that they can do. They
                        will be able to join any category on any date they wish
                        .They will also able to join in multiple tasks and will
                        be able to cancle any task according to their
                        preferences .Users can use social login for
                        authentication. I developed this application from
                        scratch. React.js is used for developing the application
                        with Node.js and Firebase.
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
                      <li className="mb-2">JavaScript/TypeScript</li>
                      <li className="mb-2">React/Angular</li>
                      <li className="mb-2">Node.js/Express.js</li>
                      <li className="mb-2">PostgreSQL/MySQL</li>
                      <li className="mb-2">MongoDB/ORM/ODM</li>
                      <li className="mb-2">HTML5/CSS3/SASS</li>
                      <li className="mb-2">Npm/Yarn/Git/Wepack</li>
                      <li className="mb-2">Object-oriented design</li>
                      <li className="mb-2">
                        Design and implement database structures
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
                        BSc in Computer Science and Engineering
                      </div>
                      <div className="resume-degree-org text-muted">
                        East West University
                      </div>
                      <div className="resume-degree-time text-muted">
                        2012 - 2017
                      </div>
                    </li>
                  </ul>
                </section>
                {/* <!--//education-section--> */}
                {/* <section className="education-section py-3">
                  <h3 className="text-uppercase resume-section-heading mb-4">
                    Certificates
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
                </section> */}
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
            <ul className="resume-social-list list-inline mx-auto mb-0 d-flex justify-content-around text-muted">
              <li className="list-inline-item mb-lg-0 mr-3">
                <a className="resume-link" href="https://github.com/kuntal-ghosh">
                <span style={{ color: "green", fontSize: "12px" ,marginRight: "2px" }}>
                    <SiGithub/>
                  </span>
                  <span className="d-none d-lg-inline-block text-muted">
                    github
                  </span>
                </a>
              </li>
              <li className="list-inline-item mb-lg-0 mr-3">
                <a
                  href="#mail"
                  className="resume-link"
                  href="https://www.linkedin.com/in/kuntal-ghosh/"
                  style={{ color: "green", fontSize: "12px" }}
                >
                  <span style={{ color: "green", fontSize: "12px" ,marginRight: "2px" }}>
                    <SiLinkedin/>
                  </span>
                  <span className="d-none d-lg-inline-block text-muted">
                    linkedin
                  </span>
                </a>
              </li>
              <li className="list-inline-item mb-lg-0 mr-lg-3">
                <a className="resume-link" href="#mail">
                <span style={{ color: "green", fontSize: "12px" ,marginRight: "2px" }}>
                    <SiTwitter/>
                  </span>
                  <span className="d-none d-lg-inline-block text-muted">
                    twitter
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
