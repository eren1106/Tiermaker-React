import React, { useState } from 'react'
import RowsContainer from '../components/RowsContainer'
import styles from '../styles/Template.module.css'
import { DragDropContext } from 'react-beautiful-dnd';
import ImagesContainer from '../components/ImagesContainer';
import { useSelector } from 'react-redux';
import SettingPopUp from '../components/SettingPopUp';
import { useDispatch } from 'react-redux';
import { setRows } from '../redux/actions/rowsAction';
import html2canvas from "html2canvas";

const Template = () => {
  const rows = useSelector(state => state.rows.rows); //access store throught useSelector

  const dispatch = useDispatch();
  function setRowsToStore(e) {
    dispatch(setRows(e));
  }

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

  const [showSetting, setShowSetting] = useState(false);
  function toggleSetting() {
    setShowSetting(!showSetting);
  }

  //download screenshot of tier container
  function handleDownloadPng() {
    const node = document.getElementById("container");

    // useCors to draw image from different origin
    html2canvas(node, { useCORS: true }).then(canvas => {
      let a = document.createElement("a");
      document.body.appendChild(a);
      a.download = "image.png";
      a.href = canvas.toDataURL();
      a.click();
    });
  }

  return (
    <div className={styles.wrapper}>
      {showSetting && <SettingPopUp onClose={toggleSetting} />}
      <div id="container">
        <DragDropContext onDragEnd={result => onDragEnd(result, rows, setRowsToStore)}>
          <RowsContainer rows={rows.filter(row => row.id !== 'container')} onOpenSetting={toggleSetting} />
          <ImagesContainer items={rows.find((row) => row.id === 'container').items} />
        </DragDropContext>
      </div>
      <button onClick={handleDownloadPng}>Download PNG</button>
    </div>
  )
}

export default Template