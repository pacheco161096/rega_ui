import { configureStore } from '@reduxjs/toolkit'
import slidersReducer from './reducers/sliders-reducer'
import cardsReducer from './reducers/cards-reducer'
import paquetesHogar from './reducers/paquetesHogar-reducer'
import paquetesNegocio from './reducers/paquetesNegocio-reducer'
import paquetes from './reducers/paquetes-reducer'
import traslateCopyReducer from './reducers/traslateCopy-reducer'
import footer from './reducers/footer-reducer'
import loginReducer from './reducers/login-reducer'
import documents from './reducers/document-reducer'
import storage from 'redux-persist/lib/storage';
import InvoiceSlice from './reducers/invoice-reducer'
import SingleInvoiceSlice from './reducers/singleInvoice-reducer'
import contactSlice from './reducers/contact-reducer'
import supportSlice from './reducers/support-reducer'
import { persistReducer, persistStore } from 'redux-persist';


const persistConfig = {
  key: 'root',
  storage,
}

const persistedUser =  persistReducer(persistConfig, loginReducer);

export const store = configureStore({

  reducer: {
    sliders: slidersReducer,
    cards: cardsReducer,
    hogar: paquetesHogar,
    negocio:paquetesNegocio,
    traslatecopy:traslateCopyReducer,
    paquetes,
    footer,
    InvoiceSlice,
    SingleInvoiceSlice,
    contactSlice,
    supportSlice,
    login:persistedUser,
    documents: documents
  }, middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export const persistor = persistStore(store);