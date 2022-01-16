import { Input } from "@angular/core";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "ns-pelicula-poster",
  templateUrl: "./pelicula-poster.component.html",
  styleUrls: ["./pelicula-poster.component.css"],
})
export class PeliculaPosterComponent implements OnInit {
  @Input("img") imgimput: string = "";
  constructor() {}

  ngOnInit(): void {}
}
