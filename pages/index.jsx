import Head from "next/head";
import { Fragment } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/footer.jsx";
import styles from "../styles/Home.module.css";
import db from "../components/db.js";
import Link from "next/link.js";

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
      order by categories.name;`).all();
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

export default function Home({ categories }) {
  return <>
    <Head>
      <title>Cupcake Corner Bakery</title>
    </Head>
    <div className={styles.container}>
      <Header collapsed={false} />
      <div className={styles.categoriesContainer}>
        {categories.map((c, i) =>
          <div key={c[0].category_name} className={styles.category}
            style={{
              flexDirection: i % 2 == 0 ? "row" : "row-reverse",
              backgroundColor: i % 2 == 0 ? "lavender" : "pink"
            }}>
            <img src={c[0].photo_file_name} />
            <div className={styles.categoryTextContainer}>
              <h3><Link href={`/search?category_filter=${c[0].category_name}`}>{c[0].category_name}</Link></h3>
              <p>{c[0].category_description}</p>
              {c.map(
                (p, i) => <Fragment key={p.id} >
                  <a
                    href={`/productInfo?product=${p.id}`}
                    style={{ textDecoration: "underline" }}>
                    {p.name}
                  </a>
                  {i != c.length - 1 && <span> | </span>}
                </Fragment>)
              }
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  </>;
}
