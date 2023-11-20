import React, { createContext, useContext, useReducer } from 'react';

// Define initial state
const initialState = {
  plantCollection: [], // Array to store added plants
};

// Define actions
const ADD_PLANT = 'ADD_PLANT';

// Define action creators
const addPlant = (plantData) => ({
  type: ADD_PLANT,
  payload: plantData,
});

// Define reducer
const dataReducer = (state, action) => {
  switch (action.type) {
    case ADD_PLANT:
      return {
        ...state,
        plantCollection: [...state.plantCollection, action.payload],
      };
    default:
      return state;
  }
};

// Create context
const DataContext = createContext();

// Create context provider
export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  const contextValue = {
    state,
    dispatch,
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

// Custom hook to access context
export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
