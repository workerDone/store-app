import { Component, OnInit } from '@angular/core';
import {
  concat,
  delay,
  forkJoin,
  fromEvent,
  interval,
  Observable,
  of,
  startWith,
  Subject,
  tap,
  throttle,
  timer
} from 'rxjs';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardContent, MatCardFooter, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-simple-observable',
  imports: [
    MatButton,
    MatCard,
    MatCardContent,
    MatCardFooter,
    MatCardHeader,
    MatCardTitle,
    AsyncPipe,
    JsonPipe,
    MatFormField,
    MatLabel,
    MatInput,
    ReactiveFormsModule
  ],
  templateUrl: './simple-observable.html',
  styleUrl: './simple-observable.scss',
})
export class SimpleObservable implements OnInit {

  concated: Observable<number[]> = concat(of([1, 3]), of([3, 4]), of([2, 2]));
  name = new Subject<string>();
  nameFormControl = new FormControl('', [
    Validators.required,
  ]);
  uploadAndCheckImage = concat(this.uploadImage(), this.checkImage())
    .pipe(tap(result => console.log(result)));


  ngOnInit() {
    console.log('log');
    this.uploadAndCheckImage.subscribe();
  }

  uploadImage() {
    return of(void 0);
  }

  checkImage() {
    return of('Success');
  }

  addInitialValueToObservable() {
    const date = new Date();
    date.setHours(date.getHours(), date.getMinutes(), date.getSeconds() + 10);
    timer(date).subscribe(x => console.log(x));

    const clicks = fromEvent(document, 'click');
    const result = clicks.pipe(throttle(() => interval(1000)));

    result.subscribe(x => console.log(x));
    const observable = forkJoin({
      foo: of(1, 2, 3, 4),
      bar: Promise.resolve(8),
      baz: timer(4000)
    });
    observable.subscribe({
      next: value => console.log(value),
      complete: () => console.log('This is how it ends!'),
    });
    // const source = of(1, 2, 3);
    // const example = source.pipe(delay(3000), startWith(0));
    // const subscribe = example.subscribe(val => console.log(val + ' startWith'));
  }


  setName(name: string) {
    this.name.next(name);
  }

  clearName() {
    this.name.next('');
  }
}
