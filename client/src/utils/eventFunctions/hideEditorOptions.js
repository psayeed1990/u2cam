import removeEditable from './removeEditable';
import removeEditorBorder from './removeEditorOptions';

const hideEditorOptions = (e) => {
  e.currentTarget.classList.remove('editor-border');
  removeEditable();
  removeEditorBorder();
};

export default hideEditorOptions;
