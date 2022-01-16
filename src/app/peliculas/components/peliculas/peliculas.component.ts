import {
  IMoviesNowPlaying,
  IPopularMovies,
} from "./../../shared/interfaces/movieInterface";
import { Component, OnInit } from "@angular/core";
import { PeliculasService } from "../../shared/services/peliculas.service";
@Component({
  selector: "ns-peliculas",
  templateUrl: "./peliculas.component.html",
  styleUrls: ["./peliculas.component.css"],
})
export class PeliculasComponent implements OnInit {
  moviesNowPlaying: IMoviesNowPlaying | undefined;
  moviesPopular: IPopularMovies | undefined;
  constructor(private peliculasService: PeliculasService) {
    this.peliculasService.moviesNowPlaying.subscribe({
      next: (e) => (this.moviesNowPlaying = e),
      error: (err) => console.log(err),
    });
    this.peliculasService.popularMovies.subscribe({
      next: (e) => (this.moviesPopular = e),
      error: (err) => console.log(err),
    });
  }

  ngOnInit(): void {}
}
