import MovieCredit from "../../../../../components/movie-credit";

export default async function CreditPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return <MovieCredit params={{ id }} />;
}
