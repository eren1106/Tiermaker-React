import React from 'react'
import { Link } from 'react-router-dom';
import styles from '../styles/NavBar.module.css';

const NavBar = () => {
    return (
        <div className={styles.wrapper}>
            <div style={{width: 'min-content'}}>
                <Link to="/" className={styles.logo}>
                    <h1>Tiermaker</h1>
                </Link>
            </div>
        </div>
    )
}

export default NavBar