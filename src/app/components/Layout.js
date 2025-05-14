// components/Layout.js
import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';

export default function Layout({ children, title = 'AboTax - Ekonomiczne rozwiązanie sporu o aborcję' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="AboTax to propozycja rozwiązania problemu polaryzacji społecznej wokół tematu aborcji w Polsce poprzez system ekonomiczno-podatkowy." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}