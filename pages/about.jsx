import Head from "next/head";
import Header from "../components/header";
import styles from "../styles/about.module.css";
import Footer from "../components/footer";

export default function AboutPage() {
    return <>
        <Head>
            <title>About Us</title>
        </Head>
        <Header collapsed={true} />
        <div className={styles.container}>
            <div style={{ width: "100%" }}>
                <h2>About Us</h2>
                <p>We are a bakery 🥺</p>
                <h2>Our Location</h2>
                <p>We are located on Oakwood Rd.</p>
                <p>UPDATE: Bottom of ocean 👇</p>
            </div>
            <figure>
                <img src="/location.jpg" />
                <figcaption>
                    Our <span style={{ textDecoration: "line-through" }}>Location</span> (UPDATE: Former Location.)
                </figcaption>
            </figure>
        </div>
        <Footer />
    </>;
}