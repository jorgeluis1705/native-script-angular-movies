import { Result } from "./../../shared/interfaces/movieInterface";
import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "ns-radlistpeliculas",
  templateUrl: "./radlistpeliculas.component.html",
  styleUrls: ["./radlistpeliculas.component.css"],
})
export class RadlistpeliculasComponent implements OnInit {
  @Input("movies") moviesInput: Result[];
  @Input("hg") height: number = 250;
  @Input("tl") title: string;
  constructor(private route: Router) {}
  ngOnInit(): void {}
  onTap(id: string) {
    this.route.navigate(["/home/", id]);
  }
}
