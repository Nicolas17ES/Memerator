import {useContext } from 'react';
import MemeratorContext from '../context/MemeratorContext'


// blocks to show
import Start from '../components/start/Start'
import Upload from '../components/upload/Upload'
import Uploaded from '../components/uploaded/Uploaded'
import Created from '../components/created/Created'
import Error from '../components/error/Error'


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
    // else if (status === 'generated') {
    //     return (
    //     <div className="memerator">
    //         <h1>GENERATED</h1>
    //     </div>
    //     )
    // }
    else if (status === 'error_uploading') {
        return (
        <div className="memerator">
            <Error/>
        </div>
        )
    }
    else if (status === 'meme_created') {
        return (
        <div className="memerator">
            <Created/>
        </div>
        )
    }
    else {
        return (
        <div className="memerator">
            <Start/>
        </div>
    )
    }

}

export default MemeGenerator
