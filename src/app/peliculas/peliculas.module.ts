import { PeliculasComponent } from "./components/peliculas/peliculas.component";
import { PeliculasRoutingModule } from "./peliculas-routing.module";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {
  NativeScriptCommonModule,
  NativeScriptHttpClientModule,
} from "@nativescript/angular";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    NativeScriptCommonModule,
    NativeScriptHttpClientModule,
    PeliculasRoutingModule,
  ],
  declarations: [PeliculasComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class PeliculasModule {}
