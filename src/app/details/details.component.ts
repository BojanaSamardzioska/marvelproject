import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserComponent } from '../user/user.component';
import { Hero }         from '../hero';
import { HeroService }  from '../hero.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  hero: Hero;
  heroesArray = JSON.parse(localStorage.getItem('name')) || [];

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  favHeroesLocalStorage()
  {
    this.heroesArray.push(this.hero.name);
    console.log(this.heroesArray);
    localStorage.setItem('name', JSON.stringify(this.heroesArray));
  }


}
