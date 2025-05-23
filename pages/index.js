import { useRouter } from "next/router";
import Seo from "../components/Seo";
import Link from "next/link";

export default function Home({ results }) {
  //* Client Side Rendering (CSR): React takes control
  // const [movies, setMovies] = useState();
  // useEffect(() => {
  //   (async () => {
  //     const results = await (await fetch(`/api/movies`)).json();
  //     // console.log(results);
  //     setMovies(results);
  //   })();
  // }, []);
  const router = useRouter();
  const onClick = (id, title) => {
    //* masking url
    // router.push(
    //   {
    //     pathname: `movies/${id}`,
    //     query: {
    //       title,
    //     },
    //   },
    //   `movies/${id}`,
    // );
    //* catch-all url
    router.push(`/movies/${title}/${id}`);
  };
  return (
    <div className="container">
      <Seo title="Home" />
      {/* {!movies && <h5>Loading...</h5>} */}
      {results?.map((movie) => (
        <div
          onClick={() => onClick(movie.id, movie.original_title)}
          className="movie"
          key={movie.id}
        >
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          {/* <Link
            //* masking url
            href={{
              pathname: `movies/${movie.id}`,
              query: {
                title: movie.original_title,
              },
            }}
            as={`movies/${movie.id}`}
          > */}
          {/* catch-all url */}
          <Link href={`/movies/${movie.original_title}/${movie.id}`}>
            <a>
              <h5>{movie.original_title}</h5>
            </a>
          </Link>
        </div>
      ))}
      {/* style */}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

//* this function runs only server side
// user can't see this part
export async function getServerSideProps() {
  const API_KEY = process.env.API_KEY;
  try {
    const { results } = await (
      await fetch(
        `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${API_KEY}`,
      )
    ).json();
    return {
      props: {
        results: results || [],
      },
    };
  } catch (error) {
    console.error("Failed to fetch movies:", error);
    return {
      props: {
        results: [],
      },
    };
  }
}
