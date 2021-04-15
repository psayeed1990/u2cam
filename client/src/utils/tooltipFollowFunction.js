import innerDoc from './innerDocFunction';

//tooltip follow mouse function
const tooltipFollowFunction = (e) => {
  const doc = innerDoc();
  const tooltipId = doc.getElementById('tooltip-inside-editor');

  tooltipId.style.opacity = 1;
  tooltipId.style.left = e.pageX + 'px';
  tooltipId.style.top = e.pageY + 'px';
};

export default tooltipFollowFunction;
