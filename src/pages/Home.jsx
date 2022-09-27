import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Home.module.css';

const Home = () => {
  const navigate = useNavigate();
  function toCreate(){
    navigate('create');
  }
  return (
    <div className={styles.wrapper}>
      <img className={styles.logoImage} src='images/tiermaker_logo_transparent.png' alt=""/>
      <button className={styles.createButton} onClick={toCreate}>Create New Template</button>
    </div>
  )
}

export default Home