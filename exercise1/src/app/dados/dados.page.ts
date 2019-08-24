import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.page.html',
  styleUrls: ['./dados.page.scss'],
})
export class DadosPage implements OnInit {

  private user : Object;

  private caminho: string;

  constructor() {
    this.caminho = '/assets/icon/favicon.png';

    this.user = {
      nome: 'Magnum Cortez',
      idade: 35,
      telefone: '(14) 12345678',
      email: 'magnumacortez@gmail.com'
    };
  }

  ngOnInit() {
  }

}
