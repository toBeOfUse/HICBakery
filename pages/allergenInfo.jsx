import Head from "next/head";
import Header from "../components/header"
import Footer from "../components/footer"
import Button from "../components/button";
import Image from "next/image";
import Router from "next/router";
import styles from "../styles/allergenInfo.module.css";
import db from "../components/db.js";
import { useEffect, useState } from "react";
import capitalizeFirstLetter from "../utilities/capitalizeFirstLetter";

const AllergenInfo = ({allergens}) => {
    const [displayedAllergen, setDisplayedAllergen] = useState();

    function displayAllergen(index, shouldClose) {
        if (displayedAllergen != index) {
            setDisplayedAllergen(index);
        } else if (shouldClose) {
            setDisplayedAllergen(null);
        }
    }

    useEffect(
        ()=> console.log(displayedAllergen), [displayedAllergen]
    );

    return (
        <>
        <Head>
        <title>Allergen Info</title>
        </Head>
        <Header collapsed={true} />
        <main>
            <Button className={styles.returnButton}
              style={{ fontSize: "large", margin: "1rem" }}
              onClick={() => Router.back()}>
              ← Return to Product Info
            </Button>
            <h1 className={styles.title}>Allergen Information</h1>
            <div>
                <p className={styles.description}>Welcome to our Allergen Information page! As a bakery that prides itself on offering delicious treats to all our customers, we understand the importance of providing clear and accurate information about the allergens present in our products. In this section, you'll find comprehensive details on the allergens contained in each of our baked goods, ensuring that you can make informed choices about which items best suit your dietary needs and preferences.</p>
                <ul className={styles.allergenList}>
                    {allergens.map((allergen, allergenIndex)=> {
                        return (
                            <li key={allergenIndex}>
                                <p onMouseOut={()=> displayAllergen(allergenIndex, true)}
                                   onMouseEnter={()=> displayAllergen(allergenIndex, false)}
                                   className={styles.allergenTitle}>
                                   {capitalizeFirstLetter(allergen.allergen_name)}
                                </p>
                                <div className={`${styles.alternativesContainer}
                                    ${displayedAllergen == allergenIndex ? "" : styles.invisible}`}>
                                    <h2 className={styles.alternativesTitle}>{capitalizeFirstLetter(allergen.allergen_name)} alternatives: </h2>
                                    <ul className={styles.alternativesList}>
                                        {JSON.parse(allergen.alternatives).map((alternative, alternativeIndex)=> {
                                            return <li key={alternativeIndex}>{capitalizeFirstLetter(alternative)}</li>
                                        })}
                                    </ul>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            <div className={styles.hoverInfoContainer}>
                <p>Hover to see our alternatives!</p>
            </div>
            </div>
        </main>
        <Footer />
        </>
    )
}

export function getServerSideProps() {
    const allergens = db.prepare(`select * from allergens`).all();
    return {
        props: {allergens}
    }
}

export default AllergenInfo
