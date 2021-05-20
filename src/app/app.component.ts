import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { __values } from 'tslib';
import { Links } from './links/links.model';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { json } from 'express';
import { Title } from '@angular/platform-browser';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  links: Links[];
  linksObservable: BehaviorSubject<any>;

  constructor(private http: HttpClient) {  

    this.actualSites().subscribe(sites => this.links = sites);
    this.linksObservable = new BehaviorSubject<Links[]>(this.links);
    this.linksObservable.asObservable().subscribe(result => this.links = result);
    console.log(this.links);
  }
  actualSites(): Observable<Links[]> {
    return this.http.get<Links[]>("http://localhost:2000/sites");

  }
  addLink(titulo, link)  {
    this.addLinkService(titulo, link).subscribe(sitesUpdated => this.links = sitesUpdated);
    this.linksObservable.next(this.links);
    titulo.value = "";
    link.value = "";

    alert("Nuevo Sitio Agregado")
  }
  addLinkService(title, link) {
    let newSite: {};
    newSite = {"titulo": title.value,"link":link.value,"likes":0,"dislikes":0};
    console.log(newSite);
    return this.http.post<any>("http://localhost:2000/sites", newSite);

  }
  
}
