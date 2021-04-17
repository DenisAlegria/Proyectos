import { BehaviorSubject } from "rxjs";

export class Links{
    titulo: string;
    link: string;
    meGusta: number;
    noMeGusta: number;
    meGustaObservable: BehaviorSubject<any>; 
    noMeGustaObservable: BehaviorSubject<any>; 
    
    constructor(titulo: string, link: string, meGusta?: number, noMeGusta?: number){
        this.titulo = titulo;
        this.link = link;
        this.meGusta = meGusta || 0;
        this.noMeGusta = noMeGusta || 0;

        this.meGustaObservable = new BehaviorSubject<any>(this.meGusta);
        this.meGustaObservable.asObservable().subscribe(result => this.meGusta = result)

        this.noMeGustaObservable = new BehaviorSubject<any>(this.noMeGusta);
        this.noMeGustaObservable.asObservable().subscribe(result => this.noMeGusta = result)
    }

    votoUp(){
        this.meGusta++;
        this.meGustaObservable.next(this.meGusta);
    }
    votoDown(){
        this.noMeGusta++;
        this.noMeGustaObservable.next(this.noMeGusta);
    }
}