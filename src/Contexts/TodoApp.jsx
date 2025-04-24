import { createContext, useContext, useReducer } from "react";
import data from "../data";

const TodoContext = createContext();

const initialState = {
  data: data,
  isDarkMode: true,
  activeList: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "ThemeMode": {
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };
    }
  }
}

function TodoApp({ children }) {
  const [{ data, isDarkMode, activeList }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <TodoContext.Provider value={{ data, isDarkMode, activeList, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

function useTodo() {
  const context = useContext(TodoContext);
  if (context === undefined)
    throw new Error("Context was used outside The parent Context");

  return context;
}

export { useTodo, TodoApp };
