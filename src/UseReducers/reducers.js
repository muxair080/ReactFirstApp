import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREAMENT":
      return state + action.value;
    case "DECREAMENT":
      return state - action.value;
      case "INCREAMENT5":
        return state + action.value;
    case "DECREAMENT5":
        return state - action.value
    case "RESET":
      return initialState;
  }
};
const Reducers = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "INCREAMENT" , value : 1})}>
        INCREAMENT{" "}
      </button>
      <button onClick={() => dispatch({ type: "DECREAMENT", value : 1})}>
        DECREAMENT
      </button>
      <button onClick={() => dispatch({ type: "INCREAMENT5", value : 5})}>
        INCREAMENT5
      </button>
      <button onClick={() => dispatch({ type: "DECREAMENT5", value : 5})}>
        DECREAMENT5
      </button>
      <button onClick={() => dispatch({type: "RESET" , value : 0})}>RESET</button>
    </div>
  );
};

export default Reducers;
