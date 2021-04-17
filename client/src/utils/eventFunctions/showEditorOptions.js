import add from '../editOptions/add';
import deleteDom from '../editOptions/deleteDom';
import editDom from '../editOptions/editDom';
import innerDoc from '../innerDocFunction';
import allowDrop from './allowDrop';
import removeEditorBorder from './removeEditorOptions';

const showEditorOptions = (e) => {
  const elm = e.currentTarget;
  //remove editor-border class from each ele except the one
  const doc = innerDoc();

  removeEditorBorder();

  //add editor class to the one
  elm.classList.add('editor-border');

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

  elm.appendChild(options);

  //stop drag and drop options for all
  const allDraggable = doc.getElementsByClassName('draggable-wp364');
  for (var i = 0; i < allDraggable.length; i++) {
    allDraggable[i].removeAttribute('draggable');
    allDraggable[i].classList.remove('draggable-wp364');
  }

  //start drag and drop options
  //key press to grab
  elm.addEventListener('keypress', (e) => {
    e.preventDefault();
    elm.classList.add('draggable-wp364');
    elm.setAttribute('draggable', 'true');
  });
  allowDrop();
  elm.addEventListener('dragstart', (e) => {
    e.preventDefault();
  });

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
