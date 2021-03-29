const iframeFunction = () => {
  if (document.getElementById('edit-frame')) {
    var iframe = document.getElementById('edit-frame');
    var innerDoc = iframe.contentDocument
      ? iframe.contentDocument
      : iframe.contentWindow.document;
    if (innerDoc.readyState == 'complete') {
      const elementArrayList = [
        { element: innerDoc.getElementsByTagName('p') },
        { element: innerDoc.getElementsByTagName('button') },
        { element: innerDoc.getElementsByTagName('h1') },
        { element: innerDoc.getElementsByTagName('h2') },
        { element: innerDoc.getElementsByTagName('h3') },
        { element: innerDoc.getElementsByTagName('h4') },
        { element: innerDoc.getElementsByTagName('h5') },
        { element: innerDoc.getElementsByTagName('h6') },
        { element: innerDoc.getElementsByTagName('a') },
      ];

      const clicked = (elementArray) => {
        for (let i = 0; i < elementArray.length; i++) {
          elementArray[i].addEventListener('click', () => {
            //get file path
            var path = innerDoc.location.pathname;
            //   var page = path.split('/').pop();
            console.log(path);
            elementArray[i].innerHTML = path;
          });
        }
      };

      elementArrayList.forEach((el) => {
        clicked(el.element);
      });
    }
  }
};

export default iframeFunction;
