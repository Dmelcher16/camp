import React, { useState } from "react";
//imported package components
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-scroll";
//imported project components
import Login from "../../components/Login/Login";
import LoginContext from "../../utils/loginContext";
import Footer from "../../components/Footer/Footer";
//imported images
import Logo76x76 from "../../images/BlueCampK9_76.jpeg";
import Logo198x198 from "../../images/BlueCampK9_198.jpeg";
import PupHighFive from "../../images/tamu_obedience.jpg";
import TrainerAndDogs from "../../images/trainer-and-dogs.jpg";
import PottyTraining from "../../images/potty-training.jpg";
import ExampleChart from "../../images/example-chart.png";
//CSS file
import "./loginPage.css";

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
                        <Button
                          id="cxl-login-btn"
                          variant="outline-light"
                          onClick={() => setShowLogin(false)}
                        >
                          Cancel
                        </Button>
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
              <Row className="align-items-center">
                <Col md="auto" className="about-col">
                  <Card className="img-card">
                    <img
                      fluid="true"
                      className="img-left"
                      id="pup-high-five"
                      src={TrainerAndDogs}
                      alt="Pup and Trainer High Five"
                    ></img>
                  </Card>
                </Col>
                <Col className="about-col">
                  <h1 className="about-h1">Created for Trainers.</h1>
                  <p className="h4">
                    At Camp K-9 we believe good dogs are happy dogs, and happy
                    dogs make happy owners.
                  </p>
                  <br />
                  <p className="h4">
                    {" "}
                    Our application allows trainers to create and maintain data
                    of the progress they are making with each dog under their
                    care, and provide up-to-date information to their clients.
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="white-div">
            <Container id="about-container" fluid>
              <Row className="align-items-center blue-row">
                <Col className="about-col text-left order-2 order-md-1">
                  <h1 className="about-h1">Multiple Training Disciplines.</h1>
                  <p className="h4">
                    Track each pup's progress in areas of focus including
                    chewing/biting, potty training, general commands, leash
                    training, and sit/stay commands.
                  </p>
                </Col>
                <Col md="auto" className="about-col order-1 order-md-2">
                  <Card className="img-card">
                    <img
                      fluid="true"
                      className="img-right"
                      id="pup-high-five"
                      src={PottyTraining}
                      alt="Potty Training Accident"
                    ></img>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="blue-div">
            <Container id="about-container" fluid>
              <Row className="align-items-center">
                <Col md="auto" className="about-col">
                  <Card className="img-card">
                    <img
                      fluid="true"
                      className="img-left "
                      id="pup-high-five"
                      src={ExampleChart}
                      alt="Pup and Trainer High Five"
                    ></img>
                  </Card>
                </Col>
                <Col className="about-col">
                  <h1 className="about-h1">Measurable Results.</h1>
                  <p className="h4">
                    Your training data is displayed in coherent graphs so you
                    can easily visualize where progress is being made, and where
                    there are opportunites for improvement.
                  </p>
                  <br />
                  <p className="h4">
                    Graphs are updated and displayed immediately upon entry of
                    data.
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="white-div">
            <Container id="about-container" fluid>
              <Row className="align-items-center blue-row">
                <Col className="about-col text-left order-2 order-md-1">
                  <h1 className="about-h1">Committed to Your Success.</h1>
                  <p className="h4">
                    At Camp K-9 we are constantly seeking ways to improve our
                    product to ensure your continued success as a trainer.
                  </p>
                  <br />
                  <p className="h4">
                    Contact us today with any questions or suggestions!
                  </p>
                </Col>
                <Col md="auto" className="about-col order-1 order-md-2">
                  <Card className="img-card">
                    <img
                      fluid="true"
                      className="img-right"
                      id="pup-high-five"
                      src={PupHighFive}
                      alt="Potty Training Accident"
                    ></img>
                  </Card>
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
