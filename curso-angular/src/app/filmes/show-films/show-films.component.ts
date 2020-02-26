import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FilmsService } from "src/app/core/films.service";
import { Film } from "src/app/shared/models/film";

@Component({
  selector: "dio-show-films",
  templateUrl: "./show-films.component.html",
  styleUrls: ["./show-films.component.scss"]
})
export class ShowFilmsComponent implements OnInit {
  film: Film;
  readonly noPicture =
    "https://www.termoparts.com.br/wp-content/uploads/2017/10/no-image.jpg";

  constructor(
    private activatedRoute: ActivatedRoute,
    private filmsService: FilmsService
  ) {}

  ngOnInit() {
    this.show(this.activatedRoute.snapshot.params["id"]);
  }

  private show(id: number): void {
    this.filmsService.show(id).subscribe((film: Film) => {
      this.film = film;
    });
  }
}
