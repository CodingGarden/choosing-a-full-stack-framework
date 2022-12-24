import { SessionProvider, signIn } from 'next-auth/react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <div className="navbar bg-primary text-primary-content">
        <div className="flex-1">
          <a className="btn-ghost btn text-xl normal-case">Next Example</a>
        </div>
        <div className="flex-none">
          <button
            onClick={() => {
              console.log('button clicked...');
              signIn('google');
            }}
            className="btn-error btn"
          >
            LOGIN PLEASE
          </button>
        </div>
      </div>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
