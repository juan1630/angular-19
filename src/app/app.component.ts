import { Component, OnInit } from '@angular/core';
import { DataService } from './common/services/data.service';
import { Observable } from 'rxjs';
import { User } from './common/services/interfaces/User.interface';
import { CommonModule } from '@angular/common';
import { SubComponentComponent } from './components/sub-component/sub-component.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './components/child/child.component';
import { HijoComponent } from './components/hijo/hijo.component';
import { IfDirectiveComponent } from './components/if-directive/if-directive.component';
import { LocalReferenceComponent } from './components/local-reference/local-reference.component';
import { ForDirectiveComponent } from './components/for-directive/for-directive.component';
import { StoreComponent } from "./components/store/store.component";

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    SubComponentComponent,
    FormsModule,
    ChildComponent,
    HijoComponent,
    IfDirectiveComponent,
    LocalReferenceComponent,
    ForDirectiveComponent,
    StoreComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'observables';

  public postUser$!: Observable<User>;
  public subjectMessage$!: Observable<string>;
  public subject: string = '';
  public showComponent: boolean = false;

  // !!Cold observable
  constructor(private dataService: DataService) {
    this.subjectMessage$ = this.dataService.messageSubject;
    this.postUser$ = this.dataService.getPost();
  }

  ngOnInit(): void {
    this.dataService.isShowingMessage.subscribe((data) => {
      this.showComponent = data;
    });
  }

  //!! Hot observable
  submit() {
    this.dataService.editMessageSubject = this.subject;
  }

  listenMessage(event: any) {
    console.log(event);
  }
}
