import nextVersion from '../lib/next-version';

export default function Header() {
  return (
    <header>
      <nav>
        <h1>Next.js {nextVersion()}</h1>
        <ul>
          <li><a href="/">Pre-rendered</a></li>
          <li><a href="/ssr">SSR</a></li>
          <li><a href="/edge">Edge</a></li>
          <li><a href="/isr">ISR</a></li>
          <li><a href="/api">API</a></li>
        </ul>
      </nav>
    </header>
  );
}