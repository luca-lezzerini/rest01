import { Articolo } from './articolo';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  articoli: Articolo[] = [];

  constructor(private http: HttpClient) { }

  carica() {
    let oss: Observable<Articolo[]> = this.http.get<Articolo[]>('https://jsonplaceholder.typicode.com/posts');

    oss.subscribe(risposta => {
      console.log(risposta);
      this.articoli = risposta;
    })
  }
}
