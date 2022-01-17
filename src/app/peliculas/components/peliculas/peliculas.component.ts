import {
  IMoviesNowPlaying,
  IPopularMovies,
  ITopRatedMovies,
  IUpcomingMovies,
} from "./../../shared/interfaces/movieInterface";
import { Component, OnInit } from "@angular/core";
import { PeliculasService } from "../../shared/services/peliculas.service";
import { delay, forkJoin } from "rxjs";
@Component({
  selector: "ns-peliculas",
  templateUrl: "./peliculas.component.html",
  styleUrls: ["./peliculas.component.css"],
})
export class PeliculasComponent implements OnInit {
  moviesNowPlaying: IMoviesNowPlaying | undefined;
  moviesPopular: IPopularMovies | undefined;
  moviesTopRated: ITopRatedMovies | undefined;
  moviesUpcoming: IUpcomingMovies | undefined;
  constructor(private peliculasService: PeliculasService) {
    forkJoin([
      this.peliculasService.moviesNowPlaying,
      this.peliculasService.popularMovies,
      this.peliculasService.topRatedMovies,
      this.peliculasService.upcomingMovies,
    ])
      .pipe(delay(1000))
      .subscribe({
        next: (e) => {
          this.moviesNowPlaying = e[0];
          this.moviesPopular = e[1];
          this.moviesTopRated = e[2];
          this.moviesUpcoming = e[3];
        },
      });
  }

  ngOnInit(): void {}
}
