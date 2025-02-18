import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'socihub',
      storage,
      whiteList: ['auth', 'user', 'modal', 'like'],
    },
    reducers
  );
  return persistedReducer;
};
