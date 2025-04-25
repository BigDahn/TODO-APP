import { createContext, useContext, useReducer } from "react";
import data from "../data";

const TodoContext = createContext();

const listFilter = ["All", "Active", "Completed"];

const initialState = {
  data: data,
  isDarkMode: true,
  options: listFilter.at(0),
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
    case "filter": {
      const result = action.payload;
      let norms;
      if (result === "All") {
        norms = data;
      } else if (result === "Active") {
        norms = data.filter((s) => !s.isCompleted);
      } else {
        norms = data.filter((s) => s.isCompleted);
      }

      console.log(norms);
      return {
        ...state,
        options: listFilter.filter((s) => s === action.payload)[0],
        data: norms,
      };
    }
    case "delete": {
      return {
        ...state,
        data: state.data.filter((s) => s.id != action.payload),
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
