import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import * as React from 'react';
import ReactDOM from 'react-dom/client';
import 'sanitize.css/sanitize.css';
import './styles/css/main.scss';

import {
  ThemeProvider,
  Button,
  Title,
  Caption,
  Body,
  Input,
  Icons,
  Colors,
  toast,
} from './browser';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

function App() {
  const notify = () => toast('Wow so easy!');
  return (
    <ThemeProvider>
      <div style={{ width: '343px' }}>
        <Input onValueChange={val => console.log(val)} title="Enter email" />
        <Button
          text="Continue"
          type="submit"
          containerStyle={{
            marginTop: '24px',
            boxShadow: '4px 8px 24px rgb(115 92 247 / 24%)',
          }}
          onClick={() => notify()}
          theme={{
            backgroundColor: '#41ADD1',
            color: '#ffff',
          }}
          icon={
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.3733 7.16L13.4667 6.10667C13.2933 5.90667 13.1533 5.53333 13.1533 5.26667V4.13333C13.1533 3.42667 12.5733 2.84666 11.8667 2.84666H10.7333C10.4733 2.84666 10.0933 2.70667 9.89334 2.53333L8.84 1.62667C8.38 1.23333 7.62667 1.23333 7.16 1.62667L6.11334 2.54C5.91334 2.70667 5.53334 2.84666 5.27334 2.84666H4.12C3.41334 2.84666 2.83334 3.42667 2.83334 4.13333V5.27333C2.83334 5.53333 2.69334 5.90667 2.52667 6.10667L1.62667 7.16667C1.24 7.62667 1.24 8.37333 1.62667 8.83333L2.52667 9.89333C2.69334 10.0933 2.83334 10.4667 2.83334 10.7267V11.8667C2.83334 12.5733 3.41334 13.1533 4.12 13.1533H5.27334C5.53334 13.1533 5.91334 13.2933 6.11334 13.4667L7.16667 14.3733C7.62667 14.7667 8.38 14.7667 8.84667 14.3733L9.9 13.4667C10.1 13.2933 10.4733 13.1533 10.74 13.1533H11.8733C12.58 13.1533 13.16 12.5733 13.16 11.8667V10.7333C13.16 10.4733 13.3 10.0933 13.4733 9.89333L14.38 8.84C14.7667 8.38 14.7667 7.62 14.3733 7.16ZM10.7733 6.74L7.55334 9.96C7.46 10.0533 7.33334 10.1067 7.2 10.1067C7.06667 10.1067 6.94 10.0533 6.84667 9.96L5.23334 8.34667C5.04 8.15333 5.04 7.83333 5.23334 7.64C5.42667 7.44666 5.74667 7.44666 5.94 7.64L7.2 8.9L10.0667 6.03333C10.26 5.84 10.58 5.84 10.7733 6.03333C10.9667 6.22667 10.9667 6.54666 10.7733 6.74Z"
                fill="white"
              />
            </svg>
          }
        />
        <Button
          text="Continue"
          type="submit"
          width="100%"
          onClick={() => notify()}
          icon={
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.75 1.75C8.75 1.33579 8.41421 1 8 1C7.58579 1 7.25 1.33579 7.25 1.75V7.25H1.75C1.33579 7.25 1 7.58579 1 8C1 8.41421 1.33579 8.75 1.75 8.75H7.25V14.25C7.25 14.6642 7.58579 15 8 15C8.41421 15 8.75 14.6642 8.75 14.25V8.75H14.25C14.6642 8.75 15 8.41421 15 8C15 7.58579 14.6642 7.25 14.25 7.25H8.75V1.75Z"
                fill="white"
              />
            </svg>
          }
        />
        <Button
          text="Continue"
          type="submit"
          width="100%"
          containerStyle={{
            marginTop: '24px',
            boxShadow: '4px 8px 24px rgb(115 92 247 / 24%)',
          }}
          onClick={() => notify()}
          // loading={true}
        />
        <Body
          type="regular"
          style={{ color: Colors.dark[80], textAlign: 'center' }}
        >
          OR
        </Body>
        <Button
          text="Continue with google"
          type="submit"
          shape="secondary"
          width="100%"
          containerStyle={{
            color: Colors.black,
            borderColor: Colors.dark[30],
          }}
          onClick={() => notify()}
          icon={Icons.GoogleIcon}
          wave={false}
          // loading={true}
        />
        <Button
          text="Continue with wallet"
          type="submit"
          shape="secondary"
          width="100%"
          containerStyle={{
            marginTop: '12px',
            width: '100%',
            color: Colors.black,
            borderColor: Colors.dark[30],
          }}
          onClick={() => notify()}
          icon={Icons.WalletIcon}
          wave={false}
          // loading={true}
        />
        <Caption
          type="regular"
          style={{ textAlign: 'center', color: Colors.dark[60] }}
        >
          By continue, you agree to our Terms of Service <br /> and acknowledge
          you've read our Privacy Policy
        </Caption>
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
      </div>
    </ThemeProvider>
  );
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
