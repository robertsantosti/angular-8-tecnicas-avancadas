import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { FilmsService } from "src/app/core/films.service";
import { Film } from "src/app/shared/models/film";
import { ConfigParams } from "src/app/shared/models/config-params";

@Component({
  selector: "dio-listagem-filmes",
  templateUrl: "./listagem-filmes.component.html",
  styleUrls: ["./listagem-filmes.component.scss"]
})
export class ListagemFilmesComponent implements OnInit {
  films: Film[] = [];
  filterList: FormGroup;
  genders: Array<string>;
  config: ConfigParams = {
    page: 0,
    limit: 4
  };

  constructor(private filmsService: FilmsService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.filterList = this.fb.group({
      text: [""],
      gender: [""]
    });

    this.filterList.get("text").valueChanges.subscribe((val: string) => {
      this.config.search = val;
      this.resetSearch();
    });

    this.filterList.get("gender").valueChanges.subscribe((val: string) => {
      this.config.otherSearch = { type: "gender", value: val };
      this.resetSearch();
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
    this.config.page++;
    this.filmsService
      .get(this.config)
      .subscribe((films: Film[]) => this.films.push(...films));
  }

  private resetSearch(): void {
    this.config.page = 0;
    this.films = [];
    this.showFilms();
  }

  open() {}
}
