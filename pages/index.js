import styles from "../styles/Home.module.css";

export function getServerSideProps(context) {
  // this code will run in our next.js server application, outside of the
  // browser, which means it can access our database. the result will be passed
  // to the React component that defines the page content below whenever the
  // page is being rendered (which will happen initially on the server, and then
  // later again in the browser if the page needs to be updated, usually due to
  // something the user does)
  const sqlite = require("better-sqlite3");
  const db = sqlite("bakery.db");
  const test_data_row = db.prepare("select message from test_data").get();
  return {
    props: { message: test_data_row.message },
  };
}

export default function Home(props) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {/* These two lines added by Mitch to demonstrate server-side props: */}
        <h2>Retrieved from SQLite database:</h2>
        <p>{props.message}</p>

        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>
        </div>
      </main>
    </div>
  );
}
