import styles from "../styles/movie-credit.module.css";
import { API_URL } from "../lib/constants";
import Link from "next/link";

export async function getMovieCredit(id: string) {
  const response = await fetch(`${API_URL}/${id}/credits`);
  return response.json();
}

export default async function MovieCredit({ id }: { id: string }) {
  const credits = await getMovieCredit(id);
  return (
    <div className={styles.header}>
      <Link href={`/movies/${id}`} className={styles.back_link}>
        &larr; Movie Info
      </Link>
      <div className={styles.container}>
        {credits.map((credit) => (
          <div key={credit.id} className={styles.credit_card}>
            <img
              className={styles.profile}
              src={credit.profile_path}
              alt={credit.name}
            />
            <div>
              <h3 className={styles.name}>{credit.name}</h3>
              <h4 className={styles.character}>
                Character: {credit.character}
              </h4>
            </div>
            <p></p>
          </div>
        ))}
      </div>
    </div>
  );
}
