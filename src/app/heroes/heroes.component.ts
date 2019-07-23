import { Component, OnInit, Input } from '@angular/core';
import { HeroService } from '../hero.service'; // импортируем наш сервис с одним методом
import {Hero} from '../hero';  // импортировал alt + enter
import { HEROES } from '../mock-heroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  SelectedOption: Hero;

  @Input() myinput: string;
  heroes: Hero[];

  heroesTest: Hero[] = HEROES;

 // constructor(private heroService: HeroService) { }
  onSelect(hero: Hero): void {
    this.SelectedOption = hero;
  }

  getHeroes(): void {

    console.log('getHeroes started')
    this.heroes = this.heroService.getHeroes(); // это не работает теперь
  }



  /*
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
   */
//  constructor() { } //закоменрировал так как был другой
  constructor(public heroService: HeroService) { }

  ngOnInit() {
    console.log('test log');
    this.getHeroes();  // выполняем этот метод перед инициализацией класса
  }

}
