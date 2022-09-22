import './NavBar.css'
import {Link} from 'react-router-dom'
import {GiCardJoker} from 'react-icons/gi'
import {useContext } from 'react';
import MemeratorContext from '../../../context/MemeratorContext'

function NavBar() {
    const {dispatch} = useContext(MemeratorContext);

    const restart = () => {
        dispatch({
                type: 'SET_STATUS',
                payload: 'memerator'
            })
        dispatch({
                type: 'SET_MEMETEXT',
                payload: '',
            })
        dispatch({
                type: 'SET_MEMETEXT2',
                payload: '',
            })
        dispatch({
                type: 'SET_IMAGEPATH',
                payload: '',
            })
        dispatch({
                type: 'SET_IMAGENAME',
                payload: '',
            })
    }

    return (
        <header>
            <nav>
                <ul className="nav-links">
                    <li className="link"> <Link to="/"><GiCardJoker className="nav-icon"/></Link></li>
                    <li className="link link-margin" onClick={restart}> Restart</li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar
