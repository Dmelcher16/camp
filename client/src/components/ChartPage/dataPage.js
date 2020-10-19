
import React, { useEffect, useState } from "react";
import API from "../../utils/exerciseAPI";
import AppNav from "../AppNav/AppNav.js";

export default function dataPage() {
 
//   const [getExercises] = useState({
//     Exercises: "",
//     leashDuration: "",
//     leashPullDuration: "",
//     sitStayAttempts: "",
//     sitStaySuccess: "",
//     commandsAttempted: "",
//     commandsCompleted: "",
//     chewing: "",
//     numPottyAccidents: "",
//     numPottySuccesses: ""
//   });
  

//   useEffect(() => {
//     loadExercises();
   
//   }, []);

  function loadExercises() {
    API.getExercise()
      .then((res) => getExercise(res.data))
      .catch((err) => console.log(err))
  }
  loadExercises();
  console.log(getExercise)
    return (
        <div>

        </div>
    )
}