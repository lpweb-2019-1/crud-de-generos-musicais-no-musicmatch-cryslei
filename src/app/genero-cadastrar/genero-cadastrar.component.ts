import { Component, OnInit } from '@angular/core';
import { GenerosService } from '../generos.service';
import { ValicacaoFormUtilService } from '../valicacao-form-util.service';

@Component({
  selector: 'app-genero-cadastrar',
  templateUrl: './genero-cadastrar.component.html',
  styleUrls: ['./genero-cadastrar.component.css']
})
export class GeneroCadastrarComponent implements OnInit {

  nome = null;

  constructor(private generos$: GenerosService,
    private validacao$: ValicacaoFormUtilService) { }

  ngOnInit() {
  }

  salvar() {
    this.generos$.cadastrar(this.nome)
      .subscribe(
        data => this.validacao$.erro = false,
        err => this.validacao$.erro = err.error
      );
  }

}