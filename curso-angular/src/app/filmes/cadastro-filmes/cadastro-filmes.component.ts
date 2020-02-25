import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ValidateInputsService } from "src/app/shared/components/campos/validate-inputs.service";
import { Film } from "src/app/shared/models/film";
import { FilmsService } from "src/app/core/films.service";
import { MatDialog } from "@angular/material/dialog";
import { AlertComponent } from "src/app/shared/components/alert/alert.component";

@Component({
  selector: "dio-cadastro-filmes",
  templateUrl: "./cadastro-filmes.component.html",
  styleUrls: ["./cadastro-filmes.component.scss"]
})
export class CadastroFilmesComponent implements OnInit {
  cadastro: FormGroup;
  genders: Array<string>;

  constructor(
    public validate: ValidateInputsService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private filmService: FilmsService
  ) {}

  ngOnInit() {
    this.cadastro = this.formBuilder.group({
      title: [
        "",
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(256)
        ]
      ],
      urlPhoto: ["", [Validators.minLength(10)]],
      releseDate: ["", [Validators.required]],
      description: [""],
      imdbRating: [
        0,
        [Validators.required, Validators.min(0), Validators.max(10)]
      ],
      imdbUrl: ["", [Validators.minLength(10)]],
      gender: ["", [Validators.required]]
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
            btnSuccess: "Ok",
            btnCancel: "Cancelar",
            btnColor: "primary",
            hasBtnClose: false
          }
        });
      },
      () => {
        alert("Erro");
      }
    );
  }
}
