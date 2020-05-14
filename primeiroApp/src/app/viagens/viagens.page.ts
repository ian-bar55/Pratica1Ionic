import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viagens',
  templateUrl: './viagens.page.html',
  styleUrls: ['./viagens.page.scss'],
})
export class ViagensPage implements OnInit {

  viagens = [
    {
      local: 'Porto de Galinhas',
      descricao: 'Jardins do Porto',
      data: '20/09/2020',
      imagem: 'https://tools-images.services.cvc.com.br/resize?width=1175&height=475&type=auto&quality=80&url=https://omni-img-server-pull.services.cvc.com.br/Images/3009/Property/36968.jpeg'
    },
    {
      local: 'Rio de Janeiro',
      descricao: 'Atlântico Travel',
      data: '11/12/2020',
      imagem: 'https://tools-images.services.cvc.com.br/resize?width=1175&height=475&type=auto&quality=80&url=https://omni-img-server-pull.services.cvc.com.br/Images/255/Property/2325.jpg'
    },
    {
      local: 'Orlando',
      descricao: 'Comfort Inn International',
      data: '09/01/2021',
      imagem: 'https://tools-images.services.cvc.com.br/resize?width=820&height=510&url=https://omni-img-server-pull.services.cvc.com.br/Images/574/Property/6731.jpg&type=auto&quality=70'
    },
    {
      local: 'Porto Seguro',
      descricao: 'Saindo de São Paulo',
      data: '20/12/2020',
      imagem: 'https://cms.services.cvc.com.br/sites/cvc/files/2016-10/arraial-d-ajuda-bahia.jpg'
    },
    {
      local: 'Praia do Forte',
      descricao: 'Saindo de Salvador',
      data: '15/10/2020',
      imagem: 'https://cms.services.cvc.com.br/sites/cvc/files/2016-10/praia-do-forte-bahia_2.jpg'
    },
    {
      local: 'Ilhéus',
      descricao: 'Vistas maravilhosas',
      data: '01/09/2020',
      imagem: 'https://cms.services.cvc.com.br/sites/cvc/files/2016-10/ilheus-centro-bahia_5.jpg'
    },
    {
      local: 'Costas do Sauípe',
      descricao: 'O maior complexo hoteleiro do país',
      data: '01/01/2020',
      imagem: 'https://cms.services.cvc.com.br/sites/cvc/files/2016-10/costa-do-sauipe-bahia_8.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
