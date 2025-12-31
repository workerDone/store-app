import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';

type numberOrNull = number | null;

@Component({
  selector: 'app-temperature-converter',
  templateUrl: './temperature-converter.html',
  styleUrl: './temperature-converter.scss',
  imports: [ReactiveFormsModule, FormsModule, MatCard, MatCardContent, MatCardHeader, MatCardTitle],
})
export class TemperatureConverter {

  celsius = new FormControl<numberOrNull>(null);
  fahrenheit = new FormControl<numberOrNull>(null);
  simpleCelsius: numberOrNull = null;
  simpleFahrenheit: numberOrNull = null;

  setCelsius(value: numberOrNull): void {
    this.celsius.setValue(this.getCelsiusFromFahrenheit(value));
  }

  private getCelsiusFromFahrenheit(value: numberOrNull): numberOrNull {
    if (value == null) {
      return null;
    }
    return (value - 32) / 1.8;
  }

  setFahrenheit(value: numberOrNull): void {
    this.fahrenheit.setValue(this.getFahrenheitFromCelsius(value));
  }

  private getFahrenheitFromCelsius(value: numberOrNull): numberOrNull {
    if (value == null) {
      return null;
    }
    return value * 1.8 + 32;
  }

  setSimpleCelsius(value: numberOrNull): void {
    this.simpleCelsius = this.getCelsiusFromFahrenheit(value);
  }

  setSimpleFahrenheit(value: numberOrNull): void {
    this.simpleFahrenheit = this.getFahrenheitFromCelsius(value);
  }
}
