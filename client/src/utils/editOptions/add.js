import removeEditorBorder from '../eventFunctions/removeEditorOptions';
import eventFunctionsOnEditor from '../eventFunctionsOnEditor';
import innerDoc from '../innerDocFunction';

const add = (e) => {
  e.preventDefault();
  const doc = innerDoc();
  const selectedElement = doc.getElementsByClassName('editor-border')[0];
  const newContent = selectedElement.cloneNode(true);

  selectedElement.parentNode.appendChild(newContent);

  //add events to new clone
  const elementArray = [newContent];
  eventFunctionsOnEditor(doc, elementArray, newContent);

  //remove options
  removeEditorBorder();
  return;
};

export default add;
