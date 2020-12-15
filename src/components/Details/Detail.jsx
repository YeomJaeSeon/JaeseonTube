import React from 'react';
import styles from './Detail.module.css';

const Detail = ({ video, video: { snippet } }) => {
  return (
    <section className={styles.container}>
      <iframe
        id="player"
        type="text/html"
        width="100%"
        height="450"
        src={`http://www.youtube.com/embed/${video.id}`}
        frameBorder="0"
        className={styles.iframe}
      ></iframe>
      <h2>{snippet.title}</h2>
      <pre className={styles.des}>{snippet.description}</pre>
    </section>
  );
};

export default Detail;
