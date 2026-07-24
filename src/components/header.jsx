import './header.css'

function Header() {
    return (
        <div className="header-wrapper">
            <img className="logoimg" src="src/assets/logo.png" alt="logo" />
            <input placeholder='Movie name' className="searchbar" />
            <nav className="nav">
                <a href="">Top 20</a>                
                <a href="">Top 100</a>                
            </nav>
        </div>
    )
}

export default Header;