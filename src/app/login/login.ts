import { Component, computed, inject } from '@angular/core';
import { AppStore } from '../app.store';
import { MatButton } from '@angular/material/button';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-login',
  imports: [
    MatButton,
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  readonly store = inject(AppStore);
  private route = inject(ActivatedRoute);
  private data = toSignal(this.route.data);
  user = computed(() => this.data()?.['user'] as string);
  myName = 'Mykola';
}
