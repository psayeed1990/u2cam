import innerDoc from './innerDocFunction';

const readyEditorFunction = async () => {
  if (document.getElementById('edit-frame')) {
    const doc = await innerDoc();
    //if iframe loaded
    if (doc.readyState == 'complete') {
      //show all the elements
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

export default readyEditorFunction;
