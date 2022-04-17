import Document, { Html, Head, Main, NextScript } from 'next/document'
import Header from '../components/Header'
import Footer from '../components/Footer'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/a/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-9XPMCZ55HW"></script>
          <script dangerouslySetInnerHTML={{
            __html: `
            <!-- Global site tag (gtag.js) - Google Analytics -->
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-9XPMCZ55HW', { 'anonymize_ip': true });
          `}}>
          </script>
        </Head>
        <body>
          <div className="page">
            <Header />
            <Main />
            <NextScript />
          </div>
        </body>
        <Footer />
      </Html>
    )
  }
}

export default MyDocument
