import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InvalidoPage } from './invalido.page';

describe('InvalidoPage', () => {
  let component: InvalidoPage;
  let fixture: ComponentFixture<InvalidoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InvalidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
