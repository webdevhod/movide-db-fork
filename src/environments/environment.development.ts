export const environment = {
  envName: 'dev',
    //Set Access Token before using movie db
    tmdbAccessToken:
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTAyOGE3MmQyNTg5ZGJhMGFkNDdkMzJhZDAwOWI2ZCIsInN1YiI6IjY1MzVhNDkzOGNmY2M3MDEyYjQwMjJhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.u2yPgSxYJ-KkauhPS2aHF6y-442bdTZQg_Uz_NHpeoo',
  getDiscoverMoviesUrl: 'https://api.themoviedb.org/3/discover/movie',
  getMoviesUrl: 'https://api.themoviedb.org/3/movie/',
  searchMoviesByTitleUrl: 'https://api.themoviedb.org/3/search/movie',
  imagePathUrl: 'https://image.tmdb.org/t/p/',
  getMovieListUrl: 'https://api.themoviedb.org/3/movie/',
  getMovieCreditsUrl: (movie_id: string) =>
    `https://api.themoviedb.org/3/movie/${movie_id}/credits`,
  getTrendingPeopleUrl: (range: string) =>
    `https://api.themoviedb.org/3/trending/person/${range}`,
  getPersonUrl: (person_id: string) =>
    `https://api.themoviedb.org/3/person/${person_id}`,
  getPersonMovieCreditsUrl: (person_id: string) =>
    `https://api.themoviedb.org/3/person/${person_id}/movie_credits`,

  // Movie categories used
  movieListCategories: ['now_playing', 'popular', 'top_rated', 'upcoming']
};
