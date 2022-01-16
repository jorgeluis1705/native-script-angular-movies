import { Component, OnInit } from "@angular/core";
import { PeliculasService } from "../../shared/services/peliculas.service";
@Component({
  selector: "ns-peliculas",
  templateUrl: "./peliculas.component.html",
  styleUrls: ["./peliculas.component.css"],
})
export class PeliculasComponent implements OnInit {
  constructor(private peliculasService: PeliculasService) {
    this.peliculasService.moviesNowPlaying().subscribe({
      next: (e) => console.log(e),
      error: (err) => console.log(err),
    });
  }

  ngOnInit(): void {}
}
