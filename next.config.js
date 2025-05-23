// const API_KEY = process.env.API_KEY;

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        // source: "/old-blog/123",
        // source: "/old-blog/:path",
        //* if use * -> can render ..blog/12123/comments/123124
        source: "/old-blog/:path*",
        // source: "/new-blog/123",
        // source: "/new-blog/:path",
        destination: "/new-blog/:path*",
        permanent: false,
      },
      {
        source: "/old-news/:path*",
        destination: "/new-news/:path*",
        permanent: false,
      },
    ];
  },

  //! can't use rewrites because of api authentication changes
  //! got 'Host not permitted' response
  //   async rewrites() {
  //     return [
  //       {
  //         source: "/api/movies",
  //         destination: `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${API_KEY}`,
  //       },
  //     ];
  //   },
};
