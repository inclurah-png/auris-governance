import Navigation from './Navigation';

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <h1>AURIS Governance</h1>
      </header>

      <Navigation />

      <main>
        {children}
      </main>
    </div>
  );
}
