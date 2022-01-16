import { Result } from "./../../shared/interfaces/movieInterface";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "ns-radlistpeliculas",
  templateUrl: "./radlistpeliculas.component.html",
  styleUrls: ["./radlistpeliculas.component.css"],
})
export class RadlistpeliculasComponent implements OnInit {
  @Input("movies") moviesInput: Result[];
  constructor() {}

  ngOnInit(): void {}
}