import React, { useContext, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import WelcomeNav from "../../components/WelcomeNav/WelcomeNav";
import Login from "../../components/Login/Login";
import BlueCampK9Logo from "../../images/BlueCampK9_76.jpeg";
import "./loginPage.css";
import LoginContext from "../../utils/loginContext";
import Footer from "../../components/Footer/Footer";

function LoginPage() {
  //set initial state
  const [showLogin, setShowLogin] = useState(false);

  // useEffect(() => {
  //   setShowLogin(false);
  // }, [showLogin]);

  return (
    <LoginContext.Provider value={{ setShowLogin }}>
      <div>
        <div className="loginPageImg">
          <div className="overlay"></div>
          <div className="content">
            <WelcomeNav />
            <Container id="login-container">
              <Row id="login-row">
                <Col
                  className="login-col text-center"
                  lg={{ span: 6, offset: 6 }}
                  sm={{ span: 12 }}
                >
                  {!showLogin ? (
                    <div>
                      <h2>Welcome to Camp K-9!</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Integer posuere erat a
                        ante.Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Integer posuere erat a ante.Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit. Integer posuere erat
                        a ante.Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Integer posuere erat a ante.
                      </p>
                      <div className="inline">
                        <Button id="to-kennel" variant="outline-success">
                          Learn More
                        </Button>
                        <Button
                          id="to-kennel"
                          variant="outline-success"
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
                          src={BlueCampK9Logo}
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
              {/* <Row>
            <Col className="login-col text-center" lg={{ span: 4, offset: 8 }}>
              <Login />
            </Col>
          </Row> */}
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    </LoginContext.Provider>
  );
}

export default LoginPage;
