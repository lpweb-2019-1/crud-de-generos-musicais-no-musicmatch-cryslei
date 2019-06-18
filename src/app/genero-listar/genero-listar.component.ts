import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GenerosService } from '../generos.service';

@Component({
  selector: 'app-genero-listar',
  templateUrl: './genero-listar.component.html',
  styleUrls: ['./genero-listar.component.css']
})
export class GeneroListarComponent implements OnInit {
  resultadoExcluir = null;
  generos = null;

  constructor(private router: Router, private generos$: GenerosService) { }

  ngOnInit() {
    this.atualizarLista();
  }
  
  atualizarLista() {
    this.generos$.lista()
      .subscribe(
        lista => this.generos = lista.results
      );
  }
  excluir(genero) {
    if (confirm(`Tem certeza que deseja excluir o artista "${genero.nome}" ?\nEssa ação não é reversível!`)) {
      this.generos$.excluir(genero.id)
        .subscribe(
          _ => {
            this.resultadoExcluir = true;
            this.atualizarLista();
          },
          err => {
            this.resultadoExcluir = err.error;
          }
        )
    }
  }
 
  editar(genero) {
    this.router.navigate(['generos', genero.id, 'editar']);
  }

  consultar(genero) {
    this.router.navigate(['generos', genero.id]);
  }
}