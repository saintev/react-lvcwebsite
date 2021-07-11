import { Link } from 'react-router-dom';
import './Header.css';

const Header = () =>{
    return (
        <header className='header'>
            <nav role="navigation">
                <ul>
                    <li><a href="./index.html" className="navlink">Home</a></li>
                    <li><a href="./index.html" className="dropdownButton navlink">All courses</a>
                        <ul className="dropdown">
                            <li><a href="https://en.wikipedia.org/wiki/MEAN_(solution_stack)">MEAN</a></li>
                            <li><a href="https://wikitia.com/index.php?title=MERN_(solution_stack)&mobileaction=toggle_view_desktop">MERN</a></li>
                            <li><a href="https://en.wikipedia.org/wiki/Java_(programming_language)">JAVA</a></li>
                        </ul>
                    </li>
                    <li className='registration'>
                        <Link to="/registration">Registration</Link>
                    </li>
                    <li>
                        <Link to="/gallery">Gallery</Link>    
                    </li>
                        <li><Link to="./contact">Contact us</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;