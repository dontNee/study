import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import { useEffect } from "react";
import Confirm from '@/components/confirm';
// 引入next-i18n国际化支持
import { appWithTranslation } from 'next-i18next';

const App = function ({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
      <Confirm />
    </Layout>
  );
}

export default appWithTranslation(App);