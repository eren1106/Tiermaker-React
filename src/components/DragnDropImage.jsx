import React from 'react'
import styles from '../styles/DragnDropImage.module.css'
import { Draggable } from 'react-beautiful-dnd';

const DragnDropImage = ({ src, id, index }) => {
    const PUBLIC_URL = 'http://localhost:3000/';
    return (
        <Draggable draggableId={id} index={index}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{ ...provided.draggableProps.style }}
                >
                    <div className={styles.wrapper}>
                        <img src={PUBLIC_URL + src} className={styles.image} />
                    </div>
                </div>
            )}
        </Draggable>
    )
}

export default DragnDropImage