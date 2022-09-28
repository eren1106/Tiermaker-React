import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Home.module.css';

const Home = () => {
  const navigate = useNavigate();
  function toCreate(){
    console.log(process.env.PUBLIC_URL);
    navigate('create');
  }
  return (
    <div className={styles.wrapper}>
      <img className={styles.logoImage} src={process.env.PUBLIC_URL + '/images/tiermaker_logo_transparent.png'} alt=""/>
      <button className={styles.createButton} onClick={toCreate}>Create New Template</button>
    </div>
  )
}

export default Home