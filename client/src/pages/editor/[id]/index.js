import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { apiCall } from '../../../api';
import ThemeListSidebar from '../../../components/sidebar/themeListSidebar';
import WebLayout from '../../../layouts/WebLayout';
import styles from './SingleEditor.module.css';
import Iframe from 'react-iframe';
import Link from 'next/link';
import iframeFunction from '../../../utils/iframeFunction';

const SingleEditor = () => {
  const [theme, setTheme] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const getThemeFiles = async () => {
        const files = await apiCall('get', `themes/${id}`);
        setTheme(files.data.data);
      };

      getThemeFiles();
    }
  }, [id]);

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
            <h5>{theme?.tree?.size / 1000}KB</h5>
            <Link href="#">
              <button>Convert To WordPress</button>
            </Link>
            <ul>
              {
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
                  onLoad={iframeFunction}
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
                  onLoad={iframeFunction}
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
              }
            </ul>
          </div>
        </div>
      </div>
    </WebLayout>
  );
};

export default SingleEditor;
