import React, { useRef, memo } from 'react';
import styles from './Header.module.css';

const Header = memo(({ onSearch, goHome }) => {
  const inputRef = useRef();
  const removeBtnRef = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    onSearch(value);
    removeAll();
  };
  const writeForSearch = () => {
    const value = inputRef.current.value;
    const removeBtn = removeBtnRef.current;
    if (value) removeBtn.style.visibility = 'visible';
    else removeBtn.style.visibility = 'hidden';
  };
  const removeAll = () => {
    inputRef.current.value = '';
    inputRef.current.focus();
    removeBtnRef.current.style.visibility = 'hidden';
  };
  return (
    <header className={styles.header}>
      <section className={styles.youtube} onClick={goHome}>
        <img className={styles.logo} src="./images/logo.png" alt="youtube" />
        <h1 className={styles.title}>JsTube</h1>
      </section>
      <form onSubmit={onSubmit} className={styles.form}>
        <input
          ref={inputRef}
          type="text"
          className={styles.input}
          onChange={writeForSearch}
        />
        <section className={styles.right}>
          <button
            className={styles.button0}
            ref={removeBtnRef}
            type="button"
            onClick={removeAll}
          >
            x
          </button>
          <button className={styles.button}>
            <img
              className={styles.button_img}
              src="./images/search.png"
              alt="search"
            />
          </button>
        </section>
      </form>
    </header>
  );
});

export default Header;
