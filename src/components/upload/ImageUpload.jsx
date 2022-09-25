import {useState, useContext, useRef} from 'react';
import MemeratorContext from '../../context/MemeratorContext'
import {uploadFile } from '../../context/MemeratorActions'
import Loader from '../shared/loader/Loader'
import {BsCloudUploadFill} from 'react-icons/bs'






function ImageUpload() {

    const {isLoading, dispatch} = useContext(MemeratorContext);
    const [file, setFile] = useState();
    const [message, setMessage] = useState('');
    const [showUpload, setShowUpload] = useState(false);
    const shake = useRef(null);

    function onFileChange(e) {    
        setFile(e.target.files[0]);
        console.log(e.target.files[0])
        const button = shake.current; 
        button.className = "shakeit";
    };


  const addImage = async () => {
      if(file === undefined || file === null){
          setMessage('Please upload an Image to memefy')
      } else {
          dispatch({
                type: 'SET_LOADING',
                payload: true
            })
            const res =  await uploadFile(file);  
            if(res.status === 201){
                setTimeout(function() {
                    dispatch({
                        type: 'SET_IMAGENAME',
                        payload: file.name.replace(/ /g, "")
                    })
                    dispatch({
                        type: 'SET_IMAGEPATH',
                        payload: `https://memerator-backend.herokuapp.com/upload/${file.name.replace(/ /g, "")}`
                    })
                    dispatch({
                        type: 'SET_STATUS',
                        payload: 'uploaded'
                    })
                    dispatch({
                        type: 'SET_LOADING',
                        payload: false
                    })
                }, 1629)
            } else {
                dispatch({
                        type: 'SET_STATUS',
                        payload: 'error_uploading'
                    })
            }
        }
    
    }



    return isLoading ? (
       <Loader/>
    ) : (
         <div className="uploader">
             <div className="file-upload-block">
                 <input className="upload-input" id="file" type="file" name="file" onChange={onFileChange} />
                 
                <label onClick={() => setShowUpload(true)} for="file" className="upload-label"> <BsCloudUploadFill className="upload-icon"/> <p>Choose a file</p></label>
             </div>
            
            <button ref={shake} className="upload-button" onClick={addImage}>NEXT</button>
            {message && <div className="messageMeme">{message}</div>}
        </div>
    )
}

export default ImageUpload
