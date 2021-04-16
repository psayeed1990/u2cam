import innerDoc from '../innerDocFunction';

const showEditorOptions = (e) => {
  //remove editor-border class from each ele except the one
  const doc = innerDoc();
  const selectedElements = doc.getElementsByClassName('editor-border');
  for (var i = 0; i < selectedElements.length; i++) {
    selectedElements[i].classList.remove('editor-border');
  }
  e.currentTarget.classList.add('editor-border');
};

export default showEditorOptions;
