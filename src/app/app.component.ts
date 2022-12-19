import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sortapp';


  constructor(private http: HttpClient){

  }

 
  postNumbers(){
    this.http.post('http://localhost:8080/numbers/sort-command',{numberList:[1,5,2,44,22,13,4],sorted:"desc"})
    .subscribe((response) => {
        console.log(response);
    })
  }
}

