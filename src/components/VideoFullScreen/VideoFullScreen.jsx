import styles from './VideoFullScreen.module.scss';

const VideoFullScreen = ({href}) => {
  return (
    <video className={styles.video} preload='auto' autoPlay={true} loop playsinline muted={true}>
      <source src={href} type="video/mp4"/>
    </video>
  );
};

export { VideoFullScreen };