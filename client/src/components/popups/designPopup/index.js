import { useEffect, useState } from 'react';
import innerDoc from '../../../utils/innerDocFunction';
import styles from './DesignPopup.module.css';
const DesignPopup = ({ showDesignPopupSet, showDesignPopup, setRightMenu }) => {
  const [noChange, noChangeSet] = useState({
    bgcolor: false,
    txtcolor: false,
    bordercolor: false,
  });
  const { bgcolor, txtcolor, bordercolor } = noChange;
  const doc = innerDoc();
  const selectedElement = doc.getElementsByClassName('editor-border')[0];

  useEffect(() => {
    if (showDesignPopup) {
      /***********************************************************
       ***start bg and text color***
       ***********************************************************/
      const colorBgInput = document.getElementById('wp364-bg-color');
      const colorTxtInput = document.getElementById('wp364-text-color');
      const colorBdrInput = document.getElementById('wp364-border-color');
      //set ddefault color

      const bgColor = getComputedStyle(selectedElement).backgroundColor;
      const textColor = getComputedStyle(selectedElement).color;
      const borderColor = getComputedStyle(selectedElement).borderColor;

      const rgb2hex = (rgb) => {
        try {
          return `#${rgb
            .match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)
            .slice(1)
            .map((n) => parseInt(n, 10).toString(16).padStart(2, '0'))
            .join('')}`;
        } catch (err) {
          return false;
        }
      };

      console.log(bgColor, textColor, borderColor);
      //hex convert bg color
      if (rgb2hex(borderColor)) {
        colorBdrInput.value = rgb2hex(borderColor);
      } else {
        noChangeSet({ ...noChange, bordercolor: true });
      }

      //hex convert border color
      if (rgb2hex(bgColor)) {
        colorBgInput.value = rgb2hex(bgColor);
      } else {
        noChangeSet({ ...noChange, bgcolor: true });
      }

      //hex convert text color
      if (rgb2hex(textColor)) {
        colorTxtInput.value = rgb2hex(textColor);
      } else {
        noChangeSet({ ...noChange, txtcolor: true });
      }

      // input handler bg color
      colorBgInput.addEventListener('input', () => {
        colorBgInput.style.backgroundColor = colorBgInput.value;

        if (txtcolor && bordercolor) {
          noChangeSet({
            ...noChange,
            txtcolor: true,
            bgcolor: false,
            bordercolor: true,
          });
        } else if (!txtcolor && bordercolor) {
          noChangeSet({
            ...noChange,
            txtcolor: false,
            bgcolor: false,
            bordercolor: true,
          });
        } else if (txtcolor && !bordercolor) {
          noChangeSet({
            ...noChange,
            txtcolor: true,
            bgcolor: false,
            bordercolor: false,
          });
        } else {
          noChangeSet({
            ...noChange,
            txtcolor: false,
            bgcolor: false,
            bordercolor: false,
          });
        }
      });

      //input handler text color
      colorTxtInput.addEventListener('input', () => {
        colorTxtInput.style.backgroundColor = colorTxtInput.value;
        if (bgcolor && bordercolor) {
          noChangeSet({
            ...noChange,
            txtcolor: false,
            bgcolor: true,
            bordercolor: true,
          });
        } else if (!bgcolor && bordercolor) {
          noChangeSet({
            ...noChange,
            txtcolor: false,
            bgcolor: false,
            bordercolor: true,
          });
        } else if (bgcolor && !bordercolor) {
          noChangeSet({
            ...noChange,
            txtcolor: false,
            bgcolor: true,
            bordercolor: false,
          });
        } else {
          noChangeSet({
            ...noChange,
            txtcolor: false,
            bgcolor: false,
            bordercolor: false,
          });
        }
      });

      //input handler border color
      colorTxtInput.addEventListener('input', () => {
        colorTxtInput.style.backgroundColor = colorTxtInput.value;
        if (bgcolor && txtcolor) {
          noChangeSet({
            ...noChange,
            txtcolor: true,
            bgcolor: true,
            bordercolor: false,
          });
        } else if (!bgcolor && txtcolor) {
          noChangeSet({
            ...noChange,
            txtcolor: true,
            bgcolor: false,
            bordercolor: false,
          });
        } else if (bgcolor && !txtcolor) {
          noChangeSet({
            ...noChange,
            txtcolor: false,
            bgcolor: true,
            bordercolor: false,
          });
        } else {
          noChangeSet({
            ...noChange,
            txtcolor: false,
            bgcolor: false,
            bordercolor: false,
          });
        }
      });

      /***********************************************************
       ***end bg and text color***
       ***********************************************************/

      /***********************************************************
       ***start font families how***
       ***********************************************************/

      /***********************************************************
       ***end font families show***
       ***********************************************************/
    }
  }, [showDesignPopup]);

  const closeFunction = (e) => {
    e.preventDefault();
    showDesignPopupSet(false);
    setRightMenu(false);
  };

  const saveDesign = (e) => {
    e.preventDefault();
    console.log(bgcolor, txtcolor);
    if (!bgcolor) {
      selectedElement.style.backgroundColor = document.getElementById(
        'wp364-bg-color'
      ).value;
    }

    if (!txtcolor) {
      selectedElement.style.color = document.getElementById(
        'wp364-text-color'
      ).value;
    }

    if (!bordercolor) {
      selectedElement.style.borderColor = document.getElementById(
        'wp364-border-color'
      ).value;
    }

    noChangeSet({ bordercolor: false, txtcolor: false, bordercolor: false });
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
        Font color:
        <input
          type="color"
          id="wp364-text-color"
          className={styles.colorInput}
        />
      </p>
      <p>Font Family:</p>
      <p>
        Font Size: <input type="number" />
        px
      </p>
      <p>
        Font Weight:
        <select>
          <option>thin</option>
          <option>normal</option>
          <option>bold</option>
          <option>bolder</option>
          <option>100</option>
          <option>200</option>
          <option>300</option>
          <option>400</option>
          <option>500</option>
          <option>600</option>
          <option>700</option>
          <option>800</option>
          <option>900</option>
        </select>
      </p>
      <p>
        border color:
        <input
          type="color"
          id="wp364-border-color"
          className={styles.colorInput}
        />
      </p>
      <p>
        Text Decoration:
        <select>
          <option>none</option>
          <option>overline</option>
          <option>line-through</option>
          <option>underline</option>
          <option>overline underline</option>
          <option>initial</option>
          <option>inherit</option>
        </select>
      </p>
      <p>
        List Style:
        <select>
          <option>circle</option>
          <option>disc</option>
          <option>square</option>
          <option>none</option>
          <option>inherit</option>
          <option>decimal</option>
          <option>decimal-leading-zero</option>
          <option>upper-roman</option>
          <option>lower-roman</option>
        </select>
      </p>
      <button onClick={saveDesign}>Save</button>
      <button onClick={closeFunction}>Close</button>
    </div>
  );
};

export default DesignPopup;
