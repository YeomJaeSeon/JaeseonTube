import React, { useRef } from 'react';
import styles from './Header.module.css';

const Header = ({ onSearch, goHome }) => {
  const inputRef = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    onSearch(value);
    inputRef.current.value = '';
    inputRef.current.focus();
  };
  const writeForSearch = () => {
    // const value = inputRef.current.value;
    // if(value){}
  };
  return (
    <header className={styles.header}>
      <section className={styles.youtube} onClick={goHome}>
        <img className={styles.logo} src="/images/logo.png" alt="youtube" />
        <h1 className={styles.title}>YouTube</h1>
      </section>
      <form onSubmit={onSubmit} className={styles.form}>
        <input
          ref={inputRef}
          type="text"
          className={styles.input}
          onChange={writeForSearch}
        />
        <section className={styles.right}>
          <span className={styles.x}>x</span>
          <button className={styles.button}>
            <img
              className={styles.button_img}
              src="/images/search.png"
              alt="search"
            />
          </button>
        </section>
      </form>
    </header>
  );
};

export default Header;
