import { useEffect, useState } from 'react';
import hideEditorOptions from '../../../utils/eventFunctions/hideEditorOptions';
import removeEditorBorder from '../../../utils/eventFunctions/removeEditorOptions';
import getDroppablePosition from '../../../utils/getDroppablePosition';
import innerDoc from '../../../utils/innerDocFunction';
import DesignPopup from '../../popups/designPopup';
import styles from './EditorRightMenu.module.css';

const EditorRightMenu = ({ setRightMenu, keepSelectedSet, keepSelected }) => {
  const [showDesignPopup, showDesignPopupSet] = useState(false);
  const doc = innerDoc();
  const selectedElement = doc.getElementsByClassName('editor-border')[0];

  const duplicateFunction = (e) => {
    e.preventDefault();
    const newContent = selectedElement.cloneNode(true);

    //mouse enter and leave functions
    newContent.addEventListener('mouseover', (e) => {
      //remove other class of 'editor-border'
      //get the parents
      // let temporayElement = element;
      // const parents = [];
      // while (temporayElement) {
      //   parents.unshift(temporayElement);
      //   temporayElement = temporayElement.parentNode;
      // }
      const otherEditorBorder = doc.getElementsByClassName('editor-border');

      for (var j = 0; j < otherEditorBorder.length; j++) {
        otherEditorBorder[j].classList.remove('editor-border');
      }
      e.currentTarget.classList.add('editor-border');
    });
    newContent.addEventListener('mouseleave', (e) => {
      if (keepSelected) {
        // do nothing
      } else {
        e.currentTarget.classList.remove('editor-border');
      }
    });

    //hide editor options
    newContent.addEventListener('click', hideEditorOptions);

    if (doc.addEventListener) {
      newContent.addEventListener(
        'contextmenu',
        (e) => {
          e.preventDefault();
          window.event.returnValue = false;
          const elm = e.currentTarget;

          // remove all the effects added by this functions before starting again
          removeEditorBorder();

          //Now start adding all the functions to the right click
          //add editor class to the one
          elm.classList.add('editor-border');
          //turn on keep selected border
          keepSelectedSet(true);
          setRightMenu(true);
        },
        false
      );
    } else {
      newContent.attachEvent('oncontextmenu', (e) => {
        e.preventDefault();
        window.event.returnValue = false;
        const elm = e.currentTarget;

        // remove all the effects added by this functions before starting again
        removeEditorBorder();

        //Now start adding all the functions to the right click
        //add editor class to the one
        elm.classList.add('editor-border');
        keepSelectedSet(true);
        setRightMenu(true);
      });
    }
    selectedElement.parentNode.appendChild(newContent);
    setRightMenu(false);
  };

  const deleteFunction = (e) => {
    e.preventDefault();
    selectedElement.remove();
    setRightMenu(false);
    keepSelectedSet(false);
  };

  const closeFunction = (e) => {
    e.preventDefault();
    setRightMenu(false);
    keepSelectedSet(false);
  };

  const moveFunction = (e) => {
    e.preventDefault();
    if (doc.querySelectorAll("[draggable='true']")[0]) {
      const dragAble = doc.querySelectorAll("[draggable='true']")[0];
      dragAble.removeAttribute('draggable');
      dragAble.removeAttribute('id');
      dragAble.classList.remove('dragable-wp364');
    }

    selectedElement.setAttribute('draggable', 'true');
    selectedElement.setAttribute('id', 'drag-it');
    selectedElement.classList.add('dragable-wp364');
    //when drag starts
    selectedElement.addEventListener('dragstart', (ev) => {
      ev.dataTransfer.setData('text', ev.target.id);
    });

    //allow drop
    const allInBody = doc.body.getElementsByTagName('*');
    for (var i = 0; i < allInBody.length; i++) {
      allInBody[i].addEventListener('dragover', (ev) => {
        ev.preventDefault();
        ev.currentTarget.classList.add('dropable-wp489');
      });
      // allInBody[i].addEventListener('dragleave', (ev) => {
      //   ev.preventDefault();
      //   ev.currentTarget.classList.remove('dropable-wp489');
      // });
    }

    doc.body.addEventListener('drop', (ev) => {
      ev.preventDefault();
      var data = ev.dataTransfer.getData('text');

      //remove style based on skeleton setting

      const recentDropables = doc.getElementsByClassName('dropable-wp489');
      for (var i = recentDropables.length - 1; i > -1; i--) {
        recentDropables[i].classList.remove('dropable-wp489');
      }

      //get the position to drop
      //get position of the element in it's parent
      //const elementIndex = getDroppablePosition(ev.currentTarget);
      // const parentNode = ev.currentTarget.parentNode;

      // parentNode.insertBefore(doc.getElementById(data), ev.currentTarget);

      ev.target.appendChild(doc.getElementById(data));

      //remove drag style
      if (doc.querySelectorAll("[draggable='true']")[0]) {
        const dragAble = doc.querySelectorAll("[draggable='true']")[0];
        dragAble.removeAttribute('draggable');
        dragAble.removeAttribute('id');
        dragAble.classList.remove('dragable-wp364');
      }
    });

    setRightMenu(false);
    keepSelectedSet(false);
  };

  const moveUpFunction = (e) => {
    e.preventDefault();
    if (selectedElement.previousElementSibling) {
      selectedElement.parentNode.insertBefore(
        selectedElement,
        selectedElement.previousElementSibling
      );
    }
    setRightMenu(false);
    keepSelectedSet(false);
  };
  const moveDownFunction = (e) => {
    e.preventDefault();
    if (selectedElement.nextElementSibling) {
      selectedElement.parentNode.insertBefore(
        selectedElement.nextElementSibling,
        selectedElement
      );
    }
    setRightMenu(false);
    keepSelectedSet(false);
  };
  const showSkeleton = () => {
    const allInBody = doc.body.getElementsByTagName('*');
    for (var i = 0; i < allInBody.length; i++) {
      allInBody[i].classList.add('dropable-wp489');
    }
    setRightMenu(false);
    keepSelectedSet(false);
  };
  const hideSkeleton = () => {
    const allInBody = doc.body.getElementsByTagName('*');
    for (var i = 0; i < allInBody.length; i++) {
      allInBody[i].classList.remove('dropable-wp489');
    }
    setRightMenu(false);
    keepSelectedSet(false);
  };

  //move outside
  const moveOutside = () => {
    if (selectedElement.parentNode) {
      selectedElement.parentNode.parentNode.appendChild(selectedElement);
    }
    setRightMenu(false);
    keepSelectedSet(false);
  };

  //design
  const designFunction = (e) => {
    e.preventDefault();
    showDesignPopupSet(true);
    selectedElement.classList.add('editor-border');
    keepSelectedSet(true);
  };

  return showDesignPopup ? (
    <DesignPopup
      showDesignPopupSet={showDesignPopupSet}
      showDesignPopup={showDesignPopup}
      setRightMenu={setRightMenu}
    />
  ) : (
    <ul className="editor-options-wp-converter-78235">
      <li id="add-w453">Add</li>
      <li id="duplicate-w453" onClick={duplicateFunction}>
        Duplicate
      </li>
      <li id="edit-w453">Edit</li>
      <li id="move-w453" onClick={moveFunction}>
        Move
      </li>
      <li id="move-up-w453" onClick={moveUpFunction}>
        Move Up
      </li>
      <li id="move-down-w453" onClick={moveDownFunction}>
        Move Down
      </li>
      <li id="design-w453" onClick={designFunction}>
        Design
      </li>
      <li id="resize-w453">Resize</li>
      <li id="move-out-w453" onClick={moveOutside}>
        Movie Outside
      </li>
      <li id="show-skeleton-w453" onClick={showSkeleton}>
        Show Skeleton
      </li>
      <li id="hide-skeleton-w453" onClick={hideSkeleton}>
        Hide Skeleton
      </li>
      <li id="delete-w453" onClick={deleteFunction}>
        Delete
      </li>
      <li id="close-w453" onClick={closeFunction}>
        Close
      </li>
    </ul>
  );
};

export default EditorRightMenu;
