import React from 'react'
import styles from '../styles/SettingPopUp.module.css'
import CloseIcon from '@mui/icons-material/Close';

const SettingPopUp = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.panel}>
                <CloseIcon className={styles.closeIcon} />
                <h2 className={styles.text}>Choose a Label Background Color:</h2>
                {/* <div>Colors</div> */}
                <h2 className={styles.text}>Edit Label Text Below:</h2>
                <input className={styles.textField} />
                <div className={styles.buttonContainer}>
                    <button className={styles.button}>Delete Row</button>
                    <button className={styles.button}>Clear Row Images</button>
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.button}>Add a Row Above</button>
                    <button className={styles.button}>Add a Row Below</button>
                </div>
            </div>
        </div>
    )
}

export default SettingPopUp