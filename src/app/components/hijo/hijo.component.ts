import { Component } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {

  private titulo = 'Titulo del componente hijo';

  // Getter de typescript
  get mostrarHijo () {
    return this.titulo;
  }

  //Get de JS
  getTitulo(){
    return this.titulo;
  }
}
