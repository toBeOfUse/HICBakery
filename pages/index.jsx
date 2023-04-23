import Header from "../components/Header.jsx";
import styles from "../styles/Home.module.css";

export function getServerSideProps(context) {
  // this code will run in our next.js server application, outside of the
  // browser, which means it can access our database. the result will be passed
  // to the React component that defines the page content below whenever the
  // page is being rendered (which will happen initially on the server, and then
  // later again in the browser if the page needs to be updated, usually due to
  // something the user does)
  // const test_data_row = db.prepare("select message from test_data").get();

  return {
    props: {
      categories: [
        { name: "Category 1", image: "/product_photos/tart.jpg", description: "Category description" },
        { name: "Category 2", image: "/product_photos/tart.jpg", description: "Category description" }
      ]
    },
  };
}

export default function Home({ categories }) {
  return (
    <div className={styles.container}>
      <Header collapsed={false} />
      <div className={styles.categoriesContainer}>
        {categories.map((c, i) =>
          <div key={c.name} className={styles.category}
            style={{
              flexDirection: i % 2 == 0 ? "row" : "row-reverse",
              backgroundColor: i % 2 == 0 ? "lavender" : "pink"
            }}>
            <img src={c.image} />
            <div className={styles.categoryTextContainer}>
              <h3>{c.name}</h3>
              <p>{c.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
