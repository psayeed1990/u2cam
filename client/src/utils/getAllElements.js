import innerDoc from './innerDocFunction';

const getAllElements = () => {
  const doc = innerDoc();
  const elements = doc.body.getElementsByTagName('*');
  return elements;
};

export default getAllElements;
