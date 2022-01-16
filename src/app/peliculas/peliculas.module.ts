import { PeliculasComponent } from "./components/peliculas/peliculas.component";
import { PeliculasRoutingModule } from "./peliculas-routing.module";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {
  NativeScriptCommonModule,
  NativeScriptHttpClientModule,
} from "@nativescript/angular";
import { CommonModule } from "@angular/common";
import { PeliculasDetailsComponent } from "./components/peliculas-details/peliculas-details.component";
import { PeliculaCardComponent } from "./components/pelicula-card/pelicula-card.component";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { RadlistpeliculasComponent } from './components/radlistpeliculas/radlistpeliculas.component';

@NgModule({
  imports: [
    CommonModule,
    NativeScriptCommonModule,
    NativeScriptHttpClientModule,
    PeliculasRoutingModule,
    NativeScriptUIListViewModule,
  ],
  declarations: [
    PeliculasComponent,
    PeliculasDetailsComponent,
    PeliculaCardComponent,
    RadlistpeliculasComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class PeliculasModule {}
