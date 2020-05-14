import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.page.html',
  styleUrls: ['./amigos.page.scss'],
})
export class AmigosPage implements OnInit {

  amigos = [
    {
      nome: 'Joao de Sousa',
      idade: 19,
      nivelAmizade: 1
    },
    {
      nome: 'Luiz Toffoli',
      idade: 45,
      nivelAmizade: 5
    },
    {
      nome: 'Rosa Lucia',
      idade: 75,
      nivelAmizade: 5
    },
    {
      nome: 'Dias Lewandowski',
      idade: 56,
      nivelAmizade: 3
    },
    {
      nome: 'Gabriel Levi',
      idade: 52,
      nivelAmizade: 4
    },
    {
      nome: 'Petra Gil',
      idade: 40,
      nivelAmizade: 4
    },
    {
      nome: 'Sandra Maia',
      idade: 50,
      nivelAmizade: 1
    }
  ];

  constructor(private actionSheetController: ActionSheetController) {
    console.log(this.amigos);
   }

  ngOnInit() {
    console.log(this.amigos);
  }

  async openActionSheet(nome: string) {
    let botoes = [
      { text: 'Deletar', role: 'destructive', handler: () => this.deleteAmigo(nome) },
      { text: 'Editar' },
      { text: 'Cancelar'}
    ];
    const actionSheet = await this.actionSheetController.create({
      header: 'Ações',
      buttons: botoes
    });

    await actionSheet.present();
  }

  deleteAmigo(nome: string){
    let amigoIndex = this.amigos.findIndex(x => x.nome === nome);
    console.log(amigoIndex);
    this.amigos.splice(amigoIndex, 1);
  }

}
