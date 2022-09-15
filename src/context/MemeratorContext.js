import {createContext, useReducer, useState} from 'react'
import memeratorReducer from './MemeratorReducer'


const MemeratorContext = createContext();


export const MemeratorProvider = ({children}) => {

    const initialState = {
        status: '',
    }

    const [state, dispatch] = useReducer(memeratorReducer, initialState)



    return <MemeratorContext.Provider value={{
        status: state.status,
        dispatch
          
    }}>
        {children}
    </MemeratorContext.Provider>
}

export default MemeratorContext;