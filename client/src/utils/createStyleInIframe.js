const createStyleInIframe = (doc) => {
  var css = '.editor-border { border: 1px solid black; }',
    head = doc.head || doc.getElementsByTagName('head')[0],
    style = document.createElement('style');

  head.appendChild(style);

  if (style.styleSheet) {
    // This is required for IE8 and below.
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
};

export default createStyleInIframe;
