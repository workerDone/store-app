import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject, linkedSignal,
  Signal,
  signal,
  WritableSignal
} from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardContent, MatCardFooter, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-simple-signal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatButton,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatCardFooter,
    JsonPipe,
  ],
  templateUrl: './simple-signal.html',
  styleUrl: './simple-signal.scss',
})
export class SimpleSignal {

  count: WritableSignal<number> = signal(0);
  doubleCount: Signal<number> = computed(() => this.count() * 2);
  snackBar = inject(MatSnackBar);
  shippingOptions = signal<ShippingMethod[]>([
    {id: 0, name: 'Ground'},
    {id: 1, name: 'Air'},
    {id: 2, name: 'Sea'},
    {id: 3, name: 'New sea'},
  ]);
  selectedOption = linkedSignal<ShippingMethod[], ShippingMethod>({
    source: this.shippingOptions,
    computation: (newOptions, previous) => {
      return newOptions.find((opt) => opt.id === previous?.value.id) ?? newOptions[0];
    },
  });

  constructor() {
    effect(() => {
      this.snackBar.open(`The count is: ${this.count()}`);
    });
    console.log(this.selectedOption());
  }

  changeShipping(index: number) {
    this.selectedOption.set(this.shippingOptions()[index]);
  }

  changeShippingOptions() {
    this.shippingOptions.set([
      {id: 0, name: 'Email'},
      {id: 1, name: 'Sea'},
      {id: 2, name: 'Postal Service'},
    ]);
  }

  increaseCount() {
    this.count.update(value => value + 1);
  }

  decreaseCount() {
    this.count.update(value => value - 1);
  }

  resetCount() {
    this.count.set(0);
  }
}
