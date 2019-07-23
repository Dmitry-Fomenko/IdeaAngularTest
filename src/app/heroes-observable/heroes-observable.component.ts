import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import {Hero} from '../hero';


@Component({
  selector: 'app-heroes-observable',
  templateUrl: './heroes-observable.component.html',
  styleUrls: ['./heroes-observable.component.css']
})
export class HeroesObservableComponent implements OnInit {

  // делаем метод для класса
  heroes: Hero[];

  MygetHeroesObservable(): void {
    this.heroService.getHeroesObservable()
      .subscribe(heroes => this.heroes = heroes);
  }

  constructor(private heroService: HeroService ) { }


  ngOnInit() {
    this.MygetHeroesObservable();
  }

}
