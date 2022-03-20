import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import { emptySplitApi } from '../services'
import { 
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
   } from 'redux-persist'
import createWebStorage from 'redux-persist/lib/storage/createWebStorage'
// import storage from 'redux-persist/lib/storage'

const createNoopStorage = () => {
  return {
    getItem(_key:any) {
      return Promise.resolve(null);
    },
    setItem(_key:any, value:any) {
      return Promise.resolve(value);
    },
    removeItem(_key:any) {
      return Promise.resolve();
    },
  };
};


const storage = typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage();

const persistConfig = {
    key: 'root',
    storage
  };

  const reducers = combineReducers({
    [emptySplitApi.reducerPath]: emptySplitApi.reducer,
    auth: authReducer,
  });


const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(emptySplitApi.middleware),
  })

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch