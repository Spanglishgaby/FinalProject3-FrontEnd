
import { Link } from "react-router-dom";
import videoBg from '../assets/test.mp4'


function LandingPage () {

    return (
    
    <div>
        
        <div className='landing'>
            <div className="overlay"></div>
            <video src={videoBg} autoPlay loop muted />
                <Link to="/mainpage">
                <button class="ui orange button large" id="start">Get Started!</button>
                </Link>
        </div>
    </div>

    )}

export default LandingPage



