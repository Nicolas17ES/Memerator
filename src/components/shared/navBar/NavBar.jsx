import './NavBar.css'
import {Link} from 'react-router-dom'
import {GiCardJoker} from 'react-icons/gi'

function NavBar() {
    return (
        <header>
            <nav>
                <ul className="nav-links">
                    <li className="link"> <Link to="/"><GiCardJoker className="nav-icon"/></Link></li>
                    <li className="link link-margin">Restart</li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar
