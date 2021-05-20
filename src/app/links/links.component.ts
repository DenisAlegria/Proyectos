import { Component, OnInit, Input, Output } from '@angular/core';
import { Links } from './links.model';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component'

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
  @Input() link: Links;
  @Output() links: Links;
  

  constructor(private http: HttpClient, private obser: AppComponent) {
   
   }

  ngOnInit(): void {
    
  }
  
  votedUp(id){
    this.votedUpService(id).subscribe(result => this.obser.linksObservable.next(result));
  }
  votedDown(id){
    this.votedDownService(id).subscribe(result => this.obser.linksObservable.next(result));
  }
  votedDownService(id){
    let num = JSON.stringify(id);
    return this.http.post<any>('http://localhost:2000/sites/dislike/'+id,num);
  }
  votedUpService(id){
    let num = JSON.stringify(id);
    return this.http.post<any>('http://localhost:2000/sites/like/'+id,num);
  }

}
