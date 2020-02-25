import { Component, OnInit } from "@angular/core";
import { FilmsService } from "src/app/core/films.service";
import { Film } from "src/app/shared/models/film";

@Component({
  selector: "dio-listagem-filmes",
  templateUrl: "./listagem-filmes.component.html",
  styleUrls: ["./listagem-filmes.component.scss"]
})
export class ListagemFilmesComponent implements OnInit {
  films: Film[] = [];
  page = 0;
  readonly quant = 4;

  constructor(private filmsService: FilmsService) {}

  ngOnInit(): void {
    this.showFilms();
  }

  onScroll(): void {
    this.showFilms();
  }

  private showFilms(): void {
    this.page++;
    this.filmsService
      .get(this.page, this.quant)
      .subscribe((films: Film[]) => this.films.push(...films));
  }

  open() {}
}
