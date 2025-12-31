import { ResolveFn } from '@angular/router';
import { Observable, of } from 'rxjs';


export const titleResolver: ResolveFn<string> = (): Observable<string> =>
  of('Async title');