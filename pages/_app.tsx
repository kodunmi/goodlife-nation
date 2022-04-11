import '../styles/globals.css'
import "swiper/css";
import 'plyr-react/dist/plyr.css'
import 'react-tailwind-table/dist/index.css'
import type { AppProps } from 'next/app'
import { store } from '../redux';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

export default function App({ Component, pageProps }: AppProps) {


  let persistor = persistStore(store);

  return (
    <Provider store={store}>
      <ToastContainer />
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}
