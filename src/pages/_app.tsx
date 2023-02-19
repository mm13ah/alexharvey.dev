import { AppProps } from 'next/app';
import '../../styles/globals.css';
import { Lato } from '@next/font/google';

const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-lato',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${lato.className} scroll-smooth`}>
      <Component {...pageProps} />
    </main>
  );
}
