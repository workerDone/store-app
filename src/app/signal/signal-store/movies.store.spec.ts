import { MoviesStore } from './movies.store';
import { TestBed } from '@angular/core/testing';

describe('MoviesStore', () => {
  it('should verify that three movies are available', () => {
    TestBed.configureTestingModule({
      providers: [MoviesStore],
    });
    const store = TestBed.inject(MoviesStore);

    expect(store.movies()).toHaveSize(3)
  });
})