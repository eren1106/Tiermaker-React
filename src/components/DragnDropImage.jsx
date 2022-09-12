import React from 'react'
import styles from '../styles/DragnDropImage.module.css'

const DragnDropImage = () => {
    const PUBLIC_URL = 'http://localhost:3000/';
    return (
        <div className={styles.wrapper}>
            <img src={PUBLIC_URL + "images/unnamed.png"} className={styles.image} />
        </div>
    )
}

export default DragnDropImage