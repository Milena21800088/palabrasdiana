import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  public nivel: number = 0
  public jugador: string = ''
  public opciones: any[] = [
    {id: 1, name: 'Fácil', color: 'success'},
    {id: 1, name: 'Normal', color: 'warning'},
    {id: 1, name: 'Difícil', color: 'secondary'},
  ]
  

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
    return 0
  }
onSelectNivel(id: number){
    this.router.navigate([' / jugar', id])
  console.log(id)
  }
}

