import React, { createContext, useReducer } from 'react';
import { Children } from 'react';
import AppReducer from './AppReducer';

//Initial State
const initialState = {
    destinations: [

    ]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const removeDestination = (id) => {
        dispatch({
            type: 'REMOVE_DESTINATION',
            payload: id
        })
    }

    const addDestination = (destination) => {
        dispatch({
            type: 'ADD_DESTINATION',
            payload: destination
        })
    }

    const editDestination = (destination) => {
        dispatch({
            type: 'EDIT_USER',
            payload: destination
        })
    }

    

    return (
        <GlobalContext.Provider value={{
            destinations: state.destinations,
            removeDestination : removeDestination,
            addDestination : addDestination,
            editDestination : editDestination
        }}>
            {children}
        </GlobalContext.Provider>
    )
}