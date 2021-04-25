import innerDoc from '../../../utils/innerDocFunction';
import styles from './DesignPopup.module.css';
const DesignPopup = ({ showDesignPopupSet }) => {
  const doc = innerDoc();
  const selectedElement = doc.getElementsByClassName('editor-border')[0];

  return (
    <div className={styles.designer}>
      <p>
        color: <input type="color" />
      </p>
      <p>Font Family:</p>
      <p>Font Size:</p>
      <p>Font Weight:</p>
      <p>Text Decoration:</p>
      <p>List Style:</p>
      <button>Save</button>
    </div>
  );
};

export default DesignPopup;
