import hideEditorOptions from './eventFunctions/hideEditorOptions';
import showEditorOptions from './eventFunctions/showEditorOptions';

const eventFunctionsOnEditor = (doc, elementArray, element) => {
  const tooltipId = doc.getElementById('tooltip-inside-editor');

  for (let i = 0; i < elementArray.length; i++) {
    //show editor options
    elementArray[i].addEventListener('mouseenter', showEditorOptions);

    //hide editor options
    elementArray[i].addEventListener('mouseleave', hideEditorOptions);

    // edit on double click function
    // elementArray[i].addEventListener('dblclick', () => {
    //   //get file path
    //   var path = doc.location.pathname;
    //   var page = path.split('/').pop();

    //   //set other editable to non editable/normal
    //   const editables = doc.querySelectorAll('[contenteditable]');
    //   for (var j = 0; j < editables.length; j++) {
    //     editables[j].setAttribute('contenteditable', 'false');
    //   }

    //   //change innerhtml of tooltip
    //   tooltipId.innerHTML = `Clicked #${i} &lt;${element}&gt; of ${page}`;

    //   //make content editable
    //   elementArray[i].setAttribute('contenteditable', 'true');
    // });
  }
};

export default eventFunctionsOnEditor;
