import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
// import { API_URL } from "../../../../lib/constants";

const API_URL = process.env.API_URL;
// const API_URL_V2 = process.env.API_URL_V2

interface IMovie {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: IMovie) {
  const { id } = await params;
  // const response = await fetch(
  //   `${API_URL_V2}/movie_details.json?movie_id=${id}&&with_images=true&with_cast=true`,
  // );
  // const data = await response.json();
  // const movie = data.data.movie;
  const response = await fetch(`${API_URL}/${id}`);
  const movie = await response.json();
  // console.log(movie);
  return {
    title: movie.title,
  };
}

export default async function Movie({ params }: IMovie) {
  const { id } = await params;
  // const response = await fetch(
  //   `${API_URL_V2}/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`,
  // );
  // const data = await response.json();
  // const movie = data.data.movie;
  const response = await fetch(`${API_URL}/${id}`);
  const movie = await response.json();

  return (
    <div>
      <Suspense fallback={<h1 className="loading">Movie Info</h1>}>
        <MovieInfo movie={movie} id={id} />
      </Suspense>
      <Suspense fallback={<h1 className="loading">Movie Videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
