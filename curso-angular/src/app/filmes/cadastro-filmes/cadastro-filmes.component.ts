import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { Router, ActivatedRoute } from "@angular/router";
import { ValidateInputsService } from "src/app/shared/components/campos/validate-inputs.service";
import { Film } from "src/app/shared/models/film";
import { AlertComponent } from "src/app/shared/components/alert/alert.component";
import { FilmsService } from "src/app/core/films.service";

@Component({
  selector: "dio-cadastro-filmes",
  templateUrl: "./cadastro-filmes.component.html",
  styleUrls: ["./cadastro-filmes.component.scss"]
})
export class CadastroFilmesComponent implements OnInit {
  cadastro: FormGroup;
  genders: Array<string>;
  id: number;

  constructor(
    public validate: ValidateInputsService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private filmService: FilmsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];

    if (this.id) {
      this.filmService
        .show(this.id)
        .subscribe((film: Film) => this.setupData(film));
    } else {
      this.setupData(this.createNullFilm());
    }

    this.genders = [
      "Ação",
      "Romance",
      "Aventura",
      "Terror",
      "Ficção Cientifica",
      "Comedia",
      "Drama"
    ];
  }

  get f() {
    return this.cadastro.controls;
  }

  public submit(): void {
    this.cadastro.markAllAsTouched();
    if (this.cadastro.invalid) {
      return;
    }

    const film = this.cadastro.getRawValue() as Film;
    this.save(film);
  }

  public resetForm(): void {
    this.cadastro.reset();
  }

  private save(film: Film): void {
    this.filmService.save(film).subscribe(
      () => {
        const dialogRef = this.dialog.open(AlertComponent, {
          data: {
            title: "Sucesso!",
            description: "Seu registro foi cadastrado com sucesso!",
            btnSuccess: "Ir para a listagem",
            btnCancel: "Cadastrar novo filme",
            btnColorSuccess: "accent",
            btnColorCancel: "primary",
            hasBtnClose: true
          }
        });
        dialogRef.afterClosed().subscribe((option: boolean) => {
          if (option) {
            this.router.navigateByUrl("filmes");
          } else {
            this.resetForm();
          }
        });
      },
      () => {
        this.dialog.open(AlertComponent, {
          data: {
            title: "Erro!",
            description: "Não foi possivel cadastrar esse registro!",
            btnSuccess: "Fechar",
            btnColorSuccess: "warn",
            hasBtnClose: false
          }
        });
      }
    );
  }

  private setupData(film: Film): void {
    this.cadastro = this.formBuilder.group({
      title: [
        film.title,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(256)
        ]
      ],
      urlPhoto: [film.urlPhoto, [Validators.minLength(10)]],
      releseDate: [film.releseDate, [Validators.required]],
      description: [film.description],
      imdbRating: [
        film.imdbRating,
        [Validators.required, Validators.min(0), Validators.max(10)]
      ],
      imdbUrl: [film.imdbUrl, [Validators.minLength(10)]],
      gender: [film.gender, [Validators.required]]
    });
  }

  private createNullFilm(): Film {
    return {
      id: null,
      title: null,
      urlPhoto: null,
      releseDate: null,
      description: null,
      imdbRating: null,
      imdbUrl: null,
      gender: null
    };
  }
}
