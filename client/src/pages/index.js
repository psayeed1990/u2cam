import React, { useReducer } from 'react';
import Head from 'next/head';
import styles from './Home.module.css';

//layout
import WebLayout from './../layouts/WebLayout';

const Home = ({ message }) => {
  return (
    <WebLayout>
      <Head>
        <title>u2cam</title>
      </Head>
      <div className="content">
        <h1 className="heading">Home page feed</h1>
      </div>
    </WebLayout>
  );
};

export default Home;
