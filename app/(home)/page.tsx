// import { API_URL } from "../../lib/constants";
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";

export const metadata = {
  title: "Home",
};

export interface Movie {
  id: string;
  // medium_cover_image: string;
  poster_path: string;
  title: string;
}

const API_URL = process.env.API_URL;

async function getMovies() {
  const response = await fetch(API_URL);
  const movies = await response.json();
  return movies;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie: Movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          // poster_path={movie.medium_cover_image}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}
