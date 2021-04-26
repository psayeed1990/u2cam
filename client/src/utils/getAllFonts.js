import innerDoc from './innerDocFunction';

const getAllFonts = () => {
  const doc = innerDoc();

  let fonts = [];

  for (let node of doc.querySelectorAll('*')) {
    if (!node.style) continue;

    for (let pseudo of ['', ':before', ':after']) {
      let fontFamily = getComputedStyle(node, pseudo).fontFamily;

      fonts = fonts.concat(fontFamily.split(/\n*,\n*/g));
    }
  }

  // Remove duplicate elements from fonts array
  // and remove the surrounding quotes around elements
  return [...new Set(fonts)].map((font) =>
    font.replace(/^\s*['"]([^'"]*)['"]\s*$/, '$1').trim()
  );
};

export default getAllFonts;
