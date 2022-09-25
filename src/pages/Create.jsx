import React, { useState } from 'react'
import styles from '../styles/Create.module.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setImages } from '../redux/actions/imageAction'
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import { setRows } from '../redux/actions/rowsAction';

const Create = () => {
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
        dispatch(setImages(selectedImages));

        const newStateRows = rows.map(row => {
            if (row.id === 'container') {
              return { ...row, items: selectedImages };
            }
            return row;
          });
        dispatch(setRows(newStateRows)); //insert selected images to row with id 'container'
    }

    function navigateToTemplate() {
        setImagesToStore();
        navigate('/template');
        console.log(selectedImages);
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.inputContainer}>
                <h2 className={styles.labelInput}>Title of template:</h2>
                <input className={styles.textField} />
            </div>
            <div className={styles.inputContainer}>
                <h2 className={styles.labelInput}>Description of template:</h2>
                <textarea className={styles.textField} rows='3' />
            </div>
            <div className={styles.inputContainer}>
                <h2 className={styles.labelInput}>Upload a set of images for the Tier List template:</h2>
                <div className={styles.uploadImagesSection}>
                    <input id='images' style={{ display: 'none' }} multiple type='file' onChange={handleInputChange} />
                    <label for="images" className={styles.selectImages}>Select Images</label>
                    {selectedImages.length > 0 &&
                        <div className={styles.imagesContainer}>
                            {selectedImages.map((image) =>
                                <img className={styles.uploadedImage} alt="not found" src={image.src} key={image.id} />
                            )}
                        </div>}
                </div>
            </div>
            <button className={styles.createButton} onClick={navigateToTemplate}>
                Create Template
            </button>
        </div>
    )
}

export default Create