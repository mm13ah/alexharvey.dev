import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html style={{ scrollBehavior: 'smooth' }} className="dark" lang="en-GB">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
