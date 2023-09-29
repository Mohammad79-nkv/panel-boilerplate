//library 
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import BarLoader from "react-spinners/BarLoader";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
//css 
import './index.css';
import "./locales/i18n.ts";
import "react-toastify/dist/ReactToastify.css";
//custome
import { ErrorBoundary } from './components/index';
import { store } from './redux/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

let persistor = persistStore(store);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      refetchOnReconnect: false,
      retry: 1,
      staleTime: 10 * 1000,
    },
  },
});

const Loading = () => {
  return (
    <div className="loading-first">
      <BarLoader height={10} width={300} color="#36d7b7" speedMultiplier={2} />
    </div>
  );
};


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <App />
            </PersistGate>
          </Provider>
        </QueryClientProvider>
      </Suspense>
    </ErrorBoundary>
  </React.StrictMode>,
)
