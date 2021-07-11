import './Contact.css'
import { Link } from 'react-router-dom';

const Contact = () => {
    
    return(
        <div classNameName="contacts">
            
            <div className="address">
                <h4>Contact address: Budapest 1022</h4>
                <h4>Street address and number</h4>
            </div>

            <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe width="400" height="300" id="gmap_canvas" 
                    src="https://maps.google.com/maps?q=budapest%20&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" 
                    scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    <a href="https://fmovies2.org">fmovies</a><br>
                </br>
                    <a href="https://www.embedgooglemap.net"></a>
                </div>
            </div>
        
            <div className="message"> 
                <form>
                    <Link to="/contactus" className="link">Contact Us</Link>
                </form>               
            </div>
        </div>
    )
}
export default Contact