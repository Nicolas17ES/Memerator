import { useContext} from 'react'
import MemeratorContext from '../../context/MemeratorContext'
import ArrowLeft from '../shared/arrows/ArrowLeft'
import Uploader from './ImageUpload'
import Loader from '../shared/loader/Loader'
import {FaLongArrowAltDown} from 'react-icons/fa'
import { motion } from "framer-motion";


function Upload() {

    const {isLoading} = useContext(MemeratorContext);


    return isLoading ? (
        <div className="upload">
            <Loader text={'Your image is a bit heavy, give us a few seconds to process it'}/>
        </div>
       
    ) : (
        <motion.div
            className="upload"
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: .6}}
        >
            <div className="arrow-position">
                <FaLongArrowAltDown className="upload-arrow"/>
            </div>
           
            <div className="upload-pic">
                <h2 className="upload-title">Upload picture</h2>
                {/* <Title text={'Upload a picture'} /> */}
            </div> 
            <Uploader/>
        </motion.div>
    )
}

export default Upload
