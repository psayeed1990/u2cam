import innerDoc from './innerDocFunction';

const createTooltip = () => {
  const doc = innerDoc();
  const tooltip = document.createElement('p');
  tooltip.style.cssText =
    'top: 0;left: 0;opacity:0;position: absolute;z-index: 1000;width:auto;padding:4px;color: #444;background: white;';

  //set id for tooltip
  const text = document.createTextNode('Double click to edit!');
  tooltip.setAttribute('id', 'tooltip-inside-editor');
  tooltip.appendChild(text);
  const iframeBody = doc.getElementsByTagName('body')[0];
  iframeBody.appendChild(tooltip);
};
export default createTooltip;
