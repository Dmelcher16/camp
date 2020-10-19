
// import { render } from "node-sass";
// import React, { useEffect, useState, Component } from "react";
// import API from "../../utils/exerciseAPI";
// import AppNav from "../AppNav/AppNav.js";
// import { Card, Container, Row, Col, CardGroup } from "react-bootstrap";

// function dataPage() {
//     const [exercises, setExercises] = useState([]);

//   //load all the dogs and store them with setDogs
//   useEffect(() => {
//     loadExercises();
//   }, []);

//   function loadExercises() {
//     API.getExercises()
//       .then((res) => setExercises(res.data))
//       .catch((err) => console.log(err));
//   }


//   return (
//       <div>
// <Row className="row">
//             <Col>
//               <CardGroup>
//                 <Row id="mapRow">
//                   {exercises.map((exercise) => (
//                     <div key={exercise._id} className="card-deck">
//                       <Col key={exercise._id} mb="3">
//                         <Card
//                           key={exercise._id}
//                           style={{ width: "18rem", text: "center" }}
//                         >
//                           <Card.Img
//                             key={exercise.sitStayAttempts}
//                             variant="top"
//                             className="card-img-top"
//                           />
//                         </Card>
//                       </Col>
//                     </div>
//                   ))}
//                 </Row>
//               </CardGroup>
//             </Col>
//           </Row>
//       </div>
//   )
// }

//   export default dataPage;