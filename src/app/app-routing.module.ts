import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";

const routes: Routes = [
  // Update this 👇
  { path: "", redirectTo: "/home", pathMatch: "full" },

  // Add this 👇
  {
    path: "home",
    loadChildren: () =>
      import("./peliculas/peliculas.module").then((m) => m.PeliculasModule),
  },

  { path: "items", component: ItemsComponent },
  { path: "item/:id", component: ItemDetailComponent },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
