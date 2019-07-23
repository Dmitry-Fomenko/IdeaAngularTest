import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes'; // подключаем заполненный класс HEROES
import { Observable, of } from 'rxjs';    // добавили
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // for http
import { Myip} from './myip';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

       // создаем переменную temp  тима объекта hero
  temp: Hero[];
  // *********************** for http *****************************
  private heroesUrl = 'localhost:8080/servlet-test/simple';  // URL to web api

  private urlMyip = 'http://localhost:8080/servlet-test';



   private mainip: Myip[] = [];
   private error: any;
   private res: string;
  getHttpHeroes(): Observable<string> {
    // getHttpHeroes(): Observable<Hero[]> {

   // this.http.get <Hero[]>(this.heroesUrl);
    this.http.get <string>(this.urlMyip).subscribe( data => this.res = data , error  => this.error = error.message);

    this.messageService.add('error : ' + this.error);
    return  this.http.get <string>(this.urlMyip);
  }
  // **************************************************************

    getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  getHeroesObservable(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes'); // воспользовались методом нашего messageservice
    this.messageService.add('Hero.service add message');
    return of(HEROES);
  }

  getHeroes(): Hero[] {   // Hero подключали вверху что бы указать тип классаte
      return HEROES;
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  constructor(
    private http: HttpClient,                   // инжектируем httpClient
    private messageService: MessageService) { } // инжектровали наш messageservice
}
