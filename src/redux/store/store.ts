import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import GlobalSearch from "../slices/search";
import GlobalUpdated from "../slices/globalUpdate";
import GlobalCategory from "../slices/globalCategory";
import GlobalSucursal from "../slices/globalSucursal";
import GlobalIdEmpresa from "../slices/idEmpresa";


//Esta sección sirve para poder persistir los datos entre sesiones, asi no hay problemas de pérdida de datos o errores

// const persistedLogged = persistReducer(persistConfig, GlobalLogged.reducer);

// const persistedURL = persistReducer(persistConfig, GlobalUrl.reducer);

// const persistedValues = persistReducer(
//   persistConfig,
//   GlobalInitialValues.reducer
// );

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["your/action/type"],
        // Ignore these field paths in all actions
        ignoredActionPaths: ["meta.arg", "payload.timestamp"],
        // Ignore these paths in the state
        ignoredPaths: ["items.dates"],
      },
    }),
  reducer: {
    search: GlobalSearch.reducer,
    // logged: persistedLogged,
    // globalUrl: persistedURL,
    GlobalUpdated: GlobalUpdated.reducer,
    // GlobalInitialValues: persistedValues,
    GlobalCategory: GlobalCategory.reducer,
    GlobalSucursal: GlobalSucursal.reducer,
    GlobalIdEmpresa: GlobalIdEmpresa.reducer,
  },
});

export const persistor = persistStore(store); //Llamamos a persistStore y le pasamos nuestra store, de esta manera la persistimos en sessionstorage

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
