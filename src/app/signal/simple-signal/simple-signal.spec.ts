import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleSignal } from './simple-signal';
import { provideRouter } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

describe('SimpleSignal', () => {
  let component: SimpleSignal;
  let fixture: ComponentFixture<SimpleSignal>;
  let effectSpy: jasmine.Spy;

  const mockMatSnackBar = {
    open: (message: string): void => {}
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleSignal],
      providers: [
        provideRouter([]),
        { provide: MatSnackBar, useValue: mockMatSnackBar }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleSignal);
    component = fixture.componentInstance;
    effectSpy = spyOn(mockMatSnackBar, 'open').and.callThrough();
    fixture.detectChanges();
  });

  function getCountTextContent(): string | undefined {
    const compiled = fixture.nativeElement as HTMLElement;
    return compiled.querySelector('.count')?.textContent;
  }

  function getDoubleCountTextContent(): string | undefined {
    const compiled = fixture.nativeElement as HTMLElement;
    return compiled.querySelector('.double-count')?.textContent;
  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('the count should be zero', () => {
    expect(getCountTextContent()).toBe('0');
    expect(getDoubleCountTextContent()).toBe('0');
  });

  it('should increase the count', () => {
    component.increaseCount();
    fixture.detectChanges();
    expect(getCountTextContent()).toBe('1');
    expect(getDoubleCountTextContent()).toBe('2');
  });

  it('should decrease the count', () => {
    component.decreaseCount();
    fixture.detectChanges();
    expect(getCountTextContent()).toBe('-1');
    expect(getDoubleCountTextContent()).toBe('-2');
  });

  it('should reset the count to zero', () => {
    component.count.set(3);
    fixture.detectChanges();
    expect(getCountTextContent()).toBe('3');
    expect(getDoubleCountTextContent()).toBe('6');
    component.resetCount();
    fixture.detectChanges();
    expect(getCountTextContent()).toBe('0');
    expect(getDoubleCountTextContent()).toBe('0');
  });

  it('should run the effect when the count changes', () => {
    expect(effectSpy).toHaveBeenCalledWith('The count is: 0');

    component.count.set(1);
    fixture.detectChanges();

    expect(effectSpy).toHaveBeenCalledWith('The count is: 1');
    expect(effectSpy).toHaveBeenCalledTimes(2);
  });
});
