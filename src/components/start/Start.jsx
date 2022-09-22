import Title from '../shared/title/Title'
import ButtonOne from '../shared/buttonOne/ButtonOne'
import {useEffect} from 'react'
import {deleteFiles } from '../../context/MemeratorActions'
import {AiOutlineThunderbolt} from 'react-icons/ai'

 
function Start() {
    useEffect(() => {      
            async function deleteData() {
                await deleteFiles();
            }

        deleteData();
        
    }, [])


    return (
        <div className="start">
            <Title text={'Memerator'}/>
            <h3 className="sub-title">Get a &lt;br/&gt; and build some memes </h3>
            {/* <AiOutlineThunderbolt className="thunderbolt"/> */}
            <ButtonOne text={'START'} status={'upload'}/>
        </div>
    )
}

export default Start
