import { Component, OnInit } from "@angular/core";
import { FilmsService } from "src/app/core/films.service";
import { Film } from "src/app/shared/models/film";

@Component({
  selector: "dio-listagem-filmes",
  templateUrl: "./listagem-filmes.component.html",
  styleUrls: ["./listagem-filmes.component.scss"]
})
export class ListagemFilmesComponent implements OnInit {
  films: Film[];

  constructor(private filmsService: FilmsService) {}

  ngOnInit() {
    this.filmsService.get().subscribe((films: Film[]) => (this.films = films));
  }

  open() {}
}
