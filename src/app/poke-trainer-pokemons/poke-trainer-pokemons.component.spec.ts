import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeTrainerPokemonsComponent } from './poke-trainer-pokemons.component';

describe('PokeTrainerPokemonsComponent', () => {
  let component: PokeTrainerPokemonsComponent;
  let fixture: ComponentFixture<PokeTrainerPokemonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeTrainerPokemonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeTrainerPokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
