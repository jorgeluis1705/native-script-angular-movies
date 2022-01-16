import { Component, OnInit } from "@angular/core";
import { PeliculasService } from "../../shared/services/peliculas.service";
@Component({
  selector: "ns-peliculas",
  templateUrl: "./peliculas.component.html",
  styleUrls: ["./peliculas.component.css"],
})
export class PeliculasComponent implements OnInit {
  constructor(private peliculasService: PeliculasService) {}

  ngOnInit(): void {}
}
