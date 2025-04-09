import MovieProvider from "../../../../../components/movie-providers";

interface IProvider {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ country_code: string }>;
}

export default async function ProvidersPage({
  params,
  searchParams,
}: IProvider) {
  const { id } = await params;
  const { country_code } = await searchParams;
  return <MovieProvider id={id} country_code={country_code} />;
}
