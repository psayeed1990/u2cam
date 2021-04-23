const getDroppablePosition = (element) => {
  const parent = element.parentNode;
  const elIndex = Array.prototype.indexOf.call(parent.children, element);
  return elIndex;
};

export default getDroppablePosition;
