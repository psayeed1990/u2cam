const innerDoc = () => {
  //grab iframe document

  const iframe = document.getElementById('edit-frame');

  const doc = iframe.contentDocument
    ? iframe.contentDocument
    : iframe.contentWindow.document;
  return doc;
};

export default innerDoc;
