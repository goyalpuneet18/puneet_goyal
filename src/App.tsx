import { ServiceProvider } from './presentation/ServiceContext';
import { HomePage } from './presentation/pages/HomePage';
import './presentation/styles/main.scss';

function App() {
  return (
    <ServiceProvider>
      <HomePage />
    </ServiceProvider>
  );
}

export default App;
