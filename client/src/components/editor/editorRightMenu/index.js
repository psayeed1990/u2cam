import { useEffect } from 'react';
import add from '../../../utils/editOptions/add';
import deleteDom from '../../../utils/editOptions/deleteDom';
import editDom from '../../../utils/editOptions/editDom';
import innerDoc from '../../../utils/innerDocFunction';
import styles from './EditorRightMenu.module.css';

const EditorRightMenu = ({ setRightMenu }) => {
  useEffect(() => {
    const doc = innerDoc();

    //check if right menu exist
    if (doc.getElementById('delete-w453')) {
      const addButton = doc.getElementById('add-w453');
      addButton.addEventListener('click', add);

      //edit
      const editButon = doc.getElementById('edit-w453');
      editButon.addEventListener('click', editDom);

      //delete
      const deleteButon = doc.getElementById('delete-w453');
      deleteButon.addEventListener('click', deleteDom);
    }
  }, []);

  const closeFunction = (e) => {
    e.preventDefault();
    setRightMenu(false);
  };

  return (
    <ul className="editor-options-wp-converter-78235">
      <li id="add-w453">Add</li>
      <li id="edit-w453">Edit</li>
      <li id="move-w453">Move</li>
      <li id="design-w453">design</li>
      <li id="delete-w453">Delete</li>
      <li id="close-w453" onClick={closeFunction}>
        Close
      </li>
    </ul>
  );
};

export default EditorRightMenu;
