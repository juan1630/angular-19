import { Component, input, output } from '@angular/core';
import { DataService } from '../../common/services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  constructor( private dataService:DataService ) {}
  
  message = input<string>();
  messageOutput = output<string>();

  sendMessage() {
    this.messageOutput.emit('from output')
  }

  changeMessageService() {
    this.dataService.changeMessage(true)
  }
}
