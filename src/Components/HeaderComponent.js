const Title = () => (
    <img className="title" src="https://tse1.mm.bing.net/th?id=OIP.PkyTl5Ca-bbWNr3daKkkXQHaHb&pid=Api&P=0" alt = "Thinandi" />
)

const HeaderComponent = () => {
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderComponent;