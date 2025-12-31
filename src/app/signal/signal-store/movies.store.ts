import { signalStore, withState } from '@ngrx/signals';

type Movie = {
  id: number;
  name: string;
};

type State = { movies: Movie[] };

export const MoviesStore = signalStore(
  withState<State>({
    movies: [
      { id: 1, name: 'A New Hope' },
      { id: 2, name: 'Into Darkness' },
      { id: 3, name: 'The Lord of the Rings' },
    ],
  })
);