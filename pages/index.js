import Head from 'next/head';
import Header from '../components/header';
import nextVersion from '../lib/next-version';

export default function HomePage() {
  const title = `Pre-rendered - Next.js ${nextVersion()}`;
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header/>
        <p>This page is pre-rendered.</p>
      </main>
    </div>
  );
}
