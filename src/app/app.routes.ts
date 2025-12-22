import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot, Routes } from '@angular/router';
import { delay, first, of, Subject, switchMap } from 'rxjs';
import { Main } from './main/main';

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
    component: Main
  },
  {
    path: '**',
    redirectTo: '/login',
  }
];
