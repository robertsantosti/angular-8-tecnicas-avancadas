import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Film } from "../shared/models/film";

const url = "http://localhost:3000/filmes/";

@Injectable({
  providedIn: "root"
})
export class FilmsService {
  constructor(private http: HttpClient) {}

  save(film: Film): Observable<Film> {
    return this.http.post<Film>(url, film);
  }
}
