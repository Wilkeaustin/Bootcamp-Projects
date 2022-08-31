import React, { createContext, useReducer } from 'react';
import { Children } from 'react';
import AppReducer from './AppReducer';

//Initial State
const initialState = {
    burgers: [
        {id: 1, name: 'Burger One'},
        {id: 2, name: 'Burger Two'},
        {id: 3, name: 'Burger Three'}
    ]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const removeBurger = (id) => {
        dispatch({
            type: 'REMOVE_BURGER',
            payload: id
        })
    }

    const addBurger = (burger) => {
        dispatch({
            type: 'ADD_BURGER',
            payload: burger
        })
    }

    

    return (
        <GlobalContext.Provider value={{
            burgers: state.burgers,
            removeBurger: removeBurger,
            addBurger: addBurger
        }}>
            {children}
        </GlobalContext.Provider>
    )
}