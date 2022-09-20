import React from 'react'
import DragnDropImage from './DragnDropImage'
import { v4 as uuidv4 } from 'uuid';
import { Droppable } from 'react-beautiful-dnd';
import styles from '../styles/ImagesContainer.module.css';

const ImagesContainer = ({ items }) => {
  return (
    <div className={styles.wrapper}>
      <Droppable droppableId='container' direction='horizontal'>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            style={{ backgroundColor: 'transparent', display: 'flex' }}
            {...provided.droppableProps}
          >
            {items.map((item, index) => <DragnDropImage src={item.src} id={item.id} index={index} key={item.id} />)}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}

export default ImagesContainer