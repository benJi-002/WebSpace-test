import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Header/>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Agbalumo&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
    </Head>
    <main>
      <Component {...pageProps} />
    </main>

    <Footer/>
  </>
);

export default MyApp;