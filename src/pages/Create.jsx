import React, { useState } from 'react'
import styles from '../styles/Create.module.css'

const Create = () => {
    const [selectedImages, setSelectedImages] = useState([]); //store image src

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
                    <input id='images' style={{ display: 'none' }} multiple type='file' onChange={(event) => {
                        console.log(event.target.files[0]);
                        console.log(event.target.files);
                        setSelectedImages([...selectedImages, ...event.target.files]);
                    }} />
                    <label for="images" className={styles.selectImages}>Select Images</label>
                    {selectedImages.length > 0 &&
                        <div className={styles.imagesContainer}>
                            {selectedImages.map((imageSrc) =>
                                <img className={styles.uploadedImage} alt="not found" src={URL.createObjectURL(imageSrc)} />
                            )}
                        </div>}
                </div>
            </div>
            <button className={styles.createButton}>
                Create Template
            </button>
        </div>
    )
}

export default Create