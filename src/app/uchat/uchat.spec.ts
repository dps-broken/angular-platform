import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Uchat } from './uchat';

describe('Uchat', () => {
  let component: Uchat;
  let fixture: ComponentFixture<Uchat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Uchat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Uchat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
