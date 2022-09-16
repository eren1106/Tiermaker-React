import React, { useState } from 'react'
import RowsContainer from '../components/RowsContainer'
import styles from '../styles/Template.module.css'
import { DragDropContext } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';

const Template = () => {
  const initialItems = [
    {
      id: uuidv4(),
      src: 'images/unnamed.png',
    },
  ]

  const initialRows = [
    {
      id: uuidv4(),
      label: 'S',
      labelColor: 'violet',
      items: initialItems
    },
    {
      id: uuidv4(),
      label: 'A',
      labelColor: 'orange',
      items: []
    },
    {
      id: uuidv4(),
      label: 'B',
      labelColor: 'yellow',
      items: []
    },
    {
      id: uuidv4(),
      label: 'C',
      labelColor: 'lightgreen',
      items: []
    },
    {
      id: uuidv4(),
      label: 'F',
      labelColor: 'lightblue',
      items: []
    },
  ]

  const onDragEnd = (result, rows, setRows) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceRow = rows.find(row => { return row.id === source.droppableId });
      const destRow = rows.find(row => { return row.id === destination.droppableId });
      const sourceItems = [...sourceRow.items];
      const destItems = [...destRow.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);

      const newStateRow = rows.map(row => {
        if (row.id === source.droppableId) {
          return { ...row, items: sourceItems };
        }
        if (row.id === destination.droppableId) {
          return { ...row, items: destItems };
        }
        return row;
      });
      setRows(newStateRow);
    } else {
      const row = rows.find(row => { return row.id === source.droppableId });
      const copiedItems = [...row.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);

      const newStateRow = rows.map(row => {
        if (row.id === source.droppableId) {
          return { ...row, items: copiedItems };
        }
        return row;
      });
      setRows(newStateRow);
    }
  };

  const [rows, setRows] = useState(initialRows);
  return (
    <div className={styles.wrapper}>
      <DragDropContext onDragEnd={result => onDragEnd(result, rows, setRows)}>
        <RowsContainer rows={rows} />
      </DragDropContext>
    </div>
  )
}

export default Template