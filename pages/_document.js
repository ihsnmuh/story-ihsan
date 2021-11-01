import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='id-ID'>
        <Head>
          <link rel='icon' href='/icon/ihsan-logo.svg' />
          <link rel='icon' href='/icon/ihsan-logo.svg' sizes='32x32' />
          <link rel='icon' href='/icon/ihsan-logo.svg' sizes='192x192' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
