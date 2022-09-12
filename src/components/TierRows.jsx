import React from 'react'
import styles from '../styles/TierRows.module.css'
import SettingsIcon from '@mui/icons-material/Settings';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DragnDropImage from './DragnDropImage';

const TierRows = ({label, labelColor}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.labelContainer} style={{backgroundColor: labelColor}}>
                <h2>{label}</h2>
            </div>
            <div className={styles.imagesContainer}>
                <DragnDropImage />
            </div>
            <div className={styles.settingContainer}>
                <SettingsIcon fontSize='large' className={styles.settingIcon}/>
            </div>
            <div className={styles.upAndDownContainer}>
                <KeyboardArrowUpIcon fontSize='large' className={styles.upAndDownIcon}/>
                <KeyboardArrowDownIcon fontSize='large' className={styles.upAndDownIcon}/>
            </div>
        </div>
    )
}

export default TierRows