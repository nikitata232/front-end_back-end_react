import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';

import Home from './pages/Home';
import TechnologyList from './pages/TechnologyList';
import TechnologyDetail from './pages/TechnologyDetail';
import AddTechnology from './pages/AddTechnology';

function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technologies" element={<TechnologyList />} />
        <Route path="/technology/:techId" element={<TechnologyDetail />} />
        <Route path="/add-technology" element={<AddTechnology />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;