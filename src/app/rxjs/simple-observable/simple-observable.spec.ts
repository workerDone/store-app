import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleObservable } from './simple-observable';
import { first } from 'rxjs';

describe('SimpleObservable', () => {
  let component: SimpleObservable;
  let fixture: ComponentFixture<SimpleObservable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleObservable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleObservable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('name should be undefined', (done) => {
    component.name.subscribe(name => {
      expect(name).toEqual('Mykola');
      done();
    });
    component.setName('Mykola');
  });
});
