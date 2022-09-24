import './NotFound.css'
import {Link} from 'react-router-dom'
import { motion } from "framer-motion";


function NotFound() {
    return (
        <motion.section
        initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: .6}}
        >
            <div className="error-container">
                <p className="error" title="404">404 ERROR</p>
                <p className="text-error">I've searched high and low but couldn't find what you're looking for. Let me take you back...</p>
                <Link to="/">
                    <button className="button-error">Go back</button>
                </Link>          
            </div>
        </motion.section>
    )
}

export default NotFound