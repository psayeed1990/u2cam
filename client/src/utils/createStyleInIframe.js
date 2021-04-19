import innerDoc from './innerDocFunction';

const createStyleInIframe = () => {
  const doc = innerDoc();
  const css = `
        html {
          --scrollbarBG:  #7fd09a;
          --thumbBG: #2479ac;
        }
        html::-webkit-scrollbar {
          width: 11px;
        }
        html {
          scrollbar-width: thin;
          scrollbar-color: var(--thumbBG) var(--scrollbarBG);
        }
        html::-webkit-scrollbar-track {
          background: var(--scrollbarBG);
        }
        html::-webkit-scrollbar-thumb {
          background-color: var(--thumbBG) ;
          border-radius: 6px;
          border: 3px solid var(--scrollbarBG);
        }
        .editor-border { border: 1px solid #999 !important; box-shadow: 0 0 3px #444 !important}
        .editor-options-wp-converter-78235{
            position:absolute !important; 
            background: #ccd0c4 !important; 
            z-index:999 !important;
            padding: 10px;
            box-shadow: 0 0 3px #555;
            transition: background-color 0.5s

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
