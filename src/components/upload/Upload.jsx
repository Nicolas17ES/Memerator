import {useState} from 'react'
import Title from '../shared/title/Title'
import ArrowLeft from '../shared/arrows/ArrowLeft'
import Uploader from './ImageUpload'

function Upload() {

    const [fileUploader, setFileUploader] = useState(false);
    
    const showFileUploader = () => {
        setFileUploader(true);
    }
    return (
        <div className="upload">
            <div className="arrow-position">
                <ArrowLeft/>
            </div>
            {!fileUploader ? 
                <div onClick={showFileUploader} className="upload-pic">
                    <Title text={'Upload a picture'} />
                </div> 
                : 
                <Uploader/> 
            }
            
        </div>
    )
}

export default Upload
