import { Html, Head, Main, NextScript } from "next/document";

// The _document file is used to set properties on the HTML document
// you will probably not need it for your project

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Electrify</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
