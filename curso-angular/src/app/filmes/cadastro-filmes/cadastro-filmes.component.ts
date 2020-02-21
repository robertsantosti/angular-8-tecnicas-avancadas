import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'dio-cadastro-filmes',
  templateUrl: './cadastro-filmes.component.html',
  styleUrls: ['./cadastro-filmes.component.scss']
})
export class CadastroFilmesComponent implements OnInit {

  cadastro: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.cadastro = this.formBuilder.group({
      title:['', [Validators.required, Validators.minLength(2), Validators.maxLength(256)]],
      urlPhoto:['', [Validators.minLength(10)]],
      releseDate:['', [Validators.required]],
      description:[''],
      imdbRating:[0, [Validators.required, Validators.min(0), Validators.max(10)]],
      imdbUrl:['', [Validators.minLength(10)]],
      gender:['', [Validators.required]]
    });
  }

  get f() {
    return this.cadastro.controls;
  }

  public save(): void {
    this.cadastro.markAllAsTouched();
    if(this.cadastro.invalid){
      return;
    }

    alert('Sucesso!!\n\n' + JSON.stringify(this.cadastro.value, null, 4));
  }

  public resetForm(): void {
    this.cadastro.reset();
  }

}
