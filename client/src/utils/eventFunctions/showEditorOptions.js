import add from '../editOptions/add';
import deleteDom from '../editOptions/deleteDom';
import editDom from '../editOptions/editDom';
import innerDoc from '../innerDocFunction';
import removeEditorBorder from './removeEditorOptions';

const showEditorOptions = (e) => {
  //remove editor-border class from each ele except the one
  const doc = innerDoc();

  removeEditorBorder();

  //add editor class to the one
  e.currentTarget.classList.add('editor-border');

  //adding more options
  const options = document.createElement('p');
  options.setAttribute('contenteditable', 'false');
  options.classList.add('editor-options-wp-converter-78235');
  options.innerHTML = `
    <p>
      <span id="add-w453">Add</span><span id="edit-w453">Edit</span><span id="design-w453">design</span><span id="delete-w453">Delete</span>
    </p>

  `;

  //add editor options to all except tooltip
  // const tooltip = doc.getElementById('tooltip-inside-editor');
  // if (e.currentTarget === tooltip) {
  //   return;
  // }

  e.currentTarget.appendChild(options);

  //functions for edit options
  //add
  const addButton = doc.getElementById('add-w453');
  addButton.addEventListener('click', add);

  //edit
  const editButon = doc.getElementById('edit-w453');
  editButon.addEventListener('click', editDom);

  //delete
  const deleteButon = doc.getElementById('delete-w453');
  deleteButon.addEventListener('click', deleteDom);
};

export default showEditorOptions;
