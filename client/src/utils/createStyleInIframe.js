import innerDoc from './innerDocFunction';

const createStyleInIframe = () => {
  const doc = innerDoc();
  const css = `
        .editor-border { border: 1px solid #999 !important; box-shadow: 0 0 3px #444 !important}
        .editor-options-wp-converter-78235{
            position:absolute !important; 
            background: #e1e1e1 !important; 
            z-index:999 !important;
            padding: 10px;
            box-shadow: 0 0 3px #555;
        }
        .editor-options-wp-converter-78235 span{
            color: #666 !important; 
            font-size: 13px !important; 
            font-weight: normal;
            text-decoration: none;
            padding: 5px;
            cursor: pointer;
            
        }
        .editor-options-wp-converter-78235 span:hover{
            background: #fff
        }
        .draggable-wp364 {
          cursor: pointer;
        }

    `,
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
