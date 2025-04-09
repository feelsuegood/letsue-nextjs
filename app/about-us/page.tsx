import styles from "../../styles/about-us.module.css";

export const metadata = {
  title: "About us",
};

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Us</h1>
      <div className={styles.content}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>What We Do</h2>
          <p className={styles.description}>
            We collect detailed information about movies, like ratings, user
            reviews, where to watch them online, and what other similar movies
            you might enjoy.
          </p>
          <p className={styles.description}>
            Our platform helps you decide what to watch next, whether you want a
            certain genre, specific feeling, or just want to discover new
            movies.
          </p>
        </div>
      </div>
    </div>
  );
}
