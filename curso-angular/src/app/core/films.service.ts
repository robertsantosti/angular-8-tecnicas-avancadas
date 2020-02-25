import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
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

  get(page: number, quant: number): Observable<Film[]> {
    let httpParams = new HttpParams();
    httpParams = httpParams.set("_page", page.toString());
    httpParams = httpParams.set("_limit", quant.toString());
    return this.http.get<Film[]>(url, { params: httpParams });
  }
}
