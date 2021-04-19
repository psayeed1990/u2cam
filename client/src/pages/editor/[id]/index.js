import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { apiCall } from '../../../api';
import ThemeListSidebar from '../../../components/sidebar/themeListSidebar';
import WebLayout from '../../../layouts/WebLayout';
import styles from './SingleEditor.module.css';
import Iframe from 'react-iframe';
import Link from 'next/link';
import readyEditorFunction from '../../../utils/readyEditorFunction';
import EditorPopup from '../../../components/popups/editorPopup';
import EditorLoaderComp from '../../../components/editor/editorLoaderComp';
import createStyleInIframe from '../../../utils/createStyleInIframe';
import innerDoc from '../../../utils/innerDocFunction';
import hideEditorOptions from '../../../utils/eventFunctions/hideEditorOptions';
import EditorRightMenu from '../../../components/editor/editorRightMenu';
import removeEditorBorder from '../../../utils/eventFunctions/removeEditorOptions';
import elementArrayList from '../../../utils/elementArrayList';

const SingleEditor = () => {
  const [initialLoader, setInitialLoader] = useState(true);
  const [editorLoader, setEditorLoader] = useState(false);
  const [rightMenu, setRightMenu] = useState(false);
  const [failed, setFailed] = useState('');
  const [success, setSuccess] = useState('');
  const [popupMessage, setPopupMessage] = useState('');
  const [theme, setTheme] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const getThemeFiles = async () => {
        const files = await apiCall('get', `themes/${id}`);
        setTheme(files.data.data);
      };

      //for dev
      //getThemeFiles();
    }
  }, [id]);

  //check if iframe loaded
  const editorFunctionReady = () => {
    try {
      const readyEditor = readyEditorFunction();
      if (readyEditor) {
        setPopupMessage('Fully loaded theme');
        setInitialLoader(false);
        return setEditorLoader(true);
      }
      setFailed('Theme loading failed. Please refresh');
      return setInitialLoader(false);
    } catch (err) {
      setInitialLoader(false);
      return setFailed('Theme loading failed. Please refresh');
    }
  };

  useEffect(() => {
    if (editorLoader) {
      setPopupMessage('Making theme contents editable');
      const doc = innerDoc();

      // get all the elements
      //const allElements = getAllElements();

      //create style in iframe
      createStyleInIframe();

      //doc.addEventListener('mousemove', tooltipFollowFunction, false);
      setPopupMessage('Adding edit options on right click');

      elementArrayList.forEach((elems) => {
        const allElements = doc.getElementsByTagName(elems);
        for (var i = 0; i < allElements.length; i++) {
          const element = allElements[i];

          //mouse enter and leave functions
          element.addEventListener('mouseover', (e) => {
            e.currentTarget.classList.add('editor-border');
          });
          element.addEventListener('mouseleave', (e) => {
            e.currentTarget.classList.remove('editor-border');
          });

          //hide editor options
          element.addEventListener('click', hideEditorOptions);

          if (doc.addEventListener) {
            element.addEventListener(
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
            element.attachEvent('oncontextmenu', (e) => {
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
        }
      });

      setPopupMessage('');
      setEditorLoader(false);
    }
  }, [editorLoader]);

  return (
    <WebLayout>
      <Head>
        <title>Editor: HTML to WP theme</title>
      </Head>
      <div className="content">
        <div id={styles.editor}>
          <ThemeListSidebar />
          <div className="editor">
            <h1 className="heading">{theme?.tree?.themeName}</h1>
            <p className="error">{failed}</p>
            <p className="success">{success}</p>
            <h5>{theme?.tree?.size / 1000}KB</h5>
            <Link href="#">
              <button id={styles.convert}>Convert To WordPress</button>
            </Link>

            <ul>
              <EditorPopup
                editorLoader={editorLoader}
                initialLoader={initialLoader}
                loadingIcon={<EditorLoaderComp />}
                popupMessage={popupMessage}
              />
              {rightMenu && (
                <EditorPopup
                  editorLoader={rightMenu}
                  initialLoader={initialLoader}
                  loadingIcon={<EditorRightMenu setRightMenu={setRightMenu} />}
                  popupMessage={popupMessage}
                />
              )}

              <Iframe
                url={`/themes/eshopper/index.html`}
                width="100%"
                height="1500"
                id="edit-frame"
                className="myClassname"
                display="initial"
                position="relative"
                onLoad={editorFunctionReady}
                onError={() => {
                  setFailed('Failed to load theme');
                }}
              />

              {/* {
                //if extra folder exist
              }
              {theme?.tree?.children?.length === 1 &&
              theme?.tree?.children[0]?.type === 'directory' ? (
                <Iframe
                  url={`/html-preview/${theme?.upload?.filename}/${theme?.tree?.children[0]?.name}/index.html`}
                  width="100%"
                  height="1500"
                  id="edit-frame"
                  className="myClassname"
                  display="initial"
                  position="relative"
                  onLoad={editorFunctionReady}
                  onError={() => {
                    setFailed('Failed to load theme');
                  }}
                />
              ) : (
                <Iframe
                  url={`/html-preview/${theme?.upload?.filename}/index.html`}
                  width="100%"
                  height="1500"
                  id="edit-frame"
                  className="myClassname"
                  display="initial"
                  position="relative"
                  onLoad={editorFunctionReady}
                  onError={() => {
                    setFailed('Failed to load theme');
                  }}
                />
              )}
              {
                //theme?.children?.map((t, i) => {
                //recursive files in folder read
                // function recursiveFileRead(folder, index) {
                //   return (
                //     <li key={index}>
                //       <b>{index + 1}:</b>
                //       {folder.name}
                //       {folder.type === 'directory' && (
                //         <ul>
                //           {folder.children.map((d, k) => {
                //             return recursiveFileRead(d, k);
                //           })}
                //         </ul>
                //       )}
                //     </li>
                //   );
                // }
                // return recursiveFileRead(t, i);
                //})
              } */}
            </ul>
          </div>
        </div>
      </div>
    </WebLayout>
  );
};

export default SingleEditor;
