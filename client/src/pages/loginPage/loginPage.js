import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Login from "../../components/Login/Login";
import { Link } from "react-scroll";
import Logo76x76 from "../../images/BlueCampK9_76.jpeg";
import Logo198x198 from "../../images/BlueCampK9_198.jpeg";
import PupHighFive from "../../images/tamu_obedience.jpg";
import "./loginPage.css";
import LoginContext from "../../utils/loginContext";
import Footer from "../../components/Footer/Footer";

function LoginPage() {
  //set initial state
  const [showLogin, setShowLogin] = useState(false);

  return (
    <LoginContext.Provider value={{ setShowLogin }}>
      <div>
        <section className="loginPageImg">
          <div className="overlay"></div>
          <div className="content">
            <Container id="login-container">
              <Row id="login-row">
                <Col
                  className="login-col text-center"
                  lg={{ span: 6, offset: 6 }}
                  sm={{ span: 12 }}
                >
                  {!showLogin ? (
                    <div id="brand-statement">
                      <img
                        className="brand-logo"
                        src={Logo198x198}
                        alt="Brand Logo"
                      ></img>
                      <h1 id="login-page-h1">
                        Helping You Showcase Your Pup-Training Progress.
                      </h1>
                      <div className="inline">
                        <Link
                          to="about-us"
                          spy={true}
                          smooth={true}
                          // offset={10}
                          duration={700}
                        >
                          <Button id="learn-more-btn" variant="outline-light">
                            Learn More
                          </Button>
                        </Link>
                        <Button
                          id="login-btn"
                          variant="outline-light"
                          onClick={() => setShowLogin(true)}
                        >
                          Login/Sign-Up
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <Card id="login-card">
                      <div className="card-image-top">
                        <img
                          className="logo"
                          src={Logo76x76}
                          alt="Brand Logo"
                        ></img>
                      </div>
                      <div className="card-body login-card-body">
                        <Login />
                      </div>
                    </Card>
                  )}
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        <section id="about-us">
          <div className="blue-div">
            <Container id="about-container" fluid>
              <Row>
                <Col md="auto" className="about-col">
                  <Card className="img-card">
                    <img
                      fluid="true"
                      className="img-left"
                      id="pup-high-five"
                      src={PupHighFive}
                      alt="Pup and Trainer High Five"
                    ></img>
                  </Card>
                </Col>
                <Col className="text-center about-col">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Sequi iusto, sint ullam exercitationem error tempore
                    perferendis facilis illum vel dignissimos minima commodi ut
                    distinctio labore illo consequuntur deleniti odio qui!
                  </p>
                  <p>
                    Nihil rerum mollitia atque suscipit facilis similique,
                    ducimus officia, ratione obcaecati voluptate laborum sit
                    maxime delectus? Dolore veritatis debitis neque reiciendis
                    maiores adipisci cumque. Quisquam aspernatur adipisci illum
                    officiis nam?
                  </p>
                  <p>
                    Nobis delectus nesciunt, at blanditiis sit quos impedit.
                    Dolores, nesciunt, doloremque nihil laborum soluta,
                    dignissimos earum odio aut aliquam nam omnis nisi.
                    Architecto est, animi necessitatibus perferendis suscipit
                    maiores natus!
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="white-div">
            <Container id="about-container" fluid>
              <Row>
                <Col className="text-center about-col">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Sequi iusto, sint ullam exercitationem error tempore
                    perferendis facilis illum vel dignissimos minima commodi ut
                    distinctio labore illo consequuntur deleniti odio qui!
                  </p>
                  <p>
                    Nihil rerum mollitia atque suscipit facilis similique,
                    ducimus officia, ratione obcaecati voluptate laborum sit
                    maxime delectus? Dolore veritatis debitis neque reiciendis
                    maiores adipisci cumque. Quisquam aspernatur adipisci illum
                    officiis nam?
                  </p>
                  <p>
                    Nobis delectus nesciunt, at blanditiis sit quos impedit.
                    Dolores, nesciunt, doloremque nihil laborum soluta,
                    dignissimos earum odio aut aliquam nam omnis nisi.
                    Architecto est, animi necessitatibus perferendis suscipit
                    maiores natus!
                  </p>
                </Col>
                <Col md="auto" className="about-col">
                  <Card className="img-card">
                    <img
                      fluid="true"
                      className="img-right"
                      id="pup-high-five"
                      src={PupHighFive}
                      alt="Pup and Trainer High Five"
                    ></img>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="blue-div">
            <Container id="about-container" fluid>
              <Row>
                <Col md="auto" className="about-col">
                  <Card className="img-card">
                    <img
                      fluid="true"
                      className="img-left"
                      id="pup-high-five"
                      src={PupHighFive}
                      alt="Pup and Trainer High Five"
                    ></img>
                  </Card>
                </Col>
                <Col className="text-center about-col">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Sequi iusto, sint ullam exercitationem error tempore
                    perferendis facilis illum vel dignissimos minima commodi ut
                    distinctio labore illo consequuntur deleniti odio qui!
                  </p>
                  <p>
                    Nihil rerum mollitia atque suscipit facilis similique,
                    ducimus officia, ratione obcaecati voluptate laborum sit
                    maxime delectus? Dolore veritatis debitis neque reiciendis
                    maiores adipisci cumque. Quisquam aspernatur adipisci illum
                    officiis nam?
                  </p>
                  <p>
                    Nobis delectus nesciunt, at blanditiis sit quos impedit.
                    Dolores, nesciunt, doloremque nihil laborum soluta,
                    dignissimos earum odio aut aliquam nam omnis nisi.
                    Architecto est, animi necessitatibus perferendis suscipit
                    maiores natus!
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        <Footer />
      </div>
    </LoginContext.Provider>
  );
}

export default LoginPage;
