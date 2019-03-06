import {Component, NgModule, Pipe, PipeTransform} from '@angular/core';
import {Router} from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime, map } from 'rxjs/operators';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {

  constructor(private router: Router, private heroService: HeroService, private fb: FormBuilder) { }

  heroes: Hero[] = [];

  form: FormGroup;

  ngOnInit() {

    this.getHeroes();

    this.form = this.fb.group({
      search2: ['']
    });

    this.form.get('search2').valueChanges.pipe(debounceTime(5000)).subscribe(value => console.log(value));
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  onSubmit() {
    const value = this.form.get('search2').value;

    console.log(value);
    this.router.navigate([`/search/${value}`]);
  }

  title = 'Marvel!';

  /*function sortNumber(a,b) {
    return a - b;
}*/


  editProfile() {
      this.router.navigate(['profile']);
    }

    favHeroes() {
        this.router.navigate(['fav-heroes']);
      }

    sortHero: string = 'ranking.comicCount';
    reverse: boolean = true;
    sort(sortHero){
      this.sortHero = sortHero;
      this.reverse = !this.reverse;
    }
    p: number = 1;


}

@Pipe({ name: 'elements' })
export class ElementsPipe implements PipeTransform {
  transform(value:any) {
    return value.filter((n,i) => i%2==0).map((n,i) => [value[i*2], value[i*2+1]])
  }
}
