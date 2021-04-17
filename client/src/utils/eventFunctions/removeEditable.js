import innerDoc from '../innerDocFunction';

const removeEditable = () => {
  const doc = innerDoc();
  const editables = doc.querySelectorAll('[contenteditable]');
  for (var j = 0; j < editables.length; j++) {
    editables[j].setAttribute('contenteditable', 'false');
  }
};

export default removeEditable;
