import { LanguageProvider } from './LanguageContext';
import MainApp from './MainApp';

function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}

export default App;