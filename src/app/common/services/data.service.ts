import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './interfaces/User.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private message: BehaviorSubject<string> = new BehaviorSubject<string>(
    'Hola'
  );

  private showMessage: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  public isShowingMessage = this.showMessage.asObservable();

  constructor(private http: HttpClient) {}

  getPost(): Observable<User> {
    return this.http.get<User>('https://jsonplaceholder.typicode.com/posts/1');
  }

  hideMessage(arg: boolean) {
    this.showMessage.next(arg);
  }

  changeMessage(hideComponent: boolean) {
    this.showMessage.next(hideComponent);
  }

  get messageSubject(): Observable<string> {
    return this.message.asObservable();
  }

  set editMessageSubject(newValue: string) {
    this.message.next(newValue);
  }
}
