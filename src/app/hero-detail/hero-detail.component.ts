import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {MessageService} from '../message.service';

import { Myip} from '../myip';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  temp: any;


     // передаем конструкотору параметры
  constructor(  private route: ActivatedRoute,
                private heroService: HeroService,
                private messageService: MessageService,
                private location: Location) { }

  goBack(): void {
    this.location.back();
  }


  getHttp_hero(): void {
     // this.getHttp_hero().subscribe(data => this.temp = data);

    this.messageService.add('сообщение');

  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  ngOnInit() {
    this.getHero();
   // this.getHttp_hero();

  }

}
