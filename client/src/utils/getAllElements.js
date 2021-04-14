import { elementArrayList } from './iframeFunction';

const getAllElements = (doc) => {
  var elements = doc.body.getElementsByTagName('*');
  console.log(elements);
};

export default getAllElements;
