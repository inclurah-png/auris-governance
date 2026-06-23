import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

export function getCurrentPage() {
  const path = window.location.pathname;

  switch (path) {
    case '/login':
      return <Login />;
    default:
      return <Dashboard />;
  }
}
