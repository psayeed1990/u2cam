import add from '../editOptions/add';
import deleteDom from '../editOptions/deleteDom';
import editDom from '../editOptions/editDom';
import innerDoc from '../innerDocFunction';
import allowDrop from './allowDrop';
import removeEditorBorder from './removeEditorOptions';

const showEditorOptions = (elm) => {
  //remove editor-border class from each ele except the one
  const doc = innerDoc();

  removeEditorBorder();

  //stop drag and drop options for all
  const allDraggable = doc.getElementsByClassName('draggable-wp364');
  for (var i = 0; i < allDraggable.length; i++) {
    allDraggable[i].removeAttribute('draggable');
    allDraggable[i].classList.remove('draggable-wp364');
  }

  // //start drag and drop options
  // //key press to grab
  // elm.addEventListener('keypress', (e) => {
  //   e.preventDefault();
  //   elm.classList.add('draggable-wp364');
  //   elm.setAttribute('draggable', 'true');
  // });
  // allowDrop();
  // elm.addEventListener('dragstart', (e) => {
  //   e.preventDefault();
  // });

  //functions for edit options
  //add
};

export default showEditorOptions;
