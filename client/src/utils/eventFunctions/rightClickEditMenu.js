const rightClickEditMenu = (e) => {
  e.preventDefault();
  window.event.returnValue = false;
  const selectedElement = e.currentTarget;
  alert('i');
};

export default rightClickEditMenu;
