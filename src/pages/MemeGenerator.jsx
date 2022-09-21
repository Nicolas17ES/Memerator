import {useContext } from 'react';
import MemeratorContext from '../context/MemeratorContext'


// blocks to show
import Start from '../components/start/Start'
import Upload from '../components/upload/Upload'
import Uploaded from '../components/uploaded/Uploaded'


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
    else if (status === 'uploaded') {
        return (
        <div className="memerator">
            <Uploaded/>
        </div>
        )
    }
    else if (status === 'generated') {
        return (
        <div className="memerator">
            <h1>GENERATED</h1>
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
