import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { __values } from 'tslib';
import { Links } from './links/links.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  links: Links[];
  linksObservable:Observable<any>;
  
  constructor() {
    this.links = [new Links('Google', 'https://google.com', 50, 5),
    new Links('Twitter', 'https://twitter.com', 10, 2)];
    
    

  }

  addLink(titulo: HTMLInputElement, link: HTMLInputElement) {
    this.links.push(new Links(titulo.value,link.value));
    titulo.value = "";
    link.value = "";
    return false;
  }
}
