import React from 'react'
import styles from '../styles/DragnDropImage.module.css'
import { Draggable } from 'react-beautiful-dnd';

const DragnDropImage = ({ src, id, index }) => {
    return (
        <Draggable draggableId={id} index={index}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{ ...provided.draggableProps.style, width: 'min-content', display: 'flex' }}
                >
                    <div className={styles.wrapper}>
                        <img src={src} className={styles.image} />
                    </div>
                </div>
            )}
        </Draggable>
    )
}

export default DragnDropImage