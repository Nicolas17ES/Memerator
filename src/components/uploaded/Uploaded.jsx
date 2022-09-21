import Image from './Image'
import Input from './InputText'
import Input2 from './InputText2'
import MemeText from '../shared/memeText/MemeText'
import MemeText2 from '../shared/memeText/MemeText2'
import {useContext, useEffect, useState, useRef} from 'react';
import MemeratorContext from '../../context/MemeratorContext'
import * as htmlToImage from 'html-to-image';



function Uploaded() {
    const domEl = useRef(null);
    const {memeText, memeText2} = useContext(MemeratorContext);
    const [textOne, setTextOne] = useState(false)
    const [textTwo, setTextTwo] = useState(false)

        useEffect(() => {
            if(memeText !== ''){
                setTextOne(true)
            }
            if(memeText2 !== ''){
                setTextTwo(true)
            }
        }, [memeText, memeText2]);
        console.log(memeText)
        console.log(memeText2)

        const downloadImage = async () => {
            const dataUrl = await htmlToImage.toPng(domEl.current);
        
            // download image
            const link = document.createElement('a');
            link.download = "html-to-img.png";
            link.href = dataUrl;
            link.click();
        }

    
        if(!textOne && !textTwo){
            return (
                <div className="uploaded">           
                    <div className="meme">
                            <Input/>
                            <Image/>
                            <Input2/>
                    </div>
                </div>
            )
        } else if (textOne && !textTwo) {
            return(
                <div className="uploaded">           
                    <div className="meme">
                            <MemeText/>
                            <Image/>
                            <Input2/>
                    </div>
                </div>
            )
            
        } else if (!textOne && textTwo) {
            return(
                <div className="uploaded">           
                    <div className="meme">
                            <Input/>
                            <Image/>
                            <MemeText2/>
                    </div>
                </div>
            )
            
        } else {
            return(
                <div className="uploaded">           
                    <div className="meme" id="domEl" ref={domEl}>
                            <MemeText/>
                            <Image/>
                            <MemeText2/>
                    </div>
                    <button onClick={downloadImage}>Download Image</button>
                </div>
            )
            
        }

   
    
}

export default Uploaded
