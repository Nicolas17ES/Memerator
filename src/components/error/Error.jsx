import './NotFound.css'
import {Link} from 'react-router-dom'
import {TbFaceIdError} from 'react-icons/tb'
import { motion } from "framer-motion";


function Error() {
    return (
        <motion.div 
        className="memerator"
        initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: .6}}
        >
            <div className="errorPage">
                <TbFaceIdError className="error-icon"/>
                <p className="text-error">
                    There has been an error uploading your image, please try again.
                </p>
                <Link to="/"><button className="button-error">Go Back</button></Link>
            </div> 
        </motion.div>
    )
}

export default Error
