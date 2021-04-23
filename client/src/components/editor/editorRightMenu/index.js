import { useEffect, useState } from 'react';
import add from '../../../utils/editOptions/add';
import deleteDom from '../../../utils/editOptions/deleteDom';
import editDom from '../../../utils/editOptions/editDom';
import hideEditorOptions from '../../../utils/eventFunctions/hideEditorOptions';
import removeEditorBorder from '../../../utils/eventFunctions/removeEditorOptions';
import getDroppablePosition from '../../../utils/getDroppablePosition';
import innerDoc from '../../../utils/innerDocFunction';
import styles from './EditorRightMenu.module.css';

const EditorRightMenu = ({ setRightMenu }) => {
  const doc = innerDoc();
  const selectedElement = doc.getElementsByClassName('editor-border')[0];

  const duplicateFunction = (e) => {
    e.preventDefault();
    const newContent = selectedElement.cloneNode(true);

    newContent.addEventListener('mouseover', (e) => {
      e.currentTarget.classList.add('editor-border');
    });
    newContent.addEventListener('mouseleave', (e) => {
      e.currentTarget.classList.remove('editor-border');
    });

    //add event listener to newly added content
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
  };

  const closeFunction = (e) => {
    e.preventDefault();
    setRightMenu(false);
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
  };
  const showSkeleton = () => {
    const allInBody = doc.body.getElementsByTagName('*');
    for (var i = 0; i < allInBody.length; i++) {
      allInBody[i].classList.add('dropable-wp489');
    }
    setRightMenu(false);
  };
  const hideSkeleton = () => {
    const allInBody = doc.body.getElementsByTagName('*');
    for (var i = 0; i < allInBody.length; i++) {
      allInBody[i].classList.remove('dropable-wp489');
    }
    setRightMenu(false);
  };

  //move outside
  const moveOutside = () => {
    if (selectedElement.parentNode) {
      selectedElement.parentNode.parentNode.appendChild(selectedElement);
    }
    setRightMenu(false);
  };

  return (
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
      <li id="design-w453">Design</li>
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
