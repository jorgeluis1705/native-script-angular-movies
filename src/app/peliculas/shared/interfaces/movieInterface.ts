export interface Dates {
  maximum: string;
  minimum: string;
}

export interface Result {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IMoviesNowPlaying {
  dates: Dates;
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}
export interface IPopularMovies {
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}
export interface ITopRatedMovies {
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}
export interface IUpcomingMovies {
  dates: Dates;
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}
