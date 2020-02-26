import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Film } from "../shared/models/film";
import { ConfigParams } from "../shared/models/config-params";
import { ConfigParamsService } from "./config-params.service";

const url = "http://localhost:3000/filmes/";

@Injectable({
  providedIn: "root"
})
export class FilmsService {
  constructor(
    private http: HttpClient,
    private configService: ConfigParamsService
  ) {}

  save(film: Film): Observable<Film> {
    return this.http.post<Film>(url, film);
  }

  get(config: ConfigParams): Observable<Film[]> {
    const configParams = this.configService.configurationParams(config);
    return this.http.get<Film[]>(url, { params: configParams });
  }

  show(id: number): Observable<Film> {
    return this.http.get<Film>(url + id);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(url + id);
  }
}
