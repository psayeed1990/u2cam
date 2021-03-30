const iframeFunction = () => {
  if (document.getElementById('edit-frame')) {
    var iframe = document.getElementById('edit-frame');
    var innerDoc = iframe.contentDocument
      ? iframe.contentDocument
      : iframe.contentWindow.document;
    if (innerDoc.readyState == 'complete') {
      const elementArrayList = [
        'p',
        'button',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'a',
      ];

      const clicked = (elementArray, element) => {
        for (let i = 0; i < elementArray.length; i++) {
          elementArray[i].addEventListener('click', () => {
            //get file path
            var path = innerDoc.location.pathname;
            var page = path.split('/').pop();
            console.log(page);
            elementArray[
              i
            ].innerHTML = `Clicked &lt;${element}&gt; #-${i} of ${page}`;
          });
        }
      };

      elementArrayList.forEach((element) => {
        const elementArray = innerDoc.getElementsByTagName(element);
        clicked(elementArray, element);
      });
    }
  }
};

export default iframeFunction;
