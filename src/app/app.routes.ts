import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot, Routes } from '@angular/router';
import { delay, first, of, Subject, switchMap } from 'rxjs';
import { Main } from './main/main';
import { SimpleSignal } from './signal/simple-signal/simple-signal';
import { titleResolver } from './signal/simple-signal/title-resolver';
import { SignalStore } from './signal/signal-store/signal-store';
import { SimpleObservable } from './rxjs/simple-observable/simple-observable';

export const userResolver: ResolveFn<string> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const user: Subject<string> = new Subject();
  // user.next('Mykola');
  // setInterval(() => {
  //   user.pipe(first()).subscribe(userName => {
  //     user.next(userName + 1);
  //   });
  // }, 4000)

  return of('Mykola').pipe(delay(4000), switchMap(() => of('The best')));
};

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./login/login')
      .then(component => component.Login),
    resolve: {
      user: userResolver
    }
  },
  {
    path: '',
    component: Main,
    children: [
      {
        path: 'signal',
        component: SimpleSignal,
        title: titleResolver
      },
      {
        path: 'signal-store',
        component: SignalStore,
        title: 'Signal Store',
      },
      {
        path: 'observable',
        component: SimpleObservable,
        title: 'Simple Observable',
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/login',
  }
];
