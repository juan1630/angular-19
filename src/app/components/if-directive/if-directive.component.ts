import { Component } from '@angular/core';

@Component({
  selector: 'app-if-directive',
  imports: [],
  templateUrl: './if-directive.component.html',
  styleUrl: './if-directive.component.css'
})
export class IfDirectiveComponent {

  isAuthenticated:boolean = false;

  alterAuthenticated() {
    this.isAuthenticated = !this.isAuthenticated;
  }
}
