import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { debounceTime } from "rxjs/operators";
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
  readonly noPicture =
    "https://www.termoparts.com.br/wp-content/uploads/2017/10/no-image.jpg";

  constructor(
    private filmsService: FilmsService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.filterList = this.fb.group({
      text: [""],
      gender: [""]
    });

    this.filterList
      .get("text")
      .valueChanges.pipe(debounceTime(400))
      .subscribe((val: string) => {
        this.config.search = val;
        this.resetSearch();
      });

    this.filterList
      .get("gender")
      .valueChanges.pipe(debounceTime(400))
      .subscribe((val: string) => {
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

  open(id: number): void {
    this.router.navigateByUrl(`/filmes/${id}`);
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
}
