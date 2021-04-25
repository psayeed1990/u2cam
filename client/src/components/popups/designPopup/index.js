import { useEffect } from 'react';
import innerDoc from '../../../utils/innerDocFunction';
import styles from './DesignPopup.module.css';
const DesignPopup = ({ showDesignPopupSet, showDesignPopup, setRightMenu }) => {
  const doc = innerDoc();
  const selectedElement = doc.getElementsByClassName('editor-border')[0];

  useEffect(() => {
    if (showDesignPopup) {
      const colorBgInput = document.getElementById('wp364-bg-color');
      const colorTxtInput = document.getElementById('wp364-text-color');
      //set ddefault color

      const bgColor = getComputedStyle(selectedElement).backgroundColor;
      const textColor = getComputedStyle(selectedElement).color;

      const rgb2hex = (rgb) =>
        `#${rgb
          .match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)
          .slice(1)
          .map((n) => parseInt(n, 10).toString(16).padStart(2, '0'))
          .join('')}`;
      console.log(bgColor, textColor);
      if (bgColor !== 'rgba(0, 0, 0, 0)') {
        colorBgInput.value = rgb2hex(bgColor);
      }

      if (textColor !== 'rgba(0, 0, 0, 0)') {
        colorTxtInput.value = rgb2hex(textColor);
      }

      const colorIds = [colorBgInput, colorTxtInput];
      colorIds.forEach((ids) => {
        ids.addEventListener('input', () => {
          ids.style.backgroundColor = ids.value;
        });
      });
    }
  }, [showDesignPopup]);

  const closeFunction = (e) => {
    e.preventDefault();
    showDesignPopupSet(false);
    setRightMenu(false);
  };

  const saveDesign = (e) => {
    e.preventDefault();
    selectedElement.style.backgroundColor = document.getElementById(
      'wp364-bg-color'
    ).value;
    selectedElement.style.color = document.getElementById(
      'wp364-text-color'
    ).value;
    showDesignPopupSet(false);
    setRightMenu(false);
  };

  return (
    <div className={styles.designer}>
      <p>
        Background color:
        <input type="color" id="wp364-bg-color" className={styles.colorInput} />
      </p>
      <p>
        Text color:
        <input
          type="color"
          id="wp364-text-color"
          className={styles.colorInput}
        />
      </p>
      <p>Font Family:</p>
      <p>Font Size:</p>
      <p>Font Weight:</p>
      <p>Text Decoration:</p>
      <p>List Style:</p>
      <button onClick={saveDesign}>Save</button>
      <button onClick={closeFunction}>Close</button>
    </div>
  );
};

export default DesignPopup;
