import {
  IMoviesNowPlaying,
  IPopularMovies,
} from "../interfaces/movieInterface";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class PeliculasService {
  baseURL = "https://api.themoviedb.org/3/movie";
  params = {
    api_key: "e9246ebe4f359194f5de8fd11c492702",
    language: "es-ES",
    page: 1,
  };
  constructor(private http: HttpClient) {}

  get moviesNowPlaying(): Observable<IMoviesNowPlaying> {
    return this.http
      .get<IMoviesNowPlaying>(`${this.baseURL}/now_playing`, {
        params: {
          ...this.params,
        },
      })
      .pipe(
        map((res) => ({
          ...res,
          results: res.results.map((e) => ({
            ...e,
            backdrop_path: `https://image.tmdb.org/t/p/w500${e.poster_path}`,
          })),
        }))
      );
  }
  get popularMovies(): Observable<IPopularMovies> {
    return this.http
      .get<IPopularMovies>(`${this.baseURL}/popular`, {
        params: {
          ...this.params,
        },
      })
      .pipe(
        map((res) => ({
          ...res,
          results: res.results.map((e) => ({
            ...e,
            backdrop_path: `https://image.tmdb.org/t/p/w500${e.poster_path}`,
          })),
        }))
      );
  }
}
