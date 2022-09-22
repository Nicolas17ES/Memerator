import {useState, useEffect, useContext} from 'react';
import MemeratorContext from '../../context/MemeratorContext'
import {getFile } from '../../context/MemeratorActions'



function Image() {

    const [meme, setMeme] = useState();
    const {imageName, imagePath, dispatch} = useContext(MemeratorContext);

    useEffect(() => {
        
        async function fetchData() {
            const response = await getFile(imageName);
            if(response.status === 200){
                setMeme(response.data)
            } else {
                dispatch({
                        type: 'SET_STATUS',
                        payload: 'error_uploading'
                    })
            } 
        }

    fetchData();
    
}, [])




    return (
        <>
            <img src={imagePath} alt="User meme" className="memeImage"/>
        </>
    )
}

export default Image
