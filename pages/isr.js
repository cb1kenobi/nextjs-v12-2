import Head from 'next/head';
import Header from '../components/header';
import nextVersion from '../lib/next-version';

export default function ISRPage({ data }) {
  const title = `ISR - Next.js ${nextVersion()}`;
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header/>
        <p>This page is server-side rendered with ISR enabled!</p>
        <p>{data.ts}</p>
      </main>
    </div>
  );
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  return {
    props: {
      data: {
        ts: new Date().toString(),
      },
    },
    revalidate: 10, // In seconds
  }
}
