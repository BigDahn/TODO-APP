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
    case "NewData": {
      const updatedData = [...state.data, action.payload];

      return {
        ...state,
        data: updatedData,
      };
    }
    case "checked": {
      return {
        ...state,
        data: state.data.map((s) => {
          if (s.id === action.payload) {
            return {
              ...s,
              isCompleted: !s.isCompleted,
            };
          }
          return s;
        }),
      };
    }
    case "clear": {
      return {
        ...state,
        data: state.data.filter((s) => !s.isCompleted),
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
