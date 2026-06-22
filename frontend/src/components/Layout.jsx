export default function Layout({ children }) {
  return (
    <div>
      <header>
        <h1>AURIS Governance</h1>
      </header>

      <main>
        {children}
      </main>
    </div>
  );
}
