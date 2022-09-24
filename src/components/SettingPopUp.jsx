import React from 'react'
import styles from '../styles/SettingPopUp.module.css'
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const SettingPopUp = ({onClose}) => {
    const colors = [
        '#ff7f7f',
        '#ffbf7f',
        '#ffdf7f',
        '#ffff7f',
        '#bfff7f',
        '#7fff7f',
        '#7fffff',
        '#7fbfff',
        '#7f7fff',
        '#ff7fff',
        '#bf7fbf',
        '#858585',
        '#cfcfcf'
    ];

    const defaultSetting = useSelector(state => state.setting.setting);

    const [labelText, setLabelText] = useState(defaultSetting.label);
    const [selectedColor, setSelectedColor] = useState(defaultSetting.labelColor);
    
    return (
        <div className={styles.wrapper}>
            <div className={styles.panel}>
                <CloseIcon className={styles.closeIcon} onClick={onClose}/>
                <h2 className={styles.text}>Choose a Label Background Color:</h2>
                <div className={styles.colorContainer}>
                    {colors.map(color => 
                        <div
                            className={styles.color}
                            style={{backgroundColor: color, border: selectedColor === color ? '2px solid black' : 'none'}}
                            onClick={()=>{setSelectedColor(color)}}
                        />
                    )}
                </div>
                <h2 className={styles.text}>Edit Label Text Below:</h2>
                <input className={styles.textField} value={labelText}/>
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