import { IMovieDetails } from "./../../shared/interfaces/movieInterface";
import { PeliculasService } from "./../../shared/services/peliculas.service";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "ns-peliculas-details",
  templateUrl: "./peliculas-details.component.html",
  styleUrls: ["./peliculas-details.component.css"],
})
export class PeliculasDetailsComponent implements OnInit {
  movie: IMovieDetails | undefined;
  constructor(
    private activatedRoute: ActivatedRoute,
    private peliculasService: PeliculasService
  ) {
    this.movie = this.activatedRoute.snapshot.data.movie;
  }

  ngOnInit(): void {}
}
