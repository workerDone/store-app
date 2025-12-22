import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

type AppState = {
  hasLogin: boolean;
};

const initialState: AppState = {
  hasLogin: false,
}

export const AppStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods(store => ({ // Optional: adds methods
    login: () => patchState(store, { hasLogin: true }),
    logout: () => patchState(store, { hasLogin: false }),
  }))
);