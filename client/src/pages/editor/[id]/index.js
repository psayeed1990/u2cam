import Head from 'next/head';
import ThemeListSidebar from '../../../components/sidebar/themeListSidebar';
import WebLayout from '../../../layouts/WebLayout';
import styles from './SingleEditor.module.css';

const SingleEditor = () => {
  return (
    <WebLayout>
      <Head>
        <title>Editor: HTML to WP theme</title>
      </Head>
      <div className="content">
        <div id={styles.editor}>
          <ThemeListSidebar />
          <div className="editor">
            <h1 className="heading">Select a theme</h1>
          </div>
        </div>
      </div>
    </WebLayout>
  );
};

export default SingleEditor;
