import React from 'react';
import { Layout } from '../components';
import '../styles/global.scss';

/* eslint-disable*/ 
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
