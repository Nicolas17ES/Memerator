import {useState, useEffect, useContext} from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import MemeratorContext from '../../context/MemeratorContext'
import {uploadFile } from '../../context/MemeratorActions'
import Loader from '../shared/loader/Loader'





function ImageUpload() {

    const {isLoading, status, dispatch} = useContext(MemeratorContext);
    const navigate = useNavigate();

    const [file, setFile] = useState();
    // const [fileName, setFileName] = useState("");

    function onFileChange(e) {
        setFile(e.target.files[0]);
    // setFileName(e.target.files[0].name);

  };

  const addImage = async () => {
      console.log(file)
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



    return isLoading ? (
       <Loader/>
    ) : (
         <div>
            <input type="file" name="file" onChange={onFileChange} />
            <button onClick={addImage}>Upload</button>
        </div>
    )
}

export default ImageUpload
