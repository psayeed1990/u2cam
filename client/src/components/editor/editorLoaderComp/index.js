import styles from './EditorLoaderComp.module.css';

const EditorLoaderComp = () => {
  return (
    <img
      src="/images/icons/loader.svg"
      width="100"
      className={styles.loadingImg}
    />
  );
};

export default EditorLoaderComp;
