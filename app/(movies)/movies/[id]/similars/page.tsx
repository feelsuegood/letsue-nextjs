import MovieSimilar from "../../../../../components/movie-similar";

interface ISimilar {
  params: Promise<{ id: string }>;
}

export default async function SimilarPage({ params }: ISimilar) {
  const { id } = await params;
  return <MovieSimilar id={id} />;
}
