import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
// import Blog2 from "../images/blog-post-thumb-card-1.jpg"
import Img from "gatsby-image"

// const data = useStaticQuery(graphql`
//     type StrapiPageContentArticleGallery implements Node {
//       image: File
//     };

const Blog = ({ data }) => {

  
  return (
    <Layout>
      <section class="cta-section theme-bg-light py-5">
        <div class="container text-center single-col-max-width">
          <h2 class="heading">A Blog About Software Development And Life</h2>
          <div class="intro">
            Welcome to my blog. Subscribe and get my latest blog post in your
            inbox.
          </div>
          <form class="signup-form form-inline justify-content-center pt-3">
            <div class="form-group">
              <label class="sr-only" for="semail">
                Your email
              </label>
              <input
                type="email"
                id="semail"
                name="semail1"
                class="form-control mr-md-1 semail"
                placeholder="Enter email"
              />
            </div>
            <button type="submit" class="btn btn-primary">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <section class="blog-list px-3 py-5 p-md-5">
        <div class="container single-col-max-width">
          {data.allStrapiArticle.edges.map((edge, index) => (
            <div class="item mb-5">
              <div class="media">
                <div className="mr-3 img-fluid post-thumb d-none d-md-flex">
                  <Img
                    fixed={edge.node.image.url}
                    // src={edge.node.image}
                    style={{ height: "100%" }}
                    imgStyle={{ height: "175px", width: "100%" }}
                  />
                </div>
                {/* <img class="mr-3 img-fluid post-thumb d-none d-md-flex" src="../../../devcard/bs4/2-2/assets/images/blog/blog-post-thumb-1.jpg" alt="image"/> */}
                <div class="media-body">
                  <h3 class="title mb-1">
                    <a href="../../../devcard/bs4/2-2/blog-post.html">
                      {edge.node.title}
                    </a>
                  </h3>
                  <div class="meta mb-1">
                    <span class="date">Published 2 days ago</span>
                    <span class="time">5 min read</span>
                    <span class="comment">
                      <a href="#comments">8 comments</a>
                    </span>
                  </div>
                  <div class="intro">{edge.node.shortDescription}</div>
                  <a
                    class="more-link"
                    href="../../../devcard/bs4/2-2/blog-post.html"
                  >
                    Read more &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}

          <nav class="blog-nav nav nav-justified my-5">
            <a
              class="nav-link-prev nav-item nav-link d-none rounded-left"
              href="#previous"
            >
              Previous<i class="arrow-prev fas fa-long-arrow-alt-left"></i>
            </a>
            <a class="nav-link-next nav-item nav-link rounded" href="#next">
              Next<i class="arrow-next fas fa-long-arrow-alt-right"></i>
            </a>
          </nav>
        </div>
      </section>

      {/* <section className="latest-blog-section p-3 p-lg-5">
      <div className="container">
        <h2 className="section-title font-weight-bold mb-5">
          Latest Blog Posts
        </h2>
        <div className="row">
        {data.allStrapiArticle.edges.map((edge, index) => (
        <div className="col-md-4 mb-5">
          <div className="card blog-post-card">
            <div className="card-img-top">
              <Img fixed={edge.node.image.childImageSharp.fixed} />
            </div>

            <div className="card-body">
              <h5 className="card-title">
                <a className="theme-link" href="devcard/bs4/2-2/blog-post.html">
                  About Remote Working
                </a>
              </h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient...
              </p>
              <p className="mb-0">
                <a className="more-link" href="devcard/bs4/2-2/blog-post.html">
                  Read more &rarr;
                </a>
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Published a week ago</small>
            </div>
          </div>
        </div>
      ))}
          </div>
*/}
    </Layout>
  )
}

export default Blog




export const pageQuery = graphql`
  query MyQuery {
    allStrapiArticle {
      edges {
        node {
          id
          title
          shortDescription
          image {
            url
            width
            height
          }
        }
      }
    }
  }
`

// export const pageQuery = graphql`
//   query MyQuery {
//     strapiArticle {
//       title
//       id
//       description
//       shortDescription
//       image {
//         childImageSharp {
//           fixed(width: 250, height: 175) {
//             ...GatsbyImageSharpFixed
//           }
//         }
//       }
//     }
//   }
// `
