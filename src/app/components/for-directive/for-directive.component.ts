import { Component } from '@angular/core';

@Component({
  selector: 'app-for-directive',
  imports: [],
  templateUrl: './for-directive.component.html',
  styleUrl: './for-directive.component.css'
})
export class ForDirectiveComponent {
  tareas:string[] = ['Aprender angular', 'Desarrollar una app'];

  agregarTarea(nuevaTarea:string){
    if(nuevaTarea) {
      this.tareas.push(nuevaTarea);
    }
  }
}
