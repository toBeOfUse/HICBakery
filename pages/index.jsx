import Header from "../components/Header.jsx";
import styles from "../styles/Home.module.css";

export function getServerSideProps(context) {
  // this code will run in our next.js server application, outside of the
  // browser, which means it can access our database. the result will be passed
  // to the React component that defines the page content below whenever the
  // page is being rendered (which will happen initially on the server, and then
  // later again in the browser if the page needs to be updated, usually due to
  // something the user does)
  const sqlite = require("better-sqlite3");
  const db = sqlite("bakery.sqlite3");
  const test_data_row = db.prepare("select message from test_data").get();
  return {
    props: {
      message: test_data_row.message,
      product: context.query.product || null,
    },
  };
}

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Header collapsed={true} />
      <main className={styles.main}>
        {/* These two lines added by Mitch to demonstrate server-side props: */}
        <h2>Retrieved from SQLite database:</h2>
        <p>{props.message}</p>

        {props.product && (
          <>
            <h2>Product from URL:</h2>
            <p>{props.product}</p>
          </>
        )}
      </main>
    </div>
  );
}
