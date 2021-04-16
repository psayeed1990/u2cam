import createTooltip from './createTooltip';
import eventFunctionsOnEditor from './eventFunctionsOnEditor';
import elementArrayList from './elementArrayList';
import getAllElements from './getAllElements';
import innerDoc from './innerDocFunction';
import tooltipFollowFunction from './tooltipFollowFunction';
import createStyleInIframe from './createStyleInIframe';

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
      //create style in iframe
      createStyleInIframe(doc);

      doc.addEventListener('mousemove', tooltipFollowFunction, false);

      // run dbl clicked function for each tag
      elementArrayList.forEach((element) => {
        if (doc.getElementsByTagName(element)) {
          const elementArray = doc.getElementsByTagName(element);
          eventFunctionsOnEditor(doc, elementArray, element);
        }
      });
    }
  }
};

export default iframeFunction;
