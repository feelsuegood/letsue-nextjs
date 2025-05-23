const API_KEY = process.env.API_KEY;

export default async function moviesAPI(req, res) {
  try {
    const { results } = await (
      await fetch(
        `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${API_KEY}`,
      )
    ).json();
    res.status(200).json(results || []);
  } catch (error) {
    res.status(500).json({ error: "failed to fetch movies" });
  }
}
