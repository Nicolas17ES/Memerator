import './MemeText.css'
import {useContext} from 'react';
import MemeratorContext from '../../../context/MemeratorContext'

function MemeText() {

    const {memeText} = useContext(MemeratorContext);

    return (
        <>
           <h3 className="meme-text top">{memeText}</h3> 
        </>
    )
}

export default MemeText
