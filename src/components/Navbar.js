import { Link } from "react-router-dom"

function Navbar (){
    return (
        <nav className="navbar">
            <ul class="menuItems">
            <Link to="/" class ="nav-item" >Home</Link>
            <Link to="/sunsign" class ="nav-item">Catalog</Link>
            <Link to="/horoscope" class ="nav-item" >Orders</Link>
            <Link to="/compatibility" class ="nav-item" >Customers</Link>
            <Link to="/reviews" class ="nav-item">Reviews</Link>
            </ul>
        </nav>
    )

}
export default Navbar;
