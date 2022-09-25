import './Loader.css'
import {useState, useEffect} from 'react'
import { motion } from "framer-motion";


function Loader({text}) {
    const [textError, setTextError] = useState(text);
    const [displayText, setDisplayText] = useState(false)


    setTimeout(function(){ setDisplayText(true) }, 5000);

    return (
        <motion.div 
        className="loaderPage"
        initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: .6}}
        >
            <div className="loader">
                <span className="spanOne"></span>
                <span className="spanOne"></span>
                <span className="spanOne"></span>
            </div>
            {displayText && <p className="message load-error">{textError}</p>}
        </motion.div>
        
    )
}

export default Loader
