import innerDoc from '../innerDocFunction';

const showEditorOptions = (e) => {
  //remove editor-border class from each ele except the one
  const doc = innerDoc();
  const selectedElements = doc.getElementsByClassName('editor-border');
  for (var i = 0; i < selectedElements.length; i++) {
    selectedElements[i].classList.remove('editor-border');
  }

  //remove options
  const ShownOptionsOfSelectedElements = doc.getElementsByClassName(
    'editor-options-wp-converter-78235'
  );
  for (var i = 0; i < ShownOptionsOfSelectedElements.length; i++) {
    ShownOptionsOfSelectedElements[i].remove();
  }

  //add editor class to the one
  e.currentTarget.classList.add('editor-border');

  //adding more options
  const options = document.createElement('p');
  options.setAttribute('contenteditable', 'false');
  options.classList.add('editor-options-wp-converter-78235');
  options.innerHTML = `
    <p>
      <span>Add</span><span>Edit</span><span>design</span><span>Delete</span>
    </p>

  `;

  //add editor options to all except tooltip
  const tooltip = doc.getElementById('tooltip-inside-editor');
  if (e.currentTarget === tooltip) {
    return;
  }

  e.currentTarget.appendChild(options);
};

export default showEditorOptions;
