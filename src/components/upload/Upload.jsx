import { useContext} from 'react'
import MemeratorContext from '../../context/MemeratorContext'
import ArrowLeft from '../shared/arrows/ArrowLeft'
import Uploader from './ImageUpload'
import Loader from '../shared/loader/Loader'
import {FaLongArrowAltDown} from 'react-icons/fa'


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
                <FaLongArrowAltDown className="upload-arrow"/>
            </div>
           
            <div className="upload-pic">
                <h2 className="upload-title">Upload picture</h2>
                {/* <Title text={'Upload a picture'} /> */}
            </div> 
            <Uploader/>
        </div>
    )
}

export default Upload
