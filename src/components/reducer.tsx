import { useReducer } from "react";

interface State {
  count: number;
  error: string | null;
}

interface Action {
  type: "increment" | "decrement";
}

function reducer(state: State, action: Action) {
  const { type } = action;

  switch (type) {
    case "increment": {
      const newCount = state.count + 1;
      const hasError = newCount > 5;
      return { ...state, count: hasError ? state.count : newCount, error: hasError ? "maximum reached" : null };
    }
    case "decrement": {
      const newCount = state.count - 1;
      const hasError = newCount < 0;
      return { ...state, count: hasError ? state.count : newCount, error: hasError ? "minimum reached" : null };
    }
    default:
      return state;
  }
}

const ReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    error: null,
  });
  return (
    <div>
      <div>count: {state.count}</div>
      {state.error && <div style={{ color: "red" }}>{state.error}</div>}
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
    </div>
  );
};

export default ReducerExample;

// reducer extremly similiar to useState but it gives you multiple use cases
// IT IS USED IN CASES WHERE YOU HAVE MULTIPLE STATES AND YOU WANT TO UPDATE THEM WITH DIFFERENT ACTIONS
// it clearly describes how the state should be updated and the actions that should be taken example error conditions
