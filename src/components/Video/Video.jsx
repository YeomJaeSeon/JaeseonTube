import React, { memo } from 'react';
import styles from './Video.module.css';

const Video = memo(
  ({ video, video: { snippet }, handleClick, displayType }) => {
    const onClick = () => {
      handleClick(video);
    };
    const type = displayType === 'list' ? styles.list : styles.grid;
    return (
      <li className={`${styles.container} ${type}`}>
        <div className={styles.video} onClick={onClick}>
          <img
            className={styles.thumbnail}
            src={snippet.thumbnails.medium.url}
            alt="video"
          />
          <span className={styles.metadata}>
            <p className={styles.title}>{snippet.title}</p>
            <p className={styles.channelTitle}>{snippet.channelTitle}</p>
          </span>
        </div>
      </li>
    );
  }
);

export default Video;
