import MovieCredit from "../../../../../components/movie-credits";

interface ICredit {
  params: { id: string };
}

export default async function CreditPage({ params }: ICredit) {
  const { id } = await params;
  return <MovieCredit id={id} />;
}
