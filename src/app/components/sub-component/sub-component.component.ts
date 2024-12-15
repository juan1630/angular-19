import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../common/services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sub-component',
  imports: [CommonModule],
  templateUrl: './sub-component.component.html',
  styleUrl: './sub-component.component.css'
})
export class SubComponentComponent {

  public subjectMessage$!: Observable<string>;

  constructor(private dataService: DataService) {
    this.subjectMessage$ = this.dataService.messageSubject
  }
}
