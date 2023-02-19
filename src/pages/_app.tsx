import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { Lato } from '@next/font/google';
import '../../styles/globals.css';

const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-lato',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <main className={`${lato.className} scroll-smooth`}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
