import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  usersObservable: Observable<any[]>;
  @ViewChild('list')
  list: any;

  constructor(private db: AngularFireDatabase) {}

  ngOnInit() {
    this.usersObservable = this.db.list('/users').valueChanges();
  }

  save(event) {
    this.db.database.ref('/users').set(this.list.value);
  }
}