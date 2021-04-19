import { useEffect } from 'react';
import add from '../../../utils/editOptions/add';
import deleteDom from '../../../utils/editOptions/deleteDom';
import editDom from '../../../utils/editOptions/editDom';
import hideEditorOptions from '../../../utils/eventFunctions/hideEditorOptions';
import removeEditorBorder from '../../../utils/eventFunctions/removeEditorOptions';
import innerDoc from '../../../utils/innerDocFunction';
import styles from './EditorRightMenu.module.css';

const EditorRightMenu = ({ setRightMenu }) => {
  const doc = innerDoc();
  const selectedElement = doc.getElementsByClassName('editor-border')[0];

  const duplicateFunction = (e) => {
    e.preventDefault();
    const newContent = selectedElement.cloneNode(true);

    newContent.addEventListener('mouseover', (e) => {
      e.currentTarget.classList.add('editor-border');
    });
    newContent.addEventListener('mouseleave', (e) => {
      e.currentTarget.classList.remove('editor-border');
    });

    //add event listener to newly added content
    newContent.addEventListener('click', hideEditorOptions);

    if (doc.addEventListener) {
      newContent.addEventListener(
        'contextmenu',
        (e) => {
          e.preventDefault();
          window.event.returnValue = false;
          const elm = e.currentTarget;

          // remove all the effects added by this functions before starting again
          removeEditorBorder();

          //Now start adding all the functions to the right click
          //add editor class to the one
          elm.classList.add('editor-border');
          setRightMenu(true);
        },
        false
      );
    } else {
      newContent.attachEvent('oncontextmenu', (e) => {
        e.preventDefault();
        window.event.returnValue = false;
        const elm = e.currentTarget;

        // remove all the effects added by this functions before starting again
        removeEditorBorder();

        //Now start adding all the functions to the right click
        //add editor class to the one
        elm.classList.add('editor-border');
        setRightMenu(true);
      });
    }
    selectedElement.parentNode.appendChild(newContent);
    setRightMenu(false);
  };

  const deleteFunction = (e) => {
    e.preventDefault();
    selectedElement.remove();
    setRightMenu(false);
  };

  const closeFunction = (e) => {
    e.preventDefault();
    setRightMenu(false);
  };

  return (
    <ul className="editor-options-wp-converter-78235">
      <li id="add-w453">Add</li>
      <li id="duplicate-w453" onClick={duplicateFunction}>
        Duplicate
      </li>
      <li id="edit-w453">Edit</li>
      <li id="move-w453">Move</li>
      <li id="design-w453">design</li>
      <li id="delete-w453" onClick={deleteFunction}>
        Delete
      </li>
      <li id="close-w453" onClick={closeFunction}>
        Close
      </li>
    </ul>
  );
};

export default EditorRightMenu;
