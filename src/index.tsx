import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import * as React from 'react';
import ReactDOM from 'react-dom/client';
import 'sanitize.css/sanitize.css';

import { ThemeProvider, Button, Title, Caption, Body } from './lib.entrypoint';

import reportWebVitals from 'reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <div style={{ width: '700px' }}>
        <Title type="large">Hello world</Title>
        <Caption type="normal">This is a normal caption</Caption>
        <Caption type="regular">This is a regular caption</Caption>
        <Body type="regular">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </Body>
        <Button
          text="Button"
          type="submit"
          shape="primary"
          size="small"
          containerStyle={{ width: '30%' }}
        />
        <Button
          text="Button"
          type="submit"
          shape="secondary"
          size="small"
          containerStyle={{ width: '30%', marginTop: '20px' }}
        />
        <Button
          text="Button"
          type="submit"
          shape="primary"
          size="small"
          containerStyle={{ width: '30%', marginTop: '20px' }}
          loading={true}
        />
        <Button
          text="Button"
          type="submit"
          shape="secondary"
          size="small"
          containerStyle={{ width: '30%', marginTop: '20px' }}
          loading={true}
        />
        <Button
          text="Button"
          type="submit"
          shape="secondary"
          containerStyle={{ width: '30%', marginTop: '20px' }}
          disabled
        />
      </div>
    </ThemeProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
