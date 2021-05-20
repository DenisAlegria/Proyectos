import { BehaviorSubject } from "rxjs";

export class Links{
    id:number;
    titulo: string;
    link: string;
    likes: number;
    dislikes: number;
    meGustaObservable: BehaviorSubject<any>; 
    noMeGustaObservable: BehaviorSubject<any>; 
    
    constructor(titulo: string, link: string, meGusta?: number, noMeGusta?: number){
        this.titulo = titulo;
        this.link = link;
        this.likes = meGusta || 0;
        this.dislikes = noMeGusta || 0;

        this.meGustaObservable = new BehaviorSubject<any>(this.likes);
        this.meGustaObservable.asObservable().subscribe(result => this.likes = result)

        this.noMeGustaObservable = new BehaviorSubject<any>(this.dislikes);
        this.noMeGustaObservable.asObservable().subscribe(result => this.dislikes = result)
    }

    votoUp(){
        this.likes++;
        this.meGustaObservable.next(this.likes);
    }
    votoDown(){
        this.dislikes++;
        this.noMeGustaObservable.next(this.dislikes);
    }
}