import innerDoc from '../innerDocFunction';

const deleteDom = (e) => {
  e.preventDefault();
  const doc = innerDoc();
  const selectedElement = doc.getElementsByClassName('editor-border')[0];
  selectedElement.remove();
};

export default deleteDom;
