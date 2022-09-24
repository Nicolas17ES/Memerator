import Title from '../shared/title/Title'
import ButtonOne from '../shared/buttonOne/ButtonOne'
import {useEffect} from 'react'
import {deleteFiles } from '../../context/MemeratorActions'
import { motion } from "framer-motion";


 
function Start() {
    useEffect(() => {      
            async function deleteData() {
                await deleteFiles();
            }

        deleteData();
        
    }, [])


    return (
        <motion.div 
            className="start"
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: .6}}
        >
            <Title text={'Memerator'}/>
            <h3 className="sub-title">Get a &lt;br/&gt; and build some memes </h3>
            {/* <AiOutlineThunderbolt className="thunderbolt"/> */}
            <ButtonOne text={'START'} status={'upload'}/>
        </motion.div>
    )
}

export default Start
