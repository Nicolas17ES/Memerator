import Image from './Image'
import Input from './InputText'
import Input2 from './InputText2'
import MemeText from '../shared/memeText/MemeText'
import MemeText2 from '../shared/memeText/MemeText2'
import Loader from '../shared/loader/Loader'
import {useContext, useEffect, useState, useRef} from 'react';
import MemeratorContext from '../../context/MemeratorContext'
import * as htmlToImage from 'html-to-image';
import {BsFillCloudDownloadFill} from 'react-icons/bs'
import {MdOutlinePreview} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'



function Uploaded() {
    const domEl = useRef(null); 
    // const blurEl= useRef(null); 
    const {memeText, memeText2, isLoading, dispatch} = useContext(MemeratorContext);
    const [textOne, setTextOne] = useState(false)
    const [textTwo, setTextTwo] = useState(false)
    const [blur, setBlur] = useState(false)

        useEffect(() => {
            if(memeText !== ''){
                setTextOne(true)
            }
            if(memeText2 !== ''){
                setTextTwo(true)
            }
        }, [memeText, memeText2]);

      


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


        // PREVIEW MEME
          useEffect(() => {
            if(blur){
                    document.body.style.overflow = "hidden"
                } else {
                    document.body.style.overflowX = "hidden"
                    document.body.style.overflowY = "scroll"
                }
            }, [blur]);


        const preview = () => {
            setBlur(true)
        }
        // PREVIEW MEME

        // close preview meme
        const closeBlur = () => {
            setBlur(false)

        }
        // close preview meme

        if (isLoading){
            return (
                <Loader/>
            )
        } else if(!textOne && !textTwo){
            return (
                <div className="uploaded"> 
                    <Input />          
                    <div className="meme">
                            <Image/>
                    </div>
                    <Input2/>
                </div>
            )
        } else if (textOne && !textTwo) {
            return(
                <div className="uploaded"> 
                    <button className="change-text-button" onClick={changeTextOne}>Change Top Text</button>          
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
                    <button className="change-text-button"  onClick={changeTextTwo}>Change Bottom Text</button>
                </div>
            )
            
        } else {
            return(
                <>
                <div className={`${blur === true ? "blur-el" : "hidden-blur "}`} onClick={closeBlur}></div>
                <div className={`${blur === true ? "close-blur-icon" : "hidden-blur "}`} onClick={closeBlur}><AiFillCloseCircle className="blur-icon"/></div>
                <div className="uploaded"> 
                
                <button className="download-button" onClick={downloadImage}> <BsFillCloudDownloadFill className="download-icon"/> <p className="download-text">DOWNLOAD</p> </button>
                    <button className="change-text-button"  onClick={changeTextOne}>Change Top Text</button>          
                    <div className={blur ? "meme preview" : "meme"}  ref={domEl}>                          
                            <MemeText/>
                            <Image/>
                            <MemeText2/>
                    </div>
                    
                     <button className="change-text-button"  onClick={changeTextTwo}>Change Bottom Text</button>
                <button className="download-button-left" onClick={preview}> <MdOutlinePreview className="download-icon-left"/> <p className="preview-text">PREVIEW</p></button>
                </div>
                </>
            )
            
        }

   
    
}

export default Uploaded
