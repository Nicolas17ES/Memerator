import {useState, useEffect, useContext} from 'react';
import MemeratorContext from '../../context/MemeratorContext'
import {getFile } from '../../context/MemeratorActions'



function Image() {

    const [meme, setMeme] = useState();
    const {imageName, imagePath} = useContext(MemeratorContext);

    useEffect(() => {
        
        async function fetchData() {
            const response = await getFile(imageName);
            setMeme(response.data) 
        
        }

    fetchData();
    
}, [])




    return (
        <div>
            <img src={imagePath} alt="User meme" className="memeImage"/>
        </div>
    )
}

export default Image
