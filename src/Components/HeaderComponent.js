import { Link } from "react-router-dom";

const Title = () => (
    <img className="title" src="https://tse1.mm.bing.net/th?id=OIP.PkyTl5Ca-bbWNr3daKkkXQHaHb&pid=Api&P=0" alt = "Thinandi" />
)

const HeaderComponent = () => {
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <Link to="/"> <li>Home</li> </Link>
                    <Link to="/about"> <li>About</li> </Link>
                    <Link to="/contact"> <li>Contact</li> </Link>
                    <Link to="/cart"> <li>Cart</li> </Link>
                </ul>
            </div>
        </div>
    )
}

export default HeaderComponent;