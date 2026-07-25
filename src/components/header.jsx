import './header.css'

function Header({ searchQuery, setSearchQuery }) {
    return (
        <div className="header-wrapper">
            <img className="logoimg" src="src/assets/logo.png" alt="logo" />
            <input 
                type="text"
                placeholder='Movie name' 
                className="searchbar" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <nav className="nav">
                <a href="">Top 20</a>                
                <a href="">Top 100</a>                
            </nav>
        </div>
    )
}

export default Header;