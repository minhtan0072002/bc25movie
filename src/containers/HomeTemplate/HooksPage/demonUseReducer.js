import React, { useReducer } from "react";

const initialState = {
  number: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "decrement": {
      return { number: state.number - 1 };
    }
    case "increment": {
      return { number: state.number + 1 };
    }
    default:
      return { ...state };
  }
};

export default function DemonUseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h3>DemonUseReducer</h3>
      <button
        className="btn btn-danger"
        onClick={() => {
          dispatch({
            type: "decrement",
          });
        }}
      >
        -
      </button>
      <span>Number : {state.number}</span>
      <button
        className="btn btn-success"
        onClick={() => {
          dispatch({
            type: "increment",
          });
        }}
      >
        +
      </button>
    </div>
  );
}
