import {useContext} from 'react';
import MemeratorContext from '../../context/MemeratorContext'
import { motion } from "framer-motion";

function Created() {

     const {dispatch} = useContext(MemeratorContext);

    const restart = () => {
        dispatch({
                type: 'SET_STATUS',
                payload: 'upload'
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
        dispatch({
                type: 'SET_LOADING',
                payload: false,
            })
    }

    return (
        <motion.div 
            className="generated"
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: .6}}
        >
            <h2 className="generated-title">THANK YOU</h2>
            {/* <GiFinishLine className="finish-line"/> */}
            <button className="keep-meming-button" onClick={restart}>Keep meming</button>
        </motion.div>
    )
}

export default Created
