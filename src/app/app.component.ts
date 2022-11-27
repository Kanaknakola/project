import { User1 } from './models/User1';
import { Observable } from 'rxjs';
import { ApiService } from './services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Test';
  show: boolean = true;

  userList: Observable<User1[]>;

  constructor(private http: ApiService) {

  }

  submit() {}

  ngOnInit(): void {
     
    console.log('test', this.http.getUser1().subscribe(x => console.log('test1', x)));

    console.log('test2', this.userList);

    this.userList = this.http.getUser1();
    

  }

}
