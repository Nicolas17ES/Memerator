import Image from './Image'
import Input from './InputText'
import Input2 from './InputText2'
import MemeText from '../shared/memeText/MemeText'
import MemeText2 from '../shared/memeText/MemeText2'
import Loader from '../shared/loader/Loader'
import {useContext, useEffect, useState, useRef} from 'react';
import MemeratorContext from '../../context/MemeratorContext'
import * as htmlToImage from 'html-to-image';



function Uploaded() {
    const domEl = useRef(null); 
    const {memeText, memeText2, isLoading, dispatch} = useContext(MemeratorContext);
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
            link.download = "meme.png";
            link.href = dataUrl;
            link.click();

            dispatch({
                type: 'SET_LOADING',
                payload: true
            })

            setTimeout(function() {
                    dispatch({
                        type: 'SET_STATUS',
                        payload: 'meme_created'
                    })
                    dispatch({
                        type: 'SET_LOADING',
                        payload: false
                    })
                }, 1499)
        }

        // RESET TEXTS
        const changeTextOne = () => {
            setTextOne(false)
             dispatch({
                type: 'SET_MEMETEXT',
                payload: '',
            })
        }
        const changeTextTwo = () => {
            setTextTwo(false)
             dispatch({
                type: 'SET_MEMETEXT2',
                payload: '',
            })
        }
        // RESET TEXTS

        if (isLoading){
            return (
                <Loader/>
            )
        } else if(!textOne && !textTwo){
            return (
                <div className="uploaded"> 
                    <Input/>          
                    <div className="meme">
                            <Image/>
                    </div>
                    <Input2/>
                </div>
            )
        } else if (textOne && !textTwo) {
            return(
                <div className="uploaded"> 
                    <button onClick={changeTextOne}>Change Top Text</button>          
                    <div className="meme">
                            <MemeText/>
                            <Image/>
                    </div>
                    <Input2/>
                </div>
            )
            
        } else if (!textOne && textTwo) {
            return(
                <div className="uploaded">
                    <Input/>           
                    <div className="meme">
                            <Image/>
                            <MemeText2/>
                    </div>
                    <button onClick={changeTextTwo}>Change Bottom Text</button>
                </div>
            )
            
        } else {
            return(
                <div className="uploaded"> 
                    <button onClick={changeTextOne}>Change Top Text</button>          
                    <div className="meme" ref={domEl}>                          
                            <MemeText/>
                            <Image/>
                            <MemeText2/>
                    </div>
                     <button onClick={changeTextTwo}>Change Bottom Text</button>
                    <button onClick={downloadImage}>Download Image</button>
                </div>
            )
            
        }

   
    
}

export default Uploaded
