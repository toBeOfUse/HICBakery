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
                <p>Welcome to the Cupcake Corner, the sweetest little bakery you've ever heard of! We've been serving up sugary delights for over 50 years, but our story is a little bit different than your typical bakery.</p>

                <p>Our bakery was founded in 1972 in Kent, Ohio by a group of three friends who loved baking. Originally, we made all kinds of baked goods, including bread, cakes, and pies. But over time, we found that our customers were primarily interested in sugar-based products. So, we fired the bread guy.</p>

                <p>Over the years, we've served an incredible range of customers. One day, we had the pleasure of serving a young Neil Armstrong, who had grown up in nearby Wapakoneta and was in town for a visit. He picked up a dozen cupcakes to bring back to his family, and we like to think that those cupcakes played a small role in helping him to achieve his historic moon landing just a few years later.</p>

                <p>Unfortunately, as much as we loved serving all of our customers in Kent, we had to face the harsh reality of taxes. So, we made the difficult decision to relocate our bakery to South America. But don't worry, we'll still be baking up a storm and serving up plenty of sugary delights - we're just doing it from a new location.</p>

                <p>Thanks for being a part of our sweet journey, and we hope to see you soon!</p>
            </div>
            <figure>
                <img src="/location.jpg" />
                <figcaption>
                    Our location at the top of El Peñón de Guatapé, Colombia. We can be reached by climbing a mere 708 steps, ascending 200 meters. We're confident our customers from Kent will eventually still find us again.
                </figcaption>
            </figure>
        </div>
        <Footer />
    </>;
}