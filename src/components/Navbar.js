import { Link } from "react-router-dom"

function Navbar (){
    return (
        <nav className="navbar">
            <Link to="/sunsign">Sun Sign</Link>
            <Link to="/about">About</Link>
            <Link to="/compatibility">Compatibility</Link>
            <Link to="/reviews">Reviews</Link>
            <button id="loginBtn" >LogIn</button>
        </nav>
    )

}
export default Navbar;
