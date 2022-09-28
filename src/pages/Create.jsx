import React, { useState } from 'react'
import styles from '../styles/Create.module.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import { setRows } from '../redux/actions/rowsAction';
import { setTitleDescription } from '../redux/actions/titleDescriptionAction';

const Create = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    
    function handleChangeTitle(e){
        setTitle(e.target.value);
    }

    function handleChangeDescription(e){
        setDescription(e.target.value);
    }

    function setTitleDescriptionToStore(){
        dispatch(setTitleDescription({
            title: title,
            description: description,
        }))
    }

    const [selectedImages, setSelectedImages] = useState([]); //store image src
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleInputChange(e) {
        const newImages = [...e.target.files].map((file) => {
            return { id: uuidv4(), src: URL.createObjectURL(file) }
        });
        setSelectedImages([...selectedImages, ...newImages]);
    }

    const rows = useSelector(state => state.rows.rows); //initial rows
    function setImagesToStore() {
        const newStateRows = rows.map(row => {
            if (row.id === 'container') {
              return { ...row, items: selectedImages }; //insert selected images to row with id 'container'
            }
            return {...row, items: []}; //other row will be empty
          });
        dispatch(setRows(newStateRows)); 
    }

    function handleCreate() {
        setImagesToStore();
        setTitleDescriptionToStore();
        navigate('/template');
        console.log(selectedImages);
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.inputContainer}>
                <h2 className={styles.labelInput}>Title of template:</h2>
                <input className={styles.textField} value={title} onChange={handleChangeTitle}/>
            </div>
            <div className={styles.inputContainer}>
                <h2 className={styles.labelInput}>Description of template:</h2>
                <textarea className={styles.textField} rows='3' value={description} onChange={handleChangeDescription}/>
            </div>
            <div className={styles.inputContainer}>
                <h2 className={styles.labelInput}>Upload a set of images for the Tier List template:</h2>
                <div className={styles.uploadImagesSection}>
                    <input id='images' style={{ display: 'none' }} multiple type='file' onChange={handleInputChange} />
                    <label htmlFor="images" className={styles.selectImages}>Select Images</label>
                    {selectedImages.length > 0 &&
                        <div className={styles.imagesContainer}>
                            {selectedImages.map((image) =>
                                <img className={styles.uploadedImage} alt="not found" src={image.src} key={image.id} />
                            )}
                        </div>}
                </div>
            </div>
            <button className={styles.createButton} onClick={handleCreate}>
                Create Template
            </button>
        </div>
    )
}

export default Create