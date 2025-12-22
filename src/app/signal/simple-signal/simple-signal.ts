import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  Signal,
  signal,
  WritableSignal
} from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardContent, MatCardFooter, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-simple-signal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatButton,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatCardFooter
  ],
  templateUrl: './simple-signal.html',
  styleUrl: './simple-signal.scss',
})
export class SimpleSignal {

  count: WritableSignal<number> = signal(0);
  doubleCount: Signal<number> = computed(() => this.count() * 2);
  snackBar = inject(MatSnackBar);

  constructor() {
    effect(() => {
      this.snackBar.open(`The count is: ${this.count()}`);
    });
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
