import removeEditable from '../eventFunctions/removeEditable';
import innerDoc from '../innerDocFunction';

const editDom = (e) => {
  e.preventDefault();
  removeEditable();
  const doc = innerDoc();
  const selectedElement = doc.getElementsByClassName('editor-border')[0];
  selectedElement.setAttribute('contenteditable', 'true');
};

export default editDom;
