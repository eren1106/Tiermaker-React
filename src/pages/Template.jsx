import React, { useState } from 'react'
import RowsContainer from '../components/RowsContainer'
import styles from '../styles/Template.module.css'
import { DragDropContext } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';
import ImagesContainer from '../components/ImagesContainer';
import { useSelector } from 'react-redux';
import SettingPopUp from '../components/SettingPopUp';

const Template = () => {
  const images = useSelector((state) => state.images.images); //access store throught useSelector
  console.log(images);

  const initialRows = [
    {
      id: uuidv4(),
      label: 'S',
      labelColor: 'violet',
      items: []
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
    {
      id: 'container',
      label: 'container',
      labelColor: 'container',
      items: images
    }
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

  const [showSetting, setShowSetting] = useState(false);
  function toggleSetting() {
    setShowSetting(!showSetting);
  }

  return (
    <div className={styles.wrapper}>
      {showSetting && <SettingPopUp onClose={toggleSetting}/>}
      <DragDropContext onDragEnd={result => onDragEnd(result, rows, setRows)}>
        <RowsContainer rows={rows.filter(row => row.id !== 'container')} onOpenSetting={toggleSetting}/>
        <ImagesContainer items={rows.find((row) => row.id === 'container').items} />
      </DragDropContext>
    </div>
  )
}

export default Template