import { Component, input, Input, OnInit,  } from '@angular/core';


@Component({
  selector: 'app-celda',
  templateUrl: './celda.component.html',
  styleUrls: ['./celda.component.scss'],
})
export class CeldaComponent  implements OnInit {
  @Input ()palabra!: string
  @Input ()letra!:  string
  public opcion: string = ''
  public clase: string = '' //1. igual verde. 2. naranja. 3. gris 



  constructor() { }

  ngOnInit() {
    return 0

    }
    onComprobar(){
      if(this.opcion==this.letra){
        this.clase = 'acierto'
      } else{
        if (this.palabra.includes(this.opcion)){
          this.clase = 'casi'
        } else{
          this.clase = 'fallo'
        }
      }
    }
      
    }



  



