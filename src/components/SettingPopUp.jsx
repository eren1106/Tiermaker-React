import React from 'react'
import styles from '../styles/SettingPopUp.module.css'
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addBottomRow, addTopRow, clearRow, deleteRow, setRows } from '../redux/actions/rowsAction';

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

    const rowDataOnSetting = useSelector(state => state.setting.setting);

    const [labelText, setLabelText] = useState(rowDataOnSetting.label);
    const [selectedColor, setSelectedColor] = useState(rowDataOnSetting.labelColor);
    
    const dispatch = useDispatch();
    const rows = useSelector(state => state.rows.rows);
    function handleClickColor(color){
        setSelectedColor(color);
        const newStateRows = rows.map(row => {
            if(row.id === rowDataOnSetting.id){
                return {...row, labelColor: color};
            }
            return row;
        });
        dispatch(setRows(newStateRows));
    }

    function handleChangeLabel(e){
        setLabelText(e.target.value);
        const newStateRows = rows.map(row => {
            if(row.id === rowDataOnSetting.id){
                return {...row, label: e.target.value};
            }
            return row;
        });
        dispatch(setRows(newStateRows));
    }

    function handleDeleteRow(){
        dispatch(clearRow(rowDataOnSetting.id));
        dispatch(deleteRow(rowDataOnSetting.id));
        onClose();
    }

    function handleClearRow(){
        dispatch(clearRow(rowDataOnSetting.id));
        onClose();
    }

    function handleAddTopRow(){
        dispatch(addTopRow(rowDataOnSetting.id));
        onClose();
    }

    function handleAddBottomRow(){
        dispatch(addBottomRow(rowDataOnSetting.id));
        onClose();
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.panel}>
                <CloseIcon className={styles.closeIcon} onClick={onClose}/>
                <h2 className={styles.text}>Choose a Label Background Color:</h2>
                <div className={styles.colorContainer}>
                    {colors.map((color, index) => 
                        <div
                            key={index}
                            className={styles.color}
                            style={{backgroundColor: color, border: selectedColor === color ? '2px solid black' : 'none'}}
                            onClick={()=>{
                                handleClickColor(color);
                            }}
                        />
                    )}
                </div>
                <h2 className={styles.text}>Edit Label Text Below:</h2>
                <input className={styles.textField} value={labelText} onChange={handleChangeLabel}/>
                <div className={styles.buttonContainer}>
                    <button className={styles.button} onClick={handleDeleteRow}>Delete Row</button>
                    <button className={styles.button} onClick={handleClearRow}>Clear Row Images</button>
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.button} onClick={handleAddTopRow}>Add a Row Above</button>
                    <button className={styles.button} onClick={handleAddBottomRow}>Add a Row Below</button>
                </div>
            </div>
        </div>
    )
}

export default SettingPopUp