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
        dispatch({
                type: 'SET_LOADING',
                payload: false,
            })
    }

    return (
        <header>
            <nav>
                <ul className="nav-links">
                    <li className="link"> <GiCardJoker className="nav-icon"/></li>
                    <li className="link link-margin" onClick={restart}> Restart</li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar
