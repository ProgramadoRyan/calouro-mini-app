import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SobretwoPage } from './sobretwo.page';

describe('SobretwoPage', () => {
  let component: SobretwoPage;
  let fixture: ComponentFixture<SobretwoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SobretwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
