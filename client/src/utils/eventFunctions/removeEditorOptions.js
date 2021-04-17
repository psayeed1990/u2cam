import innerDoc from '../innerDocFunction';
import removeEditable from './removeEditable';

const removeEditorBorder = () => {
  const doc = innerDoc();
  const selectedElements = doc.getElementsByClassName('editor-border');
  for (var i = 0; i < selectedElements.length; i++) {
    selectedElements[i].classList.remove('editor-border');
  }
  //remove options
  const ShownOptionsOfSelectedElements = doc.getElementsByClassName(
    'editor-options-wp-converter-78235'
  );
  for (var i = 0; i < ShownOptionsOfSelectedElements.length; i++) {
    ShownOptionsOfSelectedElements[i].remove();
  }
  removeEditable();
};

export default removeEditorBorder;
