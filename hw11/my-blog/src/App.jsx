import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import ArticlesList from './components/ArticlesList';
import ArticlePage from './components/ArticlePage';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<ArticlesList />} />
        <Route path="/articles/:id" element={<ArticlePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;