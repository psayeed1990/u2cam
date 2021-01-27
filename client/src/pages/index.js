import React, {useReducer} from 'react'
import Head from 'next/head';
import styles from './Home.module.css';

//layout
import WebLayout from './../layouts/WebLayout';
import DragAndDropUpload from '../components/dragAndDropUpload';

const Home = ({message})=>{

    const reducer = (state, action) => {
      switch (action.type) {
        case 'SET_DROP_DEPTH':
          return { ...state, dropDepth: action.dropDepth }
        case 'SET_IN_DROP_ZONE':
          return { ...state, inDropZone: action.inDropZone };
        case 'ADD_FILE_TO_LIST':
          return { ...state, fileList: state.fileList.concat(action.files) };
        default:
          return state;
      }
    };

    const [data, dispatch] = useReducer(
      reducer, { dropDepth: 0, inDropZone: false, fileList: [] }
    )


    return (
        
        <WebLayout>
            <Head>
                <title>HTML to WP theme</title>
                <p className="error">{message}</p>
            </Head>
            <h1 className="heading">Home page</h1>

            <div id={styles.drop} >

                <DragAndDropUpload data={data} dispatch={dispatch} />

                    <ol className={styles.droppedFiles}>
                      {data.fileList.map(f => {
                        return (
                          <li key={f.name}>{f.name}</li>
                        )
                      })}
                    </ol>
                
                
            </div>

        </WebLayout>

    )
}

export default Home;