import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';

import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import global_es from './assets/translations/es/global.json';
import global_en from './assets/translations/en/global.json';

import { TranslationContext } from './assets/translations/TranslationContext';
import { SnackbarProvider } from 'notistack';
// import Grow from '@mui/material/Grow';
import Slide from '@mui/material/Slide';

import './index.css';

const language = localStorage.getItem('lng');

i18next.init({
  interpolation: { escapeValue: false },
  lng: language || "en",
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    }
  }
});


ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <TranslationContext.Provider value={i18next}>
        <SnackbarProvider
          maxSnack={2}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          TransitionComponent={Slide}>
          <App />
        </SnackbarProvider>
      </TranslationContext.Provider>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
