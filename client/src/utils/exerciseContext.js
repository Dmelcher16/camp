import React from "react";

const ExerciseContext = React.createContext([
  {
    day: "",
    dog: "",
    exercises: "",
    leashDuration: "",
    leashPullDuration: "",
    sitStayAttempts: "",
    sitStaySuccess: "",
    commandsAttempted: "",
    commandsCompleted: "",
    chewing: "",
    numPottyAccidents: "",
    numPottySuccesses: "",
  },
]);

export default ExerciseContext;
