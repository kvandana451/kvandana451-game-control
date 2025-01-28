import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameControlComponent } from './game-control.component';

describe('GameControlComponent', () => {
  let component: GameControlComponent;
  let fixture: ComponentFixture<GameControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameControlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
