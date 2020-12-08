import React, { createContext, useReducer, useContext } from "react";
import {
  UPDATE_DOGS,
  REMOVE_DOG,
  SET_CURRENT_DOG,
  ADD_DOG,
  UPDATE_EXERCISE,
  REMOVE_EXERCISE,
  SET_CURRENT_EXERCISE,
  ADD_EXERCISE,
  LOADING,
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_DOGS:
      return {
        ...state,
        dogs: [...action.dogs],
        loading: false,
      };
    case REMOVE_DOG:
      return {
        ...state,
        dogs: state.dogs.filter((dog) => {
          return dog._id !== action._id;
        }),
      };
    case SET_CURRENT_DOG:
      return {
        ...state,
        currentDog: action.dog,
        loading: false,
      };
    case ADD_DOG:
      return {
        ...state,
        dogs: [action.dog, ...state.dogs],
        loading: false,
      };
    case UPDATE_EXERCISE:
      return {
        ...state,
        exercises: [...state.exercises],
      };
    case REMOVE_EXERCISE:
      return {
        ...state,
        exercises: state.exercises.filter((exercise) => {
          return exercise._id !== action._id;
        }),
      };
    case SET_CURRENT_EXERCISE:
      return {
        ...state,
        currentExercise: action.exercise,
        loading: false,
      };
    case ADD_EXERCISE:
      return {
        ...state,
        exercises: [action.exercise, ...state.exercises],
        loading: false,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    dogs: [],
    currentDog: {
      _id: 0,
      name: "",
      breed: "",
      age: "",
      ownerFirstName: "",
      ownerLastName: "",
      image: "",
      exercises: [],
    },
    exercises: {
      exercises: "",
      leashDuration: "",
      leashPullDuration: "",
      sitStayAttempts: "",
      sitStaySuccesses: "",
      commandsAttempted: "",
      commandsCompleted: "",
      chewing: "",
      numPottyAccidents: "",
      numPottySuccesses: "",
    },
    loading: false,
  });
  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
