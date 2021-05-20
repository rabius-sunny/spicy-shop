import { useState } from 'react'
import { Link } from 'react-router-dom'
import classes from './navbar.module.css'

const Navbar = () => {

    const [navColor, setNavColor] = useState(false)
    const changeBackground = () => {
        window.scrollY >= 80 ? setNavColor(true) : setNavColor(false)
    }
    window.addEventListener('scroll', changeBackground)

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light sticky-top" id={navColor ? 'colored' : 'transparent'}>
                <div className="container-fluid">
                    <a href="/" className={`navbar-brand ${classes.myBrand}`}>Spicy Shop</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className={`nav-link active ${classes.myLink}`} aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className={`nav-link ${classes.myLink}`}>Hungry Dashboard</a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className={`nav-link ${classes.myLink}`}>Spicy Blogs</a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className={`nav-link ${classes.myLink}`}>Contact Us</a>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className={`nav-link ${classes.myLink}`}>Hot Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
