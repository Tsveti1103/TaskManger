import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';
import { useAuthContext } from "../../contexts/AuthContext";

export default function Navigation() {
    const { user } = useAuthContext();
    const [showNav, setShowNav] = useState(true)
    function showNavbar() {
        setShowNav(!showNav)
    }
    function onLinkClick() {
        setShowNav(true)
    }
    return (
        <header className={styles.header}>

            <nav className={styles.navbar}>
                    <Link className={styles.logo} to="/" onClick={onLinkClick}>Tasks</Link>
                <ul role="list" className={`${styles.links} ${showNav ? styles.active : ""}`}>
                    {user ?
                        <>
                            <li><Link to="/profile" onClick={onLinkClick}>Profile</Link></li>
                            <li><Link onClick={onLinkClick} to="/logout">Logout</Link></li>
                        </>
                        :
                            <>
                                <li><Link onClick={onLinkClick} to="/login">Login</Link></li>
                                <li><Link onClick={onLinkClick} to="/register">Register</Link></li>
                            </>
                    }
                </ul>
                <button onClick={showNavbar} className={styles.toggle}>
                    {showNav ?
                        <i className="fa-solid fa-bars" ></i>
                        :
                        <i className="fa-solid fa-xmark"></i>
                    }
                </button>
            </nav>
        </header>
    );
}
