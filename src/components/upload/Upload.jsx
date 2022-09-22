import {useState, useContext} from 'react'
import MemeratorContext from '../../context/MemeratorContext'
import Title from '../shared/title/Title'
import ArrowLeft from '../shared/arrows/ArrowLeft'
import Uploader from './ImageUpload'
import Loader from '../shared/loader/Loader'


function Upload() {

    const {isLoading, dispatch} = useContext(MemeratorContext);

    // const [fileUploader, setFileUploader] = useState(false);
    
    // const showFileUploader = () => {
    //     setFileUploader(true);
    // }

    return isLoading ? (
        <div className="upload">
            <Loader/>
        </div>
       
    ) : (
        <div className="upload">
            <div className="arrow-position">
                <ArrowLeft/>
            </div>
           
            <div className="upload-pic">
                <Title text={'Upload a picture'} />
            </div> 
            <Uploader/>
        </div>
    )
}

export default Upload
