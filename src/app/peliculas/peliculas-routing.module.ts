import { PeliculasDetailsComponent } from "./components/peliculas-details/peliculas-details.component";
import { PeliculasComponent } from "./components/peliculas/peliculas.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

const routes: Routes = [
  {
    path: "",
    component: PeliculasComponent,
  },
  {
    path: ":id",
    component: PeliculasDetailsComponent,
  },
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class PeliculasRoutingModule {}
