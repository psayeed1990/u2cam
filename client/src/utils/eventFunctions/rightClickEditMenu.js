import add from '../editOptions/add';
import deleteDom from '../editOptions/deleteDom';
import editDom from '../editOptions/editDom';
import innerDoc from '../innerDocFunction';
import removeEditorBorder from './removeEditorOptions';
import showEditorOptions from './showEditorOptions';

const rightClickEditMenu = (e) => {
  //prevent default actions of right click
  e.preventDefault();
  window.event.returnValue = false;

  // get the doc and clicked element
  const doc = innerDoc();
  const elm = e.currentTarget;

  // remove all the effects added by this functions before starting again
  removeEditorBorder();

  //Now start adding all the functions to the right click
  //add editor class to the one
  elm.classList.add('editor-border');
};

export default rightClickEditMenu;
