import React, { useState } from "react"
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl"
import cx from "classname"

const Projects = () => {
  const [activeTab, setActiveTab] = useState(0)

  function handleClick(pagelink) {
    window.open(pagelink)
  }

  function toggleCategories() {
    if (activeTab === 0) {
      return (
        <div
          className="projects-grid"
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {/* travel buddy */}
          <Card
            className="item mb-5"
            shadow={5}
            // style={{ minWidth: "450", margin: "auto" }}
          >
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                flexGrow: 1,

                background:
                  "url(https://res.cloudinary.com/dtnbqlhdc/image/upload/v1602168420/travel_guru_ktyevt.png) center / cover",
              }}
            >
              Travel Buddy
            </CardTitle>
            <CardText style={{ textAlign: "justify", flexGrow: "1" }}>
              This is an open source application for travel lovers to book
              hotels around Bangladesh.
              <br />
              <b>
                Technology: React.js, Material UI, Google Map ,Context API,
                Node.js and Firebase.
              </b>
            </CardText>
            <CardActions className="card-action" border>
              <Button
                colored
                onClick={() =>
                  handleClick("https://github.com/kuntal-ghosh/crwn-cloning")
                }
              >
                Github
              </Button>
              <Button
                colored
                onClick={() =>
                  handleClick("https://travel-buddy-bde9d.web.app")
                }
              >
                Live Demo
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* volunteer network */}

          <Card
            className="item mb-5"
            shadow={5}
            // style={{ minWidth: "450", margin: "auto" }}
          >
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                height: "176px",

                background:
                  "url(https://res.cloudinary.com/dtnbqlhdc/image/upload/v1602168649/voluteer-network_j3po6k.png) center / cover",
              }}
            >
              crwn-cloning
            </CardTitle>
            <CardText style={{ textAlign: "justify", flexGrow: "1" }}>
              This is an open source application for people who wants to help
              others in different way. People will be able to look for list of
              Social works that they can do.
              <br />
              <b>
                Technology: React.js, Material UI, Google Map ,Context API,
                Node.js and Firebase.
              </b>
            </CardText>
            <CardActions className="card-action" border>
              <Button
                colored
                onClick={() =>
                  handleClick("https://github.com/kuntal-ghosh/crwn-cloning")
                }
              >
                Github
              </Button>
              <Button
                colored
                onClick={() =>
                  handleClick("https://volunteer-network-5bf2f.web.app")
                }
              >
                Live Demo
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Ema John */}

          <Card
            className="item mb-5"
            shadow={5}
            // style={{ minWidth: "450", margin: "auto" }}
          >
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",

                background:
                  "url(https://res.cloudinary.com/dtnbqlhdc/image/upload/v1602168653/emajhn_nmw7vx.png) center / cover",
              }}
            >
              crwn-cloning
            </CardTitle>
            <CardText>
              crwn-cloning is a E-Commerce Website that is developed using
              modern technologies such as React.js,Firebase,Sass
              <br />
              <b>
                Technology: React.js, Material UI, Google Map ,Context API,
                Node.js and Firebase.
              </b>
            </CardText>
            <CardActions className="card-action" border>
              <Button
                colored
                onClick={() =>
                  handleClick("https://github.com/kuntal-ghosh/crwn-cloning")
                }
              >
                Github
              </Button>
              <Button
                colored
                onClick={() =>
                  handleClick("https://ema-john.firebaseapp.com/shop")
                }
              >
                Live Demo
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Catalyzr */}

          <Card
            className="item mb-5"
            shadow={5}
            // style={{ minWidth: "450", margin: "auto" }}
          >
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",

                background:
                  "url(https://res.cloudinary.com/dtnbqlhdc/image/upload/v1602167958/catalyzr_ekcbun.png) center / cover",
              }}
            >
              crwn-cloning
            </CardTitle>
            <CardText>
              crwn-cloning is a E-Commerce Website that is developed using
              modern technologies such as React.js,Firebase,Sass
              <br />
              <b>
                Technology: React.js, Material UI, Google Map ,Context API,
                Node.js and Firebase.
              </b>
            </CardText>
            <CardActions className="card-action" border>
              <Button
                colored
                onClick={() =>
                  handleClick("https://github.com/kuntal-ghosh/crwn-cloning")
                }
              >
                Github
              </Button>
              <Button
                colored
                onClick={() => handleClick("https://crwn-cloning.vercel.app")}
              >
                Live Demo
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Crwn Clothing */}
          <Card
            className="item mb-5"
            shadow={5}
            // style={{ minWidth: "450", margin: "auto" }}
          >
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",

                background:
                  "url(https://res.cloudinary.com/dtnbqlhdc/image/upload/v1571187011/crwn_clothing_qmz9ii.png) center / cover",
              }}
            >
              crwn-cloning
            </CardTitle>
            <CardText>
              crwn-cloning is a E-Commerce Website that is developed using
              modern technologies such as React.js,Firebase,Sass
              <br />
              <b>
                Technology: React.js, Material UI, Google Map ,Context API,
                Node.js and Firebase.
              </b>
            </CardText>
            <CardActions className="card-action" border>
              <Button
                colored
                onClick={() =>
                  handleClick("https://github.com/kuntal-ghosh/crwn-cloning")
                }
              >
                Github
              </Button>
              <Button
                colored
                onClick={() => handleClick("https://crwn-cloning.vercel.app")}
              >
                Live Demo
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* My Site */}

          <Card
            className="item mb-5"
            shadow={5}
            //  style={{ minWidth: "450", margin: "auto" }}
          >
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://res.cloudinary.com/dtnbqlhdc/image/upload/v1602169077/mysite_tuqisk.png) center / cover",
              }}
            >
              Burger-Builder
            </CardTitle>

            <CardText>
              Burger-Builder is a Burger selling resturant website that is
              especialy designed for burger lovers whose love to customize their
              burger according to their desire.
              <br />
              <b>
                Technology: React.js, Material UI, Google Map ,Context API,
                Node.js and Firebase.
              </b>
            </CardText>
            <CardActions className="card-action" border>
              <Button
                colored
                onClick={() =>
                  handleClick("https://github.com/kuntal-ghosh/The-Burger-App")
                }
              >
                GitHub
              </Button>

              <Button
                colored
                onClick={() =>
                  handleClick("https://my-site-jcmqzuw44.vercel.app")
                }
              >
                Live Demo
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card
            className="item"
            shadow={5}
            //  style={{ minWidth: "450", margin: "auto" }}
          >
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://res.cloudinary.com/dtnbqlhdc/image/upload/v1571219894/burger_app_ppabhl.png) center / cover",
              }}
            >
              Burger-Builder
            </CardTitle>

            <CardText>
              Burger-Builder is a Burger selling resturant website that is
              especialy designed for burger lovers whose love to customize their
              burger according to their desire.
              <br />
              <b>
                Technology: React.js, Material UI, Google Map ,Context API,
                Node.js and Firebase.
              </b>
            </CardText>
            <CardActions className="card-action" border>
              <Button
                colored
                onClick={() =>
                  handleClick("https://github.com/kuntal-ghosh/The-Burger-App")
                }
              >
                GitHub
              </Button>

              <Button
                colored
                onClick={() => handleClick("https://the-burger-app.vercel.app")}
              >
                Live Demo
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card
            className="item"
            shadow={5}
            //  style={{ minWidth: "450", margin: "auto" }}
          >
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://res.cloudinary.com/dtnbqlhdc/image/upload/v1571221071/Monster_amhw8a.png) center / cover",
              }}
            >
              Monster_Rolodex
            </CardTitle>
            <CardText>
              Monster_Rolodex is a website where you will be able to know about
              your fafourite monsters and also able to search for them .
              <br />
              <b>
                Technology: React.js, Material UI, Google Map ,Context API,
                Node.js and Firebase.
              </b>
            </CardText>
            <CardActions className="card-action" border>
              <Button
                colored
                onClick={() =>
                  handleClick("https://github.com/kuntal-ghosh/crwn-cloning")
                }
              >
                GitHub
              </Button>
              <Button
                colored
                onClick={() =>
                  handleClick("https://github.com/kuntal-ghosh/crwn-cloning")
                }
              >
                Live Demo
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if (activeTab === 2) {
      return (
        <div>
          <h1>This is PhP</h1>
        </div>
      )
    } else if (activeTab === 3) {
      return (
        <div>
          <h1>This is Others</h1>
        </div>
      )
    } else if (activeTab === 4) {
      return (
        <div>
          <h1>This is Others</h1>
        </div>
      )
    } else {
      return (
        <div>
          <h1>Here there are some other projects</h1>
        </div>
      )
    }
  }

  return (
    <div>
      <Tabs
        activeTab={activeTab}
        onChange={tabId => setActiveTab(tabId)}
        className="filters mb-5 mx-auto pl-0"
        // ripple="false"
        ripple={false}
      >
        <Tab
          className={cx(activeTab === 0 ? "active" : "", "type mb-3 mb-lg-0")}
        >
          My Projects
        </Tab>
        <Tab
          className={cx(activeTab === 1 ? "active" : "", "type mb-3 mb-lg-0")}
        >
          Others
        </Tab>
        <Tab
          className={cx(activeTab === 2 ? "active" : "", "type mb-3 mb-lg-0")}
        >
          Asp.Net
        </Tab>
        <Tab
          className={cx(activeTab === 3 ? "active" : "", "type mb-3 mb-lg-0")}
        >
          PhP
        </Tab>
        <Tab
          className={cx(activeTab === 4 ? "active" : "", "type mb-3 mb-lg-0")}
        >
          Others
        </Tab>
      </Tabs>

      <Grid>
        <Cell col={12}>
          <div className="content">{toggleCategories()}</div>
        </Cell>
      </Grid>
    </div>
  )
}

export default Projects
