import elementArrayList from './elementArrayList';

const getAllElements = (doc) => {
  var elements = doc.body.getElementsByTagName('*');
  return elements;
};

export default getAllElements;
