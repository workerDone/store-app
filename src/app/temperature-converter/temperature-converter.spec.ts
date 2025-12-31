import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureConverter } from './temperature-converter';

describe('TemperatureConverter', () => {
  let component: TemperatureConverter;
  let fixture: ComponentFixture<TemperatureConverter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemperatureConverter]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TemperatureConverter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should update component celsius property when typing into the input field', () => {
    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('#celsius');
    const testValue = '-1';
    inputElement.value = testValue;
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.celsius.value).toEqual(+testValue);
  });

  it('should update component fahrenheit property when typing into the input field', () => {
    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('#fahrenheit');
    const testValue = '10';
    inputElement.value = testValue;
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.fahrenheit.value).toEqual(+testValue);
  });

  it('should calculate component celsius property when typing into fahrenheit input field', () => {
    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('#fahrenheit');
    inputElement.value = '-4';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.celsius.value).toEqual(-20);
  });

  it('should calculate component fahrenheit property when typing into celsius input field', () => {
    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('#celsius');
    inputElement.value = '10';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.fahrenheit.value).toEqual(50);
  });

  it('should update component simpleFahrenheit property when typing into the input field', () => {
    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('#simple-celsius');
    const testValue = '10';
    inputElement.value = testValue;
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.simpleCelsius).toEqual(+testValue);
  });

  it('should update component simpleFahrenheit property when typing into the input field', () => {
    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('#simple-fahrenheit');
    const testValue = '10';
    inputElement.value = testValue;
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.simpleFahrenheit).toEqual(+testValue);
  });

  it('should calculate component simpleCelsius property when typing into fahrenheit input field', () => {
    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('#simple-fahrenheit');
    inputElement.value = '-4';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.simpleCelsius).toEqual(-20);
  });

  it('should calculate component simpleFahrenheit property when typing into simpleCelsius input field', () => {
    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('#simple-celsius');
    inputElement.value = '10';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.simpleFahrenheit).toEqual(50);
  });
});