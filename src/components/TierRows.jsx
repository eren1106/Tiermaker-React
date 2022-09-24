import React from 'react'
import styles from '../styles/TierRows.module.css'
import SettingsIcon from '@mui/icons-material/Settings';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DragnDropImage from './DragnDropImage';
import { Droppable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { setSetting } from '../redux/actions/settingAction';

const TierRows = ({ label, labelColor, id, items, onOpenSetting }) => {
    const dispatch = useDispatch();

    function handleOpenSetting(){
        dispatch(setSetting({
            label,
            labelColor
        }));
        onOpenSetting();
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.labelContainer} style={{ backgroundColor: labelColor }}>
                <h2>{label}</h2>
            </div>
            <div className={styles.imagesContainer}>
                <Droppable droppableId={id} direction='horizontal'>
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            style={{ backgroundColor: snapshot.isDraggingOver ? 'rgb(40, 40, 40)' : 'rgb(32, 32, 32)', display: 'flex' }}
                            {...provided.droppableProps}
                        >
                            {items.map((item, index) => <DragnDropImage src={item.src} id={item.id} index={index} key={item.id} />)}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>

            <div className={styles.iconContainer}>
                <div className={styles.settingContainer} onClick={handleOpenSetting}>
                    <SettingsIcon fontSize='large' className={styles.settingIcon} />
                </div>
                <div className={styles.upAndDownContainer}>
                    <div className={styles.upAndDownIconContainer}>
                        <KeyboardArrowUpIcon fontSize='large' className={styles.upAndDownIcon} />
                    </div>
                    <div className={styles.upAndDownIconContainer}>
                        <KeyboardArrowDownIcon fontSize='large' className={styles.upAndDownIcon} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TierRows