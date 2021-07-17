import { Link } from 'react-router-dom';
import './Header.css';
import { Carousel } from 'react-bootstrap';
import picture1 from '../images/slideshow/picture1.jpg';
import picture2 from '../images/slideshow/picture2.jpg';
import picture3 from '../images/slideshow/picture3.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () =>{
    return (
        <header className='header'>
            <Carousel controls={false} pause={false} fade={true}>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={picture1} 
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={picture2}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={picture3}
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

            <nav role="navigation">
                <ul>
                    <li className="navlink">
                        <Link to ="/home">Home</Link>
                    </li>
                    <li>
                        <a className="dropdownButton navlink">All courses</a>
                        <ul className="dropdown">
                            <li><a href="https://en.wikipedia.org/wiki/MEAN_(solution_stack)">MEAN</a></li>
                            <li><a href="https://wikitia.com/index.php?title=MERN_(solution_stack)&mobileaction=toggle_view_desktop">MERN</a></li>
                            <li>
                                <a className="dropdownButton navlink">Java</a>
                                <ul className="dropdown">
                                    <li><a href="https://www.javatpoint.com/what-is-core-java">Core Java</a></li>
                                    <li><a href="https://www.javatpoint.com/what-is-advance-java">Advance Java</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className='registration'>
                        <Link to="/registration">Registration</Link>
                    </li>
                    <li>
                        <Link to="/gallery">Gallery</Link>    
                    </li>
                        <li><Link to="/contact">Contact us</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;