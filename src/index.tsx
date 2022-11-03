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
        <Input
          // type="password"
          onValueChange={val => console.log(val)}
          title="Enter email"
        />
        {/* <Input
          size="small"
          onValueChange={val => console.log(val)}
          title="Enter password"
          type="password"
          style={{ marginTop: '20px' }}
        /> */}
        <Button
          text="Continue"
          type="submit"
          containerStyle={{
            marginTop: '24px',
            width: '100%',
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
          containerStyle={{
            width: '100%',
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
