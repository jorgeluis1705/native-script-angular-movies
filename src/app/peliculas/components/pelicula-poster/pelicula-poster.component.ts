import { Input, ViewChild } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import {
  EventData,
  StackLayout,
  Image,
  GestureEventData,
} from "@nativescript/core";
import { Color } from "@nativescript/core";

@Component({
  selector: "ns-pelicula-poster",
  templateUrl: "./pelicula-poster.component.html",
  styleUrls: ["./pelicula-poster.component.css"],
})
export class PeliculaPosterComponent implements OnInit {
  @Input("img") imgimput: string = "";
  constructor() {}
  onTap(args: GestureEventData) {
    let page = <StackLayout>args.object;

    let view: Image = <Image>page.getViewById("lblNS");

    // Get reference to object we want to animate with code
    view
      .animate({
        duration: 60,
        opacity: 0.5,
      })
      .then(() => {
        // Reset animation
        setTimeout(() => {
          view.opacity = 1;
        }, 50);
      });
  }

  ngOnInit(): void {}
}
