import {useState, useContext} from 'react';
import MemeratorContext from '../../context/MemeratorContext'
import {uploadFile } from '../../context/MemeratorActions'
import Loader from '../shared/loader/Loader'






function ImageUpload() {

    const {isLoading, dispatch} = useContext(MemeratorContext);
    const [file, setFile] = useState();
    const [message, setMessage] = useState('');

    function onFileChange(e) {
        
        setFile(e.target.files[0]);
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
                        payload: `http://localhost:8000/upload/${file.name.replace(/ /g, "")}`
                    })
                    dispatch({
                        type: 'SET_STATUS',
                        payload: 'uploaded'
                    })
                    dispatch({
                        type: 'SET_LOADING',
                        payload: false
                    })
                }, 1499)
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
         <div>
            <input type="file" name="file" onChange={onFileChange} />
            <button onClick={addImage}>Upload</button>
            {message && <div className="messageMeme">{message}</div>}
        </div>
    )
}

export default ImageUpload
