import {createContext, useReducer, useState} from 'react'
import memeratorReducer from './MemeratorReducer'


const MemeratorContext = createContext();


export const MemeratorProvider = ({children}) => {

    const initialState = {
        status: '',
        isLoading: false,
        imageName: '',
        imagePath: '',
        memeText: '',
        memeText2: '',
    }

    const [state, dispatch] = useReducer(memeratorReducer, initialState)



    return <MemeratorContext.Provider value={{
        status: state.status,
        isLoading: state.isLoading,
        imageName: state.imageName,
        imagePath: state.imagePath,
        memeText: state.memeText,
        memeText2: state.memeText2,
        dispatch
          
    }}>
        {children}
    </MemeratorContext.Provider>
}

export default MemeratorContext;