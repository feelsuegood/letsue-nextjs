"use client";

import styles from "../styles/movie-info.module.css";
import { useState } from "react";
import Link from "next/link";

interface IMovieInfoProps {
  movie: {
    title: string;
    poster_path: string;
    // medium_cover_image: string;
    vote_average: number;
    // rating: number;
    overview: string;
  };
  id: string;
}

export default function MovieInfo({ movie, id }: IMovieInfoProps) {
  const [countryCode, setCountryCode] = useState("");

  return (
    <div className={styles.container}>
      <img
        src={movie.poster_path}
        // src={movie.medium_cover_image}
        className={styles.poster}
        alt={movie.title}
      />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>⭐️ {movie.vote_average.toFixed(1)}</h3>
        {/* <h3>⭐️ {movie.rating.toFixed(1)}</h3> */}
        <p>{movie.overview}</p>
        <Link href={`/movies/${id}/credits`} className={styles.link}>
          &rarr; Credits
        </Link>
        <Link href={`/movies/${id}/similars`} className={styles.link}>
          &rarr; Similar
        </Link>
        <div className={styles.providers}>
          <input
            type="text"
            value={countryCode}
            onChange={(e) => {
              const value = e.target.value.toUpperCase();
              if (/^[A-Z]*$/.test(value)) {
                setCountryCode(value);
              }
            }}
            placeholder="Enter country code (e.g., AU, US)"
            maxLength={2}
            className={styles.countryInput}
          />
          {countryCode?.length === 2 ? (
            <Link
              href={`/movies/${id}/providers?country_code=${countryCode}`}
              className={styles.link}
            >
              &rarr; Providers
            </Link>
          ) : (
            <span className={`${styles.link} ${styles.disabled}`}>
              &rarr; Providers
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
