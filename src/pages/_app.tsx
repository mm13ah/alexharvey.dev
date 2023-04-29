import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { Lato } from '@next/font/google';
import '../../styles/globals.css';
import Head from 'next/head';

const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-lato',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>alexharvey.dev</title>
        <meta name="description" content="Alex Harvey's personal dev site" />
      </Head>
      <ThemeProvider attribute="class">
        <main className={`${lato.className} scroll-smooth`}>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  );
}
