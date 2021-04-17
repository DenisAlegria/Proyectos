import { Component, OnInit, Input } from '@angular/core';
import { Links } from './links.model';


@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
  @Input() link: Links;


  constructor() {
    //console.log(this.link);
   }

  ngOnInit(): void {
  }

}
