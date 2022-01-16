import { CommonModule } from "@angular/common";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {
  NativeScriptHttpClientModule,
  NativeScriptModule,
} from "@nativescript/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { PeliculasModule } from "./peliculas/peliculas.module";

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    CommonModule,
    NativeScriptModule,
    AppRoutingModule,
    PeliculasModule,
    NativeScriptHttpClientModule,
  ],
  declarations: [AppComponent, ItemsComponent, ItemDetailComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
