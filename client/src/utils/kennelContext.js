import React from "react";

const KennelContext = React.createContext({
  dogs: [],
  loadDogs: () => {}
});

export default KennelContext;