import MovieSimilar from "../../../../../components/movie-similar";

interface ISimilar {
  params: { id: string };
}

export default async function SimilarPage({ params }: ISimilar) {
  const { id } = params;
  return <MovieSimilar id={id} />;
}
