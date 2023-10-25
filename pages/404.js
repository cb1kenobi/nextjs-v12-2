import Head from 'next/head';
import Header from '../components/header';
import nextVersion from '../lib/next-version';

export default function NotFound() {
  const title = `404 - Next.js ${nextVersion()}`;
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header/>
        <p>404 Page not found</p>
        <p>This page is an error page.</p>
        <p>{new Date().toString()}</p>
      </main>
    </div>
  );
}
