import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Videos from './components/Videos/Videos';
import styles from './App.module.css';
import Detail from './components/Details/Detail';

const App = ({ youtube }) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideos, setSelectedVideos] = useState(null);

  useEffect(() => {
    youtube.mostPopular().then((result) => setVideos(result));
  }, []);
  const search = (query) => {
    youtube.search(query).then((result) => {
      setVideos(result);
      setSelectedVideos(null);
    });
  };
  const click = (video) => {
    setSelectedVideos(video);
  };
  const goHome = () => {
    setSelectedVideos(null);
  };
  return (
    <section className={styles.container}>
      <section className={styles.box1}>
        <Header onSearch={search} goHome={goHome}></Header>
      </section>
      <section className={styles.box2}>
        {selectedVideos && (
          <section className={styles.detail}>
            <Detail video={selectedVideos}></Detail>
          </section>
        )}
        <section className={styles.list}>
          <Videos
            videos={videos}
            handleClick={click}
            displayType={selectedVideos ? 'list' : 'grid'}
          ></Videos>
        </section>
      </section>
    </section>
  );
};

export default App;
