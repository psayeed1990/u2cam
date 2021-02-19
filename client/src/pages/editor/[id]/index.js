import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { apiCall } from '../../../api';
import ThemeListSidebar from '../../../components/sidebar/themeListSidebar';
import WebLayout from '../../../layouts/WebLayout';
import styles from './SingleEditor.module.css';

const SingleEditor = () => {
  const [theme, setTheme] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      console.log(id);
      const getThemeFiles = async () => {
        const files = await apiCall('get', `themes/${id}`);
        console.log(files.data.data.size);
        console.log(files.data.data.children[0].children);
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
            <h1 className="heading">{theme?.themeName}</h1>
            <h5>{theme?.size / 1000}KB</h5>
            <ul>
              {theme?.children[0]?.children?.map((t, i) => {
                function recursiveFileRead(folder, index) {
                  return (
                    <li key={index}>
                      <b>{index + 1}:</b>
                      {folder.name}

                      {folder.type === 'directory' && (
                        <ul>
                          {folder.children.map((d, k) => {
                            return recursiveFileRead(d, k);
                          })}
                        </ul>
                      )}
                    </li>
                  );
                }

                return recursiveFileRead(t, i);
              })}
            </ul>
          </div>
        </div>
      </div>
    </WebLayout>
  );
};

export default SingleEditor;
