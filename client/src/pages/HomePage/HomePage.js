import React, { useState, useEffect } from "react";
import "./HomePage.css";
import { Row, Col } from "react-bootstrap";
import AppNav from "../../components/AppNav/AppNav.js";
import CreateDogForm from "../../components/CreateDogForm/CreateDogForm";
import SearchInput from "../../components/SearchInput/SearchInput";
import KennelList from "../../components/KennelList/KennelList";
import Footer from "../../components/Footer/Footer";
import API from "../../utils/API";
import "../../components/CreateDogForm/CreateDogForm.css";
import KennelContext from "../../utils/kennelContext";

function Homepage() {
  //set initial state
  const [dogs, setDogs] = useState([]);
  const [search, setSearch] = useState("");
  const [nameSearchParam] = useState(["name"]);

  useEffect(() => {
    loadDogs();
    // eslint-disable-next-line
  }, []);

  function loadDogs() {
    API.getDogs()
      .then((res) => setDogs(res.data))
      .catch((err) => console.log(err));
  }

  //update state of search based on value of input
  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  function dogSearch(dogs) {
    if (search) {
      return dogs.filter((searchResults) => {
        return nameSearchParam.some((newSearchResults) => {
          return (
            searchResults[newSearchResults]
              .toString()
              .toLowerCase()
              .indexOf(search.toLowerCase()) > -1
          );
        });
      });
    } else {
      return dogs;
    }
  }

  return (
    <>
      <KennelContext.Provider value={{ dogs, loadDogs, search, dogSearch }}>
        <div className="main">
          <AppNav />
          <CreateDogForm />
          <Row className="main-row">
            <div className="main-homepage">
              <Row id="main-kennel-row" className="justify-content-center">
                <Col id="kennel-col">
                  <Row id="title-row" className="justify-content-center">
                    <Col id="greeting-col" md>
                      <h3 id="greeting">KENNEL</h3>
                    </Col>
                  </Row>
                  <Row className="row justify-content-center">
                    <Col lg={8}>
                      <SearchInput
                        placeholder="Search by name..."
                        value={search}
                        onChange={handleInputChange}
                      />
                    </Col>
                    <Col sm="12">
                      <KennelList />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Row>
          <Footer />
        </div>
      </KennelContext.Provider>
    </>
  );
}

export default Homepage;
