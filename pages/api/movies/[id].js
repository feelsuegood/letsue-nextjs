const API_KEY = process.env.API_KEY;

export default async function detailAPI(req, res) {
  // console.log(req)
  // console.log(req.query);
  // to check, need to send temp response
  // res.status(200).json({ message: "Checking request object in console" });

  const { id } = req.query;
  try {
    const movie = await (
      await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
    ).json();
    console.log(movie);
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ error: "failed to fetch movie detaiil" });
  }
}
