import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/store';
import type {
  StateSchema,
  StateSchemaKey,
  ReduxStoreWithManager,
  ThunkConfig,
} from './config/StateSchema';

export {
  StateSchemaKey,
  StoreProvider,
  createReduxStore,
  StateSchema,
  ReduxStoreWithManager,
  ThunkConfig,
};
export type { AppDispatch };
