import Head from "next/head";
import { Fragment } from "react";
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import styles from "../styles/Home.module.css";
import db from "../components/db.js";
import Link from "next/link.js";

const nearbyLeftSwoosh = keyframes`
from {
  opacity: 0;
  transform: translateX(-100px);
}
to {
  opacity: 1;
  transform: translateX(0px);
}
`

export function getServerSideProps(context) {
  // this code will run in our next.js server application, outside of the
  // browser, which means it can access our database. the result will be passed
  // to the React component that defines the page content below whenever the
  // page is being rendered (which will happen initially on the server, and then
  // later again in the browser if the page needs to be updated, usually due to
  // something the user does)
  // const test_data_row = db.prepare("select message from test_data").get();
  const featuredProducts = db.prepare(`
    select categories.description as category_description, * from categories
      left join product_categories on categories.name=product_categories.category_name
      left join products on product_categories.product_id=products.id
      where categories.featured=true
      order by random();`).all();
  const groupedProducts = {};
  for (const product of featuredProducts) {
    if (!(product.category_name in groupedProducts)) {
      groupedProducts[product.category_name] = [product];
    } else {
      groupedProducts[product.category_name].push(product);
    }
  }

  return {
    props: { categories: Object.values(groupedProducts) },
  };
}

const ProductLink = ({ product, children }) => (
  <Link href={`/productInfo?product=${product.id}`}
    style={{ textDecoration: "underline" }}>
    {children}
  </Link>);

export default function Home({ categories }) {
  return <>
    <Head>
      <title>Cupcake Corner Bakery</title>
    </Head>
    <div className={styles.container}>
      <Header collapsed={false} />
      <div className={styles.categoriesContainer}>
        <h2>Featured Product Categories:</h2>
        {categories.map((c, i) =>
          <Reveal keyframes={nearbyLeftSwoosh} key={c[0].category_name} triggerOnce>
            <div className={styles.category}
              style={{
                flexDirection: i % 2 == 0 ? "row" : "row-reverse",
                backgroundColor: i % 2 == 0 ? "lavender" : "pink"
              }}>
              <ProductLink product={c[0]}>
                <img title={c[0].name} src={c[0].photo_file_name} alt={c[0].names} />
              </ProductLink>
              <div className={styles.categoryTextContainer}>
                <h3>
                  <Link href={`/search?category_filter=${c[0].category_name}`}>
                    {c[0].category_name}
                  </Link>
                </h3>
                <p>{c[0].category_description}</p>
                <div style={{ display: "flex", flexWrap: "wrap", wordWrap: "nowrap" }}>
                  {c.map(
                    (p, i) => <span key={p.id} >
                      <ProductLink product={p}>{p.name}</ProductLink>
                      {i != c.length - 1 && <span>&nbsp;|&nbsp;</span>}
                    </span>)
                  }
                </div>
              </div>
            </div>
          </Reveal>
        )}
      </div>
      <Footer />
    </div>
  </>;
}
