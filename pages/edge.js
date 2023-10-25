import Head from 'next/head';
import Header from '../components/header';
import nextVersion from '../lib/next-version';

export const config = {
	runtime: 'experimental-edge'
};

export default function EdgePage({ data }) {
  const title = `Edge - Next.js ${nextVersion()}`;
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header/>
        <p>This page is server-side rendered on the edge!</p>
        <p>{data.ts}</p>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      data: {
        ts: new Date().toString()
      }
    }
  };
}
