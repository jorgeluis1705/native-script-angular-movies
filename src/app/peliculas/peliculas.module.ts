import { PeliculasComponent } from "./components/peliculas/peliculas.component";
import { PeliculasRoutingModule } from "./peliculas-routing.module";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";

@NgModule({
  imports: [NativeScriptCommonModule, PeliculasRoutingModule],
  declarations: [PeliculasComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class PeliculasModule {}
