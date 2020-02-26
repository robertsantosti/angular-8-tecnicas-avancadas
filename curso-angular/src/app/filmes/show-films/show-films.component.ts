import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FilmsService } from "src/app/core/films.service";
import { Film } from "src/app/shared/models/film";
import { MatDialog } from "@angular/material/dialog";
import { AlertComponent } from "src/app/shared/components/alert/alert.component";

@Component({
  selector: "dio-show-films",
  templateUrl: "./show-films.component.html",
  styleUrls: ["./show-films.component.scss"]
})
export class ShowFilmsComponent implements OnInit {
  film: Film;
  id: number;
  readonly noPicture =
    "https://www.termoparts.com.br/wp-content/uploads/2017/10/no-image.jpg";

  constructor(
    public dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private filmsService: FilmsService
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    this.show();
  }

  delete(): void {
    const dialogRef = this.dialog.open(AlertComponent, {
      data: {
        title: "Você tem certeza que deseja excluir?",
        description:
          "Caso você tenha certceza que deseja excluir, clique no botão OK",
        btnSuccess: "Ok",
        btnCancel: "Fechar",
        btnColorSuccess: "warn",
        btnColorCancel: "primary",
        hasBtnClose: true
      }
    });
    dialogRef.afterClosed().subscribe((option: boolean) => {
      if (option) {
        this.filmsService
          .delete(this.id)
          .subscribe(() => this.router.navigateByUrl("filmes"));
      }
    });
  }

  edit(): void {
    this.router.navigateByUrl(`filmes/cadastro/${this.id}`);
  }

  private show(): void {
    this.filmsService.show(this.id).subscribe((film: Film) => {
      this.film = film;
    });
  }
}
