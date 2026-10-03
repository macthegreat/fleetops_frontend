import './Navbar.css'
import { useState } from 'react';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
        setOpenMenu(prevState => !prevState);
    };
    return (
        <header className="navbar">
            <div className="navbar-container">
                <h2 className='logo'>FleetOps</h2>
                <nav className="nav-links">
                    <a href="#">Features</a>
                    <a href="#">Solutions</a>
                    <a href="#">Pricing</a>
                </nav>
                <div className="nav-actions">
                    <button className="login-btn">Login</button>
                    <button className="nav-cta">Get Started</button>
                </div>
                <button className="hamburger" onClick={toggleMenu}>
                    ☰
                </button>
                {openMenu && (
                    <div className="mobile-menu">
                        <a href="#">Features</a>
                        <a href="#">Solutions</a>
                        <a href="#">Pricing</a>
                        <button className="login-btn">Login</button>
                        <button className="nav-cta">Get Started</button>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Navbar
