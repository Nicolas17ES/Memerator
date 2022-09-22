import {useContext} from 'react';
import MemeratorContext from '../../context/MemeratorContext'
import {GiFinishLine} from 'react-icons/gi'

function Created() {

     const {dispatch} = useContext(MemeratorContext);

    const restart = () => {
        dispatch({
                type: 'SET_STATUS',
                payload: 'memerator'
            })
        dispatch({
                type: 'SET_MEMETEXT',
                payload: '',
            })
        dispatch({
                type: 'SET_MEMETEXT2',
                payload: '',
            })
        dispatch({
                type: 'SET_IMAGEPATH',
                payload: '',
            })
        dispatch({
                type: 'SET_IMAGENAME',
                payload: '',
            })
    }

    return (
        <div className="generated">
            <h2 className="generated-title">THANK YOU</h2>
            {/* <GiFinishLine className="finish-line"/> */}
            <button className="keep-meming-button" onClick={restart}>Keep meming</button>
        </div>
    )
}

export default Created
