import {useContext} from 'react';
import MemeratorContext from '../../context/MemeratorContext'

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
            <h1>Meme Succesfully generated</h1>
            <button onClick={restart}>Keep doing memes</button>
        </div>
    )
}

export default Created
