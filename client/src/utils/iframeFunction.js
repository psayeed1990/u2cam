import createTooltip from './createTooltip';
import editOnDblClick from './editOnDblClick';
import elementArrayList from './elementArrayList';
import getAllElements from './getAllElements';
import innerDoc from './innerDocFunction';
import tooltipFollowFunction from './tooltipFollowFunction';

const iframeFunction = () => {
  if (document.getElementById('edit-frame')) {
    const doc = innerDoc();
    //if iframe loaded
    if (doc.readyState == 'complete') {
      //show all the elements

      getAllElements(doc);
      // show all the elements class
      // show tree heirarchy of nested elements
      const tooltipId = doc.getElementById('tooltip-inside-editor');
      //create tooltip
      createTooltip(tooltipId);
      //get id of tooltip

      doc.addEventListener('mousemove', tooltipFollowFunction, false);

      // run dbl clicked function for each tag
      elementArrayList.forEach((element) => {
        if (doc.getElementsByTagName(element)) {
          const elementArray = doc.getElementsByTagName(element);
          editOnDblClick(doc, elementArray, element);
        }
      });
    }
  }
};

export default iframeFunction;
