import './ButtonOne.css'
import {useContext, useEffect} from 'react'
import MemeratorContext from '../../../context/MemeratorContext'


function ButtonOne({text, status}) {
    
    const {dispatch} = useContext(MemeratorContext);

    // change status
    const changeStatus = () => {
        dispatch({
                type: 'SET_STATUS',
                payload: status
            })
    }
   

    
    return (
        <div>
            <button className="buttonOne"  onClick={changeStatus}>{text}</button>
        </div>
    )
}

export default ButtonOne
