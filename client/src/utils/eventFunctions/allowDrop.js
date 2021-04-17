import innerDoc from '../innerDocFunction';

export const dropAllow = (e) => {
  e.preventDefault();
};

export const rejectDrop = () => {
  const doc = innerDoc();

  const body = doc.getElementsByTagName('body')[0];

  body.removeEventListener('dragover', dropAllow);
};

const allowDrop = () => {
  const doc = innerDoc();

  const body = doc.getElementsByTagName('body')[0];

  body.addEventListener('dragover', dropAllow);
};

export default allowDrop;
