import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import {NgModule, Pipe, PipeTransform} from '@angular/core';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  heroes: Hero[] = [];
  query = this.route.snapshot.paramMap.get('query');

  showMore = false;

  numCol = 100 / 3;

  IsHidden= true;

  onClick(){
    this.IsHidden= !this.IsHidden;
    this.showMore = true;
  }


  constructor(private route: ActivatedRoute, private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes.filter(hero => hero.name.toLowerCase().includes(this.query.toLowerCase()));
      });
  }

}
