import Head from "next/head";

import Header from "../components/Header";
import Slider from "../components/slider/Slider";
import Instagram from "../components/Instagram";
import MapAndForm from "../components/MapAndForm/MapAndForm";
import Footer from "../components/Footer";

import styles from "../styles/Main.module.scss";

export const getStaticProps = async () => {
    const response = await fetch('https://graph.instagram.com//me/media?fields=media_url,media_type&access_token=IGQWRQV3hfYVctQ1RVLTBfNGZAYcUE2WlY2QkFzU3p6eC1iV0pqLUY1aVpJbVlpNkJGYTdOajBYYkc3ZAzU2R3ZA1aXZA2SGVBSU90aWlEZAWVGY1FjdGwxOWM5ektPSndpTnFFRktPbVlhMW1iWXVtTnFtM3V0SlFiVVEZD');
    const data = await response.json();

    if(!data) {
        return {
            notFound: true
        }
    }

    return {
        props: { posts: data },
    }
};

const Main = ({posts}) => {
    return (
        <>
            <Head>
                <title>Main</title>
            </Head>

            <Header/>

            <div className="container">
                <div className={styles.sliderWrapper}>
                    <Slider/>
                </div>
            </div>

            <Instagram posts={posts.data}/>

            <MapAndForm/>

            <Footer/>
        </>
    );
};

export default Main;