import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jugar',
  templateUrl: './jugar.page.html',
  styleUrls: ['./jugar.page.scss'],
})
export class Jugarpage implements OnInit{
  
enviar() {
throw new Error('Method not implemented.');
}
    public id: number= 0
    public nivel: any = ''
    public opciones: any  =[
      {id: 1, name: 'Fácil', opc: 7,  color: 'success'},
      {id: 2, name: 'Normal', opc: 5,  color: 'warning'},
      {id: 3, name: 'Difícil', opc: 2,  color: 'secondary'},
    ]
    
    public numfilas: number [] = []
    

    public palabras:  string [] =[
    'abaco', 'abajo', 'abano', 'abaño', 'abeja', 'cacao',  'dando', 'cacao', 'edita', 'fajar', 'educa', 'gafas'

    ]
    public palabra: string = ''
    public letras: string[] = []
jugador: any;

   
    constructor(
    public activedRoute: ActivatedRoute
  ) { }
    
  ngOnInit() {
    this.id = this.activedRoute.snapshot.params['id']
    this.nivel = this.opciones.find((item: any)  => item.id == this.id)
    this.numfilas = Array(this.nivel.opc).fill(0).map((x,i)=>i);
    

   const rand = Math.ceil(Math.random()*this.palabras.length)
   this.palabra = this.palabras[rand]
   this.letras = this.palabra.split('')
    
   
   return 0


  }

}
