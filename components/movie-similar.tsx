// import { API_URL } from "../lib/constants";
import styles from "../styles/movie-similar.module.css";
import Link from "next/link";

const API_URL = process.env.API_URL;

export async function getMovieSimilar(id: string) {
  const response = await fetch(`${API_URL}/${id}/similar`);
  return response.json();
}

export default async function MovieSimilar({ id }: { id: string }) {
  const similars = await getMovieSimilar(id);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href={`/movies/${id}`} className={styles.backLink}>
          &larr; Movie Info
        </Link>
        <h2 className={styles.title}>Similar Movies</h2>
      </div>
      <div className={styles.moviesGrid}>
        {similars.map((similar) => (
          <div key={similar.id} className={styles.movieCard}>
            <img
              src={similar.poster_path}
              alt={similar.title}
              className={styles.poster}
            />
            <div className={styles.movieInfo}>
              <h3 className={styles.movieTitle}>{similar.title}</h3>
              <p className={styles.rating}>
                ⭐️ {similar.vote_average.toFixed(1)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
