import './MemeText.css'
import {useContext} from 'react';
import MemeratorContext from '../../../context/MemeratorContext'

function MemeText() {

    const {memeText2} = useContext(MemeratorContext);

    return (
        <>
           <h3 className="meme-text bottom">{memeText2}</h3> 
        </>
    )
}

export default MemeText
