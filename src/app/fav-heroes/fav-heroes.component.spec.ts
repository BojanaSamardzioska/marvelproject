import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavHeroesComponent } from './fav-heroes.component';

describe('FavHeroesComponent', () => {
  let component: FavHeroesComponent;
  let fixture: ComponentFixture<FavHeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavHeroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
