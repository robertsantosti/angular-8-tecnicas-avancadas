import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
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
  filterList: FormGroup;
  genders: Array<string>;
  readonly quant = 4;

  constructor(private filmsService: FilmsService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.filterList = this.fb.group({
      text: [""],
      gender: [""]
    });

    this.genders = [
      "Ação",
      "Romance",
      "Aventura",
      "Terror",
      "Ficção Cientifica",
      "Comedia",
      "Drama"
    ];

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
