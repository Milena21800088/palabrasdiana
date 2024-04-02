import { Component, Input, OnInit,  } from '@angular/core';


@Component({
  selector: 'app-fila',
  templateUrl: './fila.component.html',
  styleUrls: ['./fila.component.scss'],
})
export class FilaComponent  implements OnInit {
  @Input() palabra!: string
letras: any;
letra: any; 

  constructor() { }

  ngOnInit() {

    console.log(this.palabra)
    return 0
  }

}
