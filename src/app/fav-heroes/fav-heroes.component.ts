import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { DetailsComponent } from '../details/details.component';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {Router} from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { debounceTime, map } from 'rxjs/operators';
import { Pipe, PipeTransform } from "@angular/core";


@Component({
  selector: 'app-fav-heroes',
  templateUrl: './fav-heroes.component.html',
  styleUrls: ['./fav-heroes.component.css']
})
export class FavHeroesComponent implements OnInit {

  constructor(private router: Router, private heroService: HeroService, private fb: FormBuilder) { }

  heroes : Hero [] = [];

  hero: Hero;

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


  public allHeroes:Array<any> = JSON.parse(localStorage.getItem('name'));


  public allHeroes2:Array<any> = [
 {
   "id": 1009610,
   "aliases": [
     "Ben Reilly",
     "Dusk",
     "Hornet",
     "Peter Parker",
     "Prodigy",
     "Ricochet",
     "Scarlet Spider",
     "Spider-Man",
     "Spiderman",
     "Spidey",
     "Tiger",
     "Wallcrawler",
     "Web-slinger",
     "Webhead"
   ],
   "authors": ["Stan Lee", "Steve Ditko"],
   "description":
     "Bitten by a radioactive spider, high school student Peter Parker gained the speed, strength and powers of a spider. Adopting the name Spider-Man, Peter hoped to start a career using his new abilities. Taught that with great power comes great responsibility, Spidey has vowed to use his powers to help people.",
   "images": {
     "background":
       "http://i.annihil.us/u/prod/marvel/i/mg/6/90/537ba2184e75f.gif",
     "thumbnail":
       "http://i.annihil.us/u/prod/marvel/i/mg/9/30/538cd33e15ab7/standard_xlarge.jpg"
   },
   "mainColor": {
     "blue": 57,
     "green": 31,
     "hexa": "121F39",
     "red": 18
   },
   "name": "Spider-Man",
   "partners": [],
   "powers": [
     "Agility",
     "Genius",
     "Genius-level intellect",
     "Precognitive",
     "Precognitive spider-sense",
     "Speed",
     "Spider-sense",
     "Superhuman strength"
   ],
   "ranking": {
     "comicCount": 2593,
     "eventCount": 29,
     "pageviewCount": 89463,
     "serieCount": 537,
     "storyCount": 4197
   },
   "secretIdentities": ["Peter Benjamin Parker"],
   "species": ["Mutate"],
   "superName": "Spider-Man",
   "teams": [
     "Avengers",
     "Defenders",
     "Fantastic Four",
     "Future Foundation",
     "Heroes for Hire",
     "The New Avengers",
     "X-Mansion"
   ],
   "urls": {
     "marvel": "http://marvel.com/characters/54/spider-man",
     "wikipedia": "https://en.wikipedia.org/wiki/Spider-Man"
   }
 },
 {
   "id": 1009220,
   "aliases": ["Captain America", "Nomad", "Steve Rogers", "The Captain"],
   "authors": ["Jack Kirby", "Joe Simon"],
   "description":
     "Vowing to serve his country any way he could, young Steve Rogers took the super soldier serum to become America's one-man army. Fighting for the red, white and blue for over 60 years, Captain America is the living, breathing symbol of freedom and liberty.",
   "images": {
     "background":
       "http://i.annihil.us/u/prod/marvel/i/mg/9/70/537ba5c73bf82.gif",
     "thumbnail":
       "http://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087/standard_xlarge.jpg"
   },
   "mainColor": {
     "blue": 57,
     "green": 31,
     "hexa": "121F39",
     "red": 18
   },
   "name": "Captain America",
   "partners": [
     "Black Widow",
     "Bucky (James Barnes)",
     "Bucky (Rick Jones)",
     "Bucky (Rikki Barnes)",
     "Demolition Man",
     "Falcon",
     "Free Spirit",
     "Jack Flag",
     "Nomad (Jack Monroe)",
     "Sharon Carter"
   ],
   "powers": [
     "Enhanced mental faculties",
     "Expert marksman",
     "Expert tactician",
     "Field commander",
     "Hand-to-hand combatant",
     "Master martial artist",
     "Master tactician",
     "Peak physical condition",
     "Strategist",
     "Wields"
   ],
   "ranking": {
     "comicCount": 1411,
     "eventCount": 19,
     "pageviewCount": 89978,
     "serieCount": 382,
     "storyCount": 2326
   },
   "secretIdentities": ["Steve", "Steve Rogers", "Steven Rogers"],
   "species": [],
   "superName": "Captain America",
   "teams": [
     "All-Winners Squad",
     "Avengers",
     "Avengers Unity Division",
     "Illuminati",
     "Invaders",
     "Landau, Luckman, and Lake",
     "New Avengers",
     "Rebirth",
     "Redeemers",
     "S.H.I.E.L.D",
     "Secret Avengers",
     "Secret Defenders",
     "U.S. Army"
   ],
   "urls": {
     "marvel": "http://marvel.com/characters/8/captain_america",
     "wikipedia": "https://en.wikipedia.org/wiki/Captain_America"
   }
 },
 {
   "id": 1009351,
   "aliases": [
     "Bruce Banner",
     "David Banner",
     "Doc Green",
     "Green Scar",
     "Horsemen of Apocalypse",
     "Hulk",
     "Jade Giant",
     "Joe Fixit",
     "Sakaarson",
     "The Hulk",
     "The Incredible Hulk",
     "War",
     "World-Breaker"
   ],
   "authors": ["Jack Kirby", "Stan Lee"],
   "description":
     "Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk. An all too often misunderstood hero, the angrier the Hulk gets, the stronger the Hulk gets.",
   "images": {
     "background":
       "http://i.annihil.us/u/prod/marvel/i/mg/c/d0/537bafb19e9f4.gif",
     "thumbnail":
       "http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg"
   },
   "mainColor": {
     "blue": 11,
     "green": 37,
     "hexa": "17250B",
     "red": 23
   },
   "name": "Hulk",
   "partners": [],
   "powers": [
     "Durability",
     "Endurance",
     "Genius-level intellect",
     "Longevity",
     "Stamina"
   ],
   "ranking": {
     "comicCount": 1309,
     "eventCount": 24,
     "pageviewCount": 47858,
     "serieCount": 314,
     "storyCount": 1981
   },
   "secretIdentities": ["Robert Bruce Banner"],
   "species": ["Mutate"],
   "superName": "Hulk",
   "teams": [
     "Avengers",
     "Defenders",
     "Fantastic Four",
     "Horsemen of Apocalypse",
     "Hulkbusters",
     "Illuminati",
     "Pantheon",
     "S.H.I.E.L.D",
     "Secret Avengers",
     "The Mighty Avengers",
     "The New Avengers",
     "The Order",
     "Titans Three",
     "Warbound"
   ],
   "urls": {
     "marvel": "http://marvel.com/characters/25/hulk",
     "wikipedia": "https://en.wikipedia.org/wiki/Hulk_(comics)"
   }
 },
 {
   "id": 1009368,
   "aliases": ["Iron Man", "The Invincible Iron Man", "Tony Stark"],
   "authors": ["Don Heck", "Jack Kirby", "Larry Lieber", "Stan Lee"],
   "description":
     "Wounded, captured and forced to build a weapon by his enemies, billionaire industrialist Tony Stark instead created an advanced suit of armor to save his life and escape captivity. Now with a new outlook on life, Tony uses his money and intelligence to make the world a safer, better place as Iron Man.",
   "images": {
     "background":
       "http://x.annihil.us/u/prod/marvel/i/mg/c/90/537bb1f94fa4f.gif",
     "thumbnail":
       "http://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6/standard_xlarge.jpg"
   },
   "mainColor": {
     "blue": 6,
     "green": 6,
     "hexa": "3F0606",
     "red": 63
   },
   "name": "Iron Man",
   "partners": ["Pepper Potts", "Rescue", "War Machine"],
   "powers": [
     "Businessperson",
     "Cyberpathic",
     "Durability",
     "Energy repulsors",
     "Engineer",
     "Genius",
     "Genius-level intellect",
     "Life support",
     "Missile",
     "Missiles",
     "Powered armored suit",
     "Regenerative",
     "Regenerative life support",
     "Superhuman strength",
     "Via"
   ],
   "ranking": {
     "comicCount": 1980,
     "eventCount": 24,
     "pageviewCount": 133366,
     "serieCount": 447,
     "storyCount": 2903
   },
   "secretIdentities": ["Anthony Edward Stark", "Tony"],
   "species": ["Human"],
   "superName": "Iron Man",
   "teams": [
     "Avengers",
     "Department of Defense",
     "Force Works",
     "Guardians of the Galaxy",
     "Guardians of the Galaxy (2008 team)",
     "Illuminati",
     "New Avengers",
     "S.H.I.E.L.D",
     "Stark Industries",
     "Stark Resilient",
     "The Mighty Avengers",
     "The New Avengers",
     "Thunderbolts",
     "United States Department of Defense",
     "West Coast Avengers"
   ],
   "urls": {
     "marvel": "http://marvel.com/characters/29/iron_man",
     "wikipedia": "https://en.wikipedia.org/wiki/Iron_Man"
   }
 },
 {
   "id": 1009282,
   "aliases": ["Doctor", "Stephen Sanders", "Strange", "Vincent Stevens"],
   "authors": ["Steve Ditko"],
   "description":
     "Doctor Stephen Vincent Strange, best known under his alias Doctor Strange, is a fictional character appearing in American comic books published by Marvel Comics.",
   "images": {
     "background": null,
     "thumbnail":
       "http://i.annihil.us/u/prod/marvel/i/mg/5/f0/5261a85a501fe/standard_xlarge.jpg"
   },
   "mainColor": null,
   "name": "Doctor Strange",
   "partners": [],
   "powers": [
     "Genius-level intellect",
     "Magic",
     "Mastery of",
     "Mastery of magic",
     "Medical science",
     "Trained in"
   ],
   "ranking": {
     "comicCount": 418,
     "eventCount": 13,
     "pageviewCount": 157376,
     "serieCount": 125,
     "storyCount": 568
   },
   "secretIdentities": ["Stephen Vincent Strange"],
   "species": [],
   "superName": "Doctor Strange",
   "teams": [
     "Defenders",
     "Illuminati",
     "Midnight Sons",
     "New Avengers",
     "The New Avengers",
     "The Order"
   ],
   "urls": {
     "marvel": null,
     "wikipedia": "https://en.wikipedia.org/wiki/Doctor_Strange"
   }
 },
 {
   "id": 1009261,
   "aliases": [
     "Binary",
     "Captail Marvel",
     "Captain Marvel",
     "Catherine Donovan",
     "Ms. Marvel",
     "Warbird"
   ],
   "authors": ["Gene Colan", "Roy Thomas"],
   "description":
     "Carol Danvers is a fictional character that appears in comic books published by Marvel Comics.",
   "images": {
     "background": null,
     "thumbnail":
       "http://i.annihil.us/u/prod/marvel/i/mg/6/80/5269608c1be7a/standard_xlarge.jpg"
   },
   "mainColor": null,
   "name": "Captain Marvel (Carol Danvers)",
   "partners": ["Anya Corazon", "Araña"],
   "powers": [
     "Absorption",
     "Durability",
     "Energy projection",
     "Flight",
     "Speed",
     "Stamina",
     "Superhuman strength"
   ],
   "ranking": {
     "comicCount": 321,
     "eventCount": 14,
     "pageviewCount": 66074,
     "serieCount": 82,
     "storyCount": 453
   },
   "secretIdentities": ["Carol Susan Jane Danvers"],
   "species": ["Human", "Kree hybrid"],
   "superName": "Captain Marvel",
   "teams": [
     "A-Force",
     "Alpha Flight Space Program",
     "Avengers",
     "Defenders",
     "Defenders for a Day",
     "Guardians of the Galaxy",
     "Guardians of the Galaxy (2008 team)",
     "Lightning Storm",
     "Mighty Avengers",
     "NASA",
     "New Avengers",
     "S.H.I.E.L.D",
     "Starjammers",
     "The Mighty Avengers",
     "The New Avengers",
     "Ultimates",
     "Ultimates (2015 team)",
     "United States Air Force",
     "X-Men"
   ],
   "urls": {
     "marvel": "http://marvel.com/characters/9/captain_marvel",
     "wikipedia": "https://en.wikipedia.org/wiki/Carol_Danvers"
   }
 },
 {
   "id": 1009629,
   "aliases": [
     "Beautiful Windrider",
     "Goddess",
     "High Priestess",
     "Le Reine Storm",
     "Mistress of the Elements",
     "Mutate #20",
     "Ororo Iquadi T'Challa",
     "Ororo Komos Wakandas",
     "Ororo Munroe",
     "Princess of N'Dare",
     "Queen of Wakanda",
     "Storm",
     "The Weather Witch"
   ],
   "authors": ["Dave Cockrum", "Len Wein"],
   "description":
     "Ororo Monroe is the descendant of an ancient line of African priestesses, all of whom have white hair, blue eyes, and the potential to wield magic.",
   "images": {
     "background":
       "http://x.annihil.us/u/prod/marvel/i/mg/6/90/537bc6087eb62.gif",
     "thumbnail":
       "http://x.annihil.us/u/prod/marvel/i/mg/c/c0/537bc5db7c77d/standard_xlarge.jpg"
   },
   "mainColor": {
     "blue": 42,
     "green": 25,
     "hexa": "23192A",
     "red": 35
   },
   "name": "Storm",
   "partners": ["Black Panther", "Forge"],
   "powers": ["Ecological empathy", "Flight", "Weather manipulation"],
   "ranking": {
     "comicCount": 599,
     "eventCount": 21,
     "pageviewCount": 30624,
     "serieCount": 154,
     "storyCount": 695
   },
   "secretIdentities": ["Ororo Munroe"],
   "species": ["Mutant"],
   "superName": "Storm",
   "teams": [
     "Avengers",
     "Fantastic Four",
     "Hellfire Club",
     "Lady Liberators",
     "Morlocks",
     "The Twelve",
     "X-Men",
     "X-Treme Sanctions Executive",
     "X-Treme X-Men"
   ],
   "urls": {
     "marvel": "http://marvel.com/characters/57/storm",
     "wikipedia": "https://en.wikipedia.org/wiki/Storm_(Marvel_Comics)"
   }
 },
 {
   "id": 1009189,
   "aliases": [
     "Black Widow",
     "Laura Matthers",
     "Mary Farrell",
     "Natalia Alianovna Romanova",
     "Natalie Rushman",
     "Natasha Romanoff",
     "Oktober",
     "Yelena Belova"
   ],
   "authors": ["Don Heck", "Don Rico", "Stan Lee"],
   "description": null,
   "images": {
     "background":
       "http://i.annihil.us/u/prod/marvel/i/mg/5/e0/537ba452ba274.gif",
     "thumbnail":
       "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Black_Widow_1.jpg/250px-Black_Widow_1.jpg"
   },
   "mainColor": {
     "blue": 6,
     "green": 6,
     "hexa": "3F0606",
     "red": 63
   },
   "name": "Black Widow (Natasha Romanova)",
   "partners": [
     "Boris Turgenov",
     "Captain America",
     "Daredevil",
     "Hawkeye",
     "Winter Soldier"
   ],
   "powers": [
     "Enhanced immune system",
     "Expert",
     "Explosives",
     "Grappling hook",
     "Knock out gas",
     "Martial artist",
     "Radio transmitter",
     "Secret agent",
     "Slowed aging",
     "Tactician",
     "Taser",
     "Tear gas pellets"
   ],
   "ranking": {
     "comicCount": 294,
     "eventCount": 8,
     "pageviewCount": 21296,
     "serieCount": 125,
     "storyCount": 307
   },
   "secretIdentities": ["Natalia Alianovna Romanova", "Natasha"],
   "species": [],
   "superName": "Black Widow",
   "teams": [
     "Avengers",
     "Champions",
     "Heroes for Hire",
     "KGB",
     "Lady Liberators",
     "Marvel Knights",
     "Mighty Avengers",
     "S.H.I.E.L.D",
     "Secret Avengers",
     "Thunderbolts"
   ],
   "urls": {
     "marvel": "http://marvel.com/characters/6/black_widow",
     "wikipedia":
       "https://en.wikipedia.org/wiki/Black_Widow_(Natasha_Romanova)"
   }
 },
 {
   "id": 1009664,
   "aliases": [
     "Daniele Neri",
     "Don Blake",
     "Donald Blake",
     "Dr. Donald Blake",
     "Eric Masterson",
     "Jake Olson",
     "Odinson",
     "Siegfried",
     "Siegmund",
     "Sigurd Jarlson",
     "Thor",
     "Thor (Marel Comics)",
     "Thor Odinson"
   ],
   "authors": ["Jack Kirby", "Larry Lieber", "Stan Lee"],
   "description":
     "As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate.  He's self-assured, and he would never, ever stop fighting for a worthwhile cause.",
   "images": {
     "background":
       "//marvel.com/i/images/juggernaut/defaultcharacterdetaillineart.gif",
     "thumbnail":
       "http://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350/standard_xlarge.jpg"
   },
   "mainColor": null,
   "name": "Thor",
   "partners": [],
   "powers": [
     "Abilities via",
     "Electric manipulation",
     "Endurance",
     "Flight",
     "Longevity",
     "Mjolnir",
     "Speed",
     "Superhuman strength",
     "Weather manipulation"
   ],
   "ranking": {
     "comicCount": 1247,
     "eventCount": 21,
     "pageviewCount": 32216,
     "serieCount": 303,
     "storyCount": 1961
   },
   "secretIdentities": ["Thor Odinson"],
   "species": ["Asgardian"],
   "superName": "Thor",
   "teams": [
     "Avengers",
     "Avengers Unity Squad",
     "God Squad",
     "Thor Corps",
     "Uncanny Avengers",
     "Warriors Three"
   ],
   "urls": {
     "marvel": "http://marvel.com/characters/1009664/thor/featured",
     "wikipedia": "https://en.wikipedia.org/wiki/Thor_(Marvel_Comics)"
   }
 },
 {
   "id": 1009652,
   "aliases": ["Avatar of Death", "Thanos", "The Mad Titan"],
   "authors": ["Jim Starlin"],
   "description":
     "The Mad Titan Thanos, a melancholy, brooding individual, consumed with the concept of death, sought out personal power and increased strength, endowing himself with cybernetic implants until he became more powerful than any of his brethren.",
   "images": {
     "background":
       "http://x.annihil.us/u/prod/marvel/i/mg/2/50/537bc6be6cafc.gif",
     "thumbnail":
       "http://x.annihil.us/u/prod/marvel/i/mg/a/10/537bc68747ccf/standard_xlarge.jpg"
   },
   "mainColor": {
     "blue": 42,
     "green": 25,
     "hexa": "23192A",
     "red": 35
   },
   "name": "Thanos",
   "partners": [],
   "powers": [
     "Durability",
     "Endurance",
     "Energy manipulation",
     "Longevity",
     "Superhuman strength",
     "Telekinesis",
     "Teleportation"
   ],
   "ranking": {
     "comicCount": 75,
     "eventCount": 4,
     "pageviewCount": 66741,
     "serieCount": 41,
     "storyCount": 72
   },
   "secretIdentities": [],
   "species": ["Eternals"],
   "superName": "Thanos",
   "teams": [
     "Annihilation",
     "Annihilation Wave",
     "Cabal",
     "Cull Obsidian",
     "Cull Obsidian (The Black Order)",
     "Defenders",
     "Infinity Watch",
     "Secret Defenders"
   ],
   "urls": {
     "marvel": "http://marvel.com/characters/58/thanos",
     "wikipedia": "https://en.wikipedia.org/wiki/Thanos"
   }
 },
 {
   "id": 1009718,
   "aliases": [
     "Agent Ten",
     "Black Dragon",
     "Captain Terror",
     "Death",
     "Emilio Garra",
     "Experiment X",
     "James Howlett",
     "Jim Logan",
     "John Logan",
     "Logan",
     "Logan Howlett",
     "Mai' keth",
     "Mutate #9601",
     "Patch",
     "Peter Richards",
     "Weapon Chi",
     "Weapon X",
     "Weapon X (Ten)",
     "Wolverine"
   ],
   "authors": [
     "Herb Trimpe",
     "John Romita Sr.",
     "John Romita, Sr.",
     "Len Wein",
     "Roy Thomas"
   ],
   "description":
     "Born with super-human senses and the power to heal from almost any wound, Wolverine was captured by a secret Canadian organization and given an unbreakable skeleton and claws. Treated like an animal, it took years for him to control himself. Now, he's a premiere member of both the X-Men and the Avengers.",
   "images": {
     "background":
       "http://i.annihil.us/u/prod/marvel/i/mg/9/40/537bcb2289d3a.gif",
     "thumbnail":
       "http://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf/standard_xlarge.jpg"
   },
   "mainColor": {
     "blue": 9,
     "green": 36,
     "hexa": "3A2409",
     "red": 58
   },
   "name": "Wolverine",
   "partners": [],
   "powers": [
     "Adamantium",
     "Animal-like attributes",
     "Extended",
     "Extended longevity",
     "Healing factor",
     "Longevity",
     "Master martial artist",
     "Reflexes",
     "Regenerative",
     "Retractable claws",
     "Superhuman senses"
   ],
   "ranking": {
     "comicCount": 1816,
     "eventCount": 33,
     "pageviewCount": 53754,
     "serieCount": 440,
     "storyCount": 2468
   },
   "secretIdentities": ["James Howlett"],
   "species": ["Mutant"],
   "superName": "Wolverine",
   "teams": [
     "Alpha Flight",
     "Avengers",
     "Canadian Army",
     "Defenders",
     "Features of the Marvel Universe",
     "Horsemen of Apocalypse",
     "Hydra",
     "Lake",
     "Landau",
     "Luckman",
     "S.H.I.E.L.D",
     "Team X",
     "The Hand",
     "The New Avengers",
     "Uncanny Avengers",
     "Weapon Plus",
     "Weapon X",
     "X-Force",
     "X-Mansion",
     "X-Men",
     "X-Treme Sanctions Executive"
   ],
   "urls": {
     "marvel": "http://marvel.com/characters/66/wolverine",
     "wikipedia": "https://en.wikipedia.org/wiki/Wolverine_(character)"
   }
 },
 {
   "id": 1009262,
   "aliases": ["Daredevil", "Matt Murdock", "Matthew Michael Murdock"],
   "authors": ["Bill Everett", "Stan Lee"],
   "description":
     "Abandoned by his mother, Matt Murdock was raised by his father, boxer \"Battling Jack\" Murdock, in Hell's Kitchen. Realizing that rules were needed to prevent people from behaving badly, young Matt decided to study law; however, when he saved a man from an oncoming truck, it spilled a radioactive cargo that rendered Matt blind while enhancing his remaining senses. Under the harsh tutelage of blind martial arts master Stick, Matt mastered his heightened senses and became a formidable fighter.",
   "images": {
     "background":
       "http://x.annihil.us/u/prod/marvel/i/mg/8/b0/537ba702ad5b3.gif",
     "thumbnail":
       "http://i.annihil.us/u/prod/marvel/i/mg/6/90/537ba6d49472b/standard_xlarge.jpg"
   },
   "mainColor": {
     "blue": 6,
     "green": 6,
     "hexa": "3F0606",
     "red": 63
   },
   "name": "Daredevil",
   "partners": ["Black Widow", "Black Widow (Natalia Romanova)", "Elektra"],
   "powers": [
     "Club",
     "Hand-to-hand combatant",
     "Highly skilled acrobat",
     "Mental condition",
     "Peak human physical",
     "Radar sense",
     "Superhuman senses"
   ],
   "ranking": {
     "comicCount": 827,
     "eventCount": 11,
     "pageviewCount": 70260,
     "serieCount": 163,
     "storyCount": 1326
   },
   "secretIdentities": ["Matt", "Matthew Michael Murdock"],
   "species": ["Mutate"],
   "superName": "Daredevil",
   "teams": [
     "Chaste",
     "Defenders",
     "Nelson & Murdock",
     "New Avengers",
     "S.H.I.E.L.D",
     "The Chaste",
     "The Hand",
     "The New Avengers"
   ],
   "urls": {
     "marvel": "http://marvel.com/characters/11/daredevil",
     "wikipedia": "https://en.wikipedia.org/wiki/Daredevil_(Marvel_Comics)"
   }
 },
 {
   "id": 1010343,
   "aliases": [
     "Human Torch",
     "Invisible Man",
     "Johnny Storm",
     "Jonathan Lowell Spencer",
     "The Torch"
   ],
   "authors": ["Jack Kirby", "Stan Lee"],
   "description":
     "The Human Torch is a fictional superhero appearing in American comic books published by Marvel Comics.",
   "images": {
     "background":
       "http://i.annihil.us/u/prod/marvel/i/mg/5/03/537bb03773238.gif",
     "thumbnail":
       "http://i.annihil.us/u/prod/marvel/i/mg/9/00/537bb002db77f/standard_xlarge.jpg"
   },
   "mainColor": {
     "blue": 9,
     "green": 36,
     "hexa": "3A2409",
     "red": 58
   },
   "name": "Human Torch",
   "partners": [],
   "powers": [
     "Auto-mechanic",
     "Designer",
     "Heat energy absorption",
     "Pyrokinesis",
     "Serves as damage shield",
     "Skilled race-car driver"
   ],
   "ranking": {
     "comicCount": 783,
     "eventCount": 17,
     "pageviewCount": 18888,
     "serieCount": 236,
     "storyCount": 1283
   },
   "secretIdentities": ["Johnny", "Jonathan Lowell Spencer Storm"],
   "species": ["Mutate"],
   "superName": "Human Torch",
   "teams": [
     "Avengers Unity Division",
     "Fantastic Force",
     "Fantastic Four",
     "Fantastic Four Incorporated",
     "Future Foundation",
     "Galactus",
     "Herald of Galactus",
     "Uncanny Avengers"
   ],
   "urls": {
     "marvel": "http://marvel.com/characters/26/human_torch",
     "wikipedia": "https://en.wikipedia.org/wiki/Human_Torch"
   }
 },
 {
   "id": 1009257,
   "aliases": [
     "Cyclops",
     "Dark Phoenix",
     "Eric the Red",
     "Mutate #007",
     "Phoenix",
     "Scott Summers",
     "Slim",
     "Slym Dayspring"
   ],
   "authors": ["Jack Kirby", "Stan Lee"],
   "description":
     "Cyclops is a fictional superhero appearing in American comic books published by Marvel Comics and is a founding member of the X-Men.",
   "images": {
     "background":
       "http://x.annihil.us/u/prod/marvel/i/mg/9/d0/537ba69f1b9b7.gif",
     "thumbnail":
       "http://x.annihil.us/u/prod/marvel/i/mg/6/70/526547e2d90ad/standard_xlarge.jpg"
   },
   "mainColor": {
     "blue": 6,
     "green": 6,
     "hexa": "3F0606",
     "red": 63
   },
   "name": "Cyclops",
   "partners": [],
   "powers": ["Optic force blasts", "Spatial awareness"],
   "ranking": {
     "comicCount": 699,
     "eventCount": 26,
     "pageviewCount": 25934,
     "serieCount": 215,
     "storyCount": 757
   },
   "secretIdentities": ["Scott Summers"],
   "species": ["Mutant"],
   "superName": "Cyclops",
   "teams": [
     "Cyclops",
     "Phoenix Five",
     "Phoenix Force",
     "The Twelve",
     "X-Factor",
     "X-Force",
     "X-Men",
     "X-Terminators",
     "Xavier's School for Gifted Youngsters"
   ],
   "urls": {
     "marvel": "http://marvel.com/characters/10/cyclops",
     "wikipedia": "https://en.wikipedia.org/wiki/Cyclops_(comics)"
   }
 },
 {
   "id": 1009268,
   "aliases": [
     "Deadpool",
     "El Mercenario Antiheroes",
     "Hulkpool",
     "Jack",
     "Johnny Silvini",
     "Merc with a Mouth",
     "Mithras",
     "Regenerating Degenerate",
     "Thom Cruz",
     "Wade T. Wilson",
     "Wade Wilson",
     "Wildcard",
     "Zenpool"
   ],
   "authors": ["Fabian Nicieza", "Rob Liefeld"],
   "description":
     "Deadpool (Wade Wilson) is a fictional antihero appearing in American comic books published by Marvel Comics.",
   "images": {
     "background":
       "http://i.annihil.us/u/prod/marvel/i/mg/b/03/537ba78541492.gif",
     "thumbnail":
       "http://x.annihil.us/u/prod/marvel/i/mg/5/c0/537ba730e05e0/standard_xlarge.jpg"
   },
   "mainColor": {
     "blue": 6,
     "green": 6,
     "hexa": "3F0606",
     "red": 63
   },
   "name": "Deadpool",
   "partners": [
     "Agent X",
     "Agent of HYDRA",
     "Blind Al",
     "Bob",
     "Cable",
     "Copycat",
     "Domino",
     "Hellcow",
     "Mr. Tolliver",
     "Spider-Man",
     "Taskmaster",
     "Weasel"
   ],
   "powers": [
     "A magic satchel",
     "Extended",
     "Extended longevity",
     "Healing factor",
     "Holographic disguise",
     "Longevity",
     "Magic satchel",
     "Marksman",
     "Martial artist",
     "Master",
     "Master martial artist",
     "Regenerative",
     "Swordsman"
   ],
   "ranking": {
     "comicCount": 402,
     "eventCount": 9,
     "pageviewCount": 257848,
     "serieCount": 99,
     "storyCount": 570
   },
   "secretIdentities": ["Wade Winston Wilson"],
   "species": ["Mutate"],
   "superName": "Deadpool",
   "teams": [
     "Agency X",
     "Agent X",
     "Agent of Hydra",
     "Astonishing Avengers",
     "Avengers Unity Division",
     "Blind Al",
     "Bob",
     "Cable",
     "Code Red",
     "Copycat",
     "Deadpool",
     "Deadpool Corps",
     "Defenders",
     "Domino",
     "Frightful Four",
     "Genesis",
     "Great Lakes Avengers",
     "Great Lakes Initiative",
     "Heroes for Hire",
     "Kingpin",
     "Lake",
     "Landau",
     "Landau, Luckman, and Lake",
     "Luckman",
     "Maggia",
     "Mercs for Money",
     "S.H.I.E.L.D",
     "Secret Defenders",
     "Six Pack",
     "Taskmaster",
     "Thunderbolts",
     "Uncanny Avengers",
     "Weapon X",
     "Wolverine",
     "X-Force",
     "X-Men",
     "partners =Weasel"
   ],
   "urls": {
     "marvel": "http://marvel.com/characters/12/deadpool",
     "wikipedia": "https://en.wikipedia.org/wiki/Deadpool"
   }
 },
 {
   "id": 1009366,
   "aliases": [
     "Baroness Von Doom",
     "Captain Universe",
     "Invisible Girl",
     "Invisible Woman",
     "Malice",
     "Mistress of Hate",
     "Susan Benjamin",
     "Susan Storm",
     "Tabitha Deneuve"
   ],
   "authors": ["Jack Kirby", "Stan Lee"],
   "description":
     "The Invisible Woman (Susan \"Sue\" Storm Richards), previously known as the Invisible Girl, is a fictional superheroine appearing in American comic books published by Marvel Comics.",
   "images": {
     "background": null,
     "thumbnail":
       "http://i.annihil.us/u/prod/marvel/i/mg/6/a0/52695b9cd40b6/standard_xlarge.jpg"
   },
   "mainColor": null,
   "name": "Invisible Woman",
   "partners": [],
   "powers": [
     "Competent martial artist",
     "Control",
     "Force field",
     "Invisibility",
     "Invisible",
     "Manipulate",
     "Projected",
     "Projected invisibility"
   ],
   "ranking": {
     "comicCount": 390,
     "eventCount": 17,
     "pageviewCount": 10637,
     "serieCount": 143,
     "storyCount": 488
   },
   "secretIdentities": ["Sue", "Susan Storm Richards"],
   "species": ["Mutate"],
   "superName": "Invisible Woman",
   "teams": [
     "Avengers",
     "Fantastic Four",
     "Fantastic Four Incorporated",
     "Future Foundation",
     "Lady Liberators"
   ],
   "urls": {
     "marvel": "http://marvel.com/characters/1047/invisible_woman",
     "wikipedia": "https://en.wikipedia.org/wiki/Invisible_Woman"
   }
 },
 {
   "id": 1009562,
   "aliases": [
     "Ana Maximoff",
     "Scarlet Witch",
     "Wanda Frank",
     "Wanda Magnus",
     "Wanda Maximoff"
   ],
   "authors": ["Jack Kirby", "Stan Lee"],
   "description":
     "The Scarlet Witch (Wanda Maximoff) is a fictional superhero appearing in American comic books published by Marvel Comics.",
   "images": {
     "background":
       "http://i.annihil.us/u/prod/marvel/i/mg/6/90/537bc24866aa8.gif",
     "thumbnail":
       "http://x.annihil.us/u/prod/marvel/i/mg/8/70/537bc21ab36c0/standard_xlarge.jpg"
   },
   "mainColor": {
     "blue": 6,
     "green": 6,
     "hexa": "3F0606",
     "red": 63
   },
   "name": "Scarlet Witch",
   "partners": ["Quicksilver"],
   "powers": ["Chaos magic", "Probability manipulation", "Reality warping"],
   "ranking": {
     "comicCount": 261,
     "eventCount": 13,
     "pageviewCount": 51750,
     "serieCount": 105,
     "storyCount": 295
   },
   "secretIdentities": [
     "Wanda Maximoff",
     "Wanda Maximoff <!-- As Wanda's species varies so much in comics",
     "and so significantly of late",
     "it makes most sense to leave this field out and let the lead explain her history.  Wiki articles about fictional characters are not biographies"
   ],
   "species": ["Mutate"],
   "superName": "Scarlet Witch",
   "teams": ["Avengers", "Brotherhood of Evil Mutants", "Defenders"],
   "urls": {
     "marvel": "http://marvel.com/characters/50/scarlet_witch",
     "wikipedia": "https://en.wikipedia.org/wiki/Scarlet_Witch"
   }
 },
 {
   "id": 1009452,
   "aliases": [
     "Jake Lockley",
     "Moon Knight",
     "Mr. Knight",
     "Steven Grant",
     "The Fist of Khonshu",
     "Yitzak Topol"
   ],
   "authors": ["Don Perlin", "Doug Moench"],
   "description":
     "Moon Knight is a fictional superhero who appears in comic books published by Marvel Comics.",
   "images": {
     "background": null,
     "thumbnail":
       "http://x.annihil.us/u/prod/marvel/i/mg/3/30/52028af90e516/standard_xlarge.jpg"
   },
   "mainColor": null,
   "name": "Moon Knight",
   "partners": [],
   "powers": [
     "Agility",
     "Armed combat",
     "Detective",
     "Endurance",
     "Expert aviator",
     "Expert detective",
     "Gymnast",
     "Hand-to-hand combatant",
     "Increased strength",
     "Marksman",
     "Master martial artist",
     "Reflexes",
     "Senses",
     "Skilled acrobat",
     "Sophisticated weaponry",
     "Superb athlete",
     "Superhuman strength"
   ],
   "ranking": {
     "comicCount": 110,
     "eventCount": 3,
     "pageviewCount": 19826,
     "serieCount": 37,
     "storyCount": 129
   },
   "secretIdentities": ["Marc Spector"],
   "species": [],
   "superName": "Moon Knight",
   "teams": [
     "Avengers",
     "Defenders",
     "Heroes for Hire",
     "Marvel Knights",
     "Secret Avengers",
     "United States Marine Corps",
     "West Coast Avengers"
   ],
   "urls": {
     "marvel": "http://marvel.com/characters/2851/moon_knight",
     "wikipedia": "https://en.wikipedia.org/wiki/Moon_Knight"
   }
 }
];



  alphabet2 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O",
        "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


  sorted = this.allHeroes.sort((a, b) => a > b ? 1 : -1) || [5];

  //for local storage heroes
  groupedLocalStorage = this.sorted.reduce((alphabet, hero) => {
      const letter = hero.charAt(0);
      alphabet[letter] = alphabet[letter] || [];
      alphabet[letter].push(hero);
      return alphabet;
  }, {});

  result2 = Object.keys(this.groupedLocalStorage).map(key => ({key, heroes: this.groupedLocalStorage[key]}));


  grouped = this.sorted.reduce((alphabet, hero) => {


   for(let alphaLetter of this.alphabet2){

         alphabet[alphaLetter] = alphabet[alphaLetter] || [];

         if(alphaLetter == hero.charAt(0)){
           alphabet[alphaLetter].push(hero);
         }
   }
   return alphabet;

  }, {});

  public show:boolean = false;
  public prev:number = -1;

  public result:Array<any> = Object.keys(this.grouped).map(key => ({key, heroes: this.grouped[key]}));

  clicked2(index) {// only show clicked letter info
        if(this.result[this.prev] && this.prev != index) {
          this.result[this.prev].show = false;
        }
        this.result[index].show = !this.result[index].show;
        this.prev = index;

    };


    editProfile() {
        this.router.navigate(['profile']);
      }
}
