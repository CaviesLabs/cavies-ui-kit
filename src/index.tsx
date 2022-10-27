import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import * as React from 'react';
import ReactDOM from 'react-dom/client';
import 'sanitize.css/sanitize.css';

import { ThemeProvider, Button } from './lib.entrypoint';

import reportWebVitals from 'reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <div style={{ width: '300px' }}>
        <Button
          text="Button"
          type="submit"
          shape="primary"
          size="small"
          containerStyle={{ width: '100%' }}
        />
      </div>
    </ThemeProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
