import Head from 'next/head';

import '../styles/globals.scss';
import '../styles/Slider.scss';
import '../styles/Arrows.scss'

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Inter&family=Nunito:wght@300;400;500;700;900&display=swap" rel="stylesheet"></link>
    </Head>
    <main>
      <Component {...pageProps} />
    </main>
  </>
);

export default MyApp;