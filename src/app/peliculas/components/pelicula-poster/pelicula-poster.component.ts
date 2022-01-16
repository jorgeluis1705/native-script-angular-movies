import { ElementRef, Input, ViewChild } from "@angular/core";
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
  @ViewChild("img") img: ElementRef<Image>;
  constructor() {}
  onTap(args: GestureEventData) {
    let view: Image = this.img.nativeElement;

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
