import './Loader.css'
import { motion } from "framer-motion";


function Loader() {
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
        </motion.div>
        
    )
}

export default Loader
