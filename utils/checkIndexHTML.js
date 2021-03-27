const dirTree = require('directory-tree');

module.exports = (filePath) => {
  const tree = dirTree(filePath);

  const checkIndexFile = (child) => {
    return child.name === 'index.html';
  };

  const checkIndexFileInDir = (child) => {
    return child.children.some(checkIndexFile);
  };

  //   console.log(tree.children);
  if (tree.children.some(checkIndexFile)) {
    return true;
  } else if (
    tree.children.length > 0 &&
    tree.children.every((c) => {
      return c.type === 'directory';
    })
  ) {
    if (tree.children.some(checkIndexFileInDir)) {
      return true;
    }
  } else {
    return false;
  }
};
