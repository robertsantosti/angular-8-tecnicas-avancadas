import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { InfiniteScrollModule } from "ngx-infinite-scroll";

import { CadastroFilmesComponent } from "./cadastro-filmes/cadastro-filmes.component";
import { MaterialModule } from "../shared/material/material.module";
import { ListagemFilmesComponent } from "./listagem-filmes/listagem-filmes.component";
import { FieldsModule } from "../shared/components/fields/fields.module";
import { ShowFilmsComponent } from "./show-films/show-films.component";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FieldsModule,
    InfiniteScrollModule
  ],
  declarations: [
    CadastroFilmesComponent,
    ListagemFilmesComponent,
    ShowFilmsComponent
  ]
})
export class FilmesModule {}
