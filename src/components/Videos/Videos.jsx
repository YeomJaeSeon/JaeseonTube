import React from 'react';
import Video from '../Video/Video';
import styles from './Videos.module.css';

const Videos = ({ videos, handleClick, displayType }) => {
  return (
    <ul className={styles.videos}>
      {videos.map((video) => {
        return (
          <Video
            key={video.id}
            video={video}
            handleClick={handleClick}
            displayType={displayType}
          ></Video>
        );
      })}
    </ul>
  );
};

export default Videos;
