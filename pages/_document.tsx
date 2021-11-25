import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
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

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          {process.env.NEXT_PUBLIC_MODE === 'production' && (
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
            />
          )}
          {process.env.NEXT_PUBLIC_MODE === 'production' && (
            <script
              dangerouslySetInnerHTML={{
                __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                page_path: window.location.pathname,
              });
            `,
              }}
            />
          )}
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
