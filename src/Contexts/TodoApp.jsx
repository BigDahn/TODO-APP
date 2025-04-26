import { createContext, useContext, useReducer } from "react";
import data from "../data";

const TodoContext = createContext();

const listFilter = ["All", "Active", "Completed"];

const initialState = {
  data: data,
  isDarkMode: true,
  options: listFilter.at(0),
  originalData: data,
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
      return {
        ...state,
        data: [...state.data, action.payload],
        originalData: [...state.originalData, action.payload],
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
        originalData: state.originalData.map((s) => {
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
    case "filter": {
      return {
        ...state,
        options: listFilter.filter((s) => s === action.payload)[0],
        data:
          action.payload === "All"
            ? state.originalData
            : action.payload === "Active"
            ? state.originalData.filter((s) => !s.isCompleted)
            : state.originalData.filter((s) => s.isCompleted),
      };
    }
    case "delete": {
      return {
        ...state,
        data: state.data.filter((s) => s.id != action.payload),
        originalData: state.originalData.filter((s) => s.id != action.payload),
      };
    }
    case "clear": {
      return {
        ...state,
        data: state.data.filter((s) => !s.isCompleted),
        originalData: state.originalData.filter((s) => !s.isCompleted),
      };
    }
  }
}

function TodoApp({ children }) {
  const [{ data, isDarkMode, activeList, options }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <TodoContext.Provider
      value={{ data, isDarkMode, activeList, options, listFilter, dispatch }}
    >
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
