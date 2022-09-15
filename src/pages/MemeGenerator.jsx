import { useState,  useEffect, useContext } from 'react';
import MemeratorContext from '../context/MemeratorContext'


// blocks to show
import Start from '../components/start/Start'
import Upload from '../components/upload/Upload'
import MemeText from '../components/shared/memeText/MemeText'

function MemeGenerator() {

    // CONTEXT DATA

    const {status} = useContext(MemeratorContext);
    

    if(status === ''){
        return (
            <div className="memerator">
                <Start/>
            </div>
        )
    } 
    else if (status === 'upload') {
        return (
        <div className="memerator">
            <Upload/>
        </div>
        )
    }
    else {
        return (
        <div className="memerator">
            <h1>Memerator else</h1>
        </div>
    )
    }

}

export default MemeGenerator
