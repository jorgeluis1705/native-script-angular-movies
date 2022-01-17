import { PeliculasService } from "./../services/peliculas.service";
import { IMovieDetails } from "./../interfaces/movieInterface";
import { Injectable } from "@angular/core";
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PeliculaResolver implements Resolve<Observable<IMovieDetails>> {
  constructor(private peliculasService: PeliculasService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IMovieDetails> {
    return new Observable<IMovieDetails>((obs) => {
      this.peliculasService.movieDetails(Number(route.params.id)).subscribe({
        next: (res) => {
          const auxMovie: IMovieDetails = {
            ...res,
            backdrop_path: `https://image.tmdb.org/t/p/w500${res.poster_path}`,
          };
          obs.next(auxMovie);
          obs.complete();
        },
        error: (err) => obs.error(err),
      });
    });
  }
}
