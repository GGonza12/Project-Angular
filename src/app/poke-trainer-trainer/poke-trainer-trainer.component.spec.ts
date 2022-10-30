import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeTrainerTrainerComponent } from './poke-trainer-trainer.component';

describe('PokeTrainerTrainerComponent', () => {
  let component: PokeTrainerTrainerComponent;
  let fixture: ComponentFixture<PokeTrainerTrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeTrainerTrainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeTrainerTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
