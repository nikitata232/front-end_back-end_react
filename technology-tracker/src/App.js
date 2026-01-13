import React from 'react';
import './styles/App.css'; // стили приложения

// Импортируем кастомные хуки
import useTechnologiesApi from './hooks/useTechnologies';

// Импортируем компоненты
import RoadmapImporter from './components/RoadmapImporter';
import TechnologyList from './components/TechnologyList';

function App() {
  const { technologies, loading, error, refetch } = useTechnologiesApi();

  if (loading) {
    return (
      <div className="app-loading">
        <div className="spinner"></div>
        <p>Загрузка технологий...</p>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>🚀 Трекер изучения технологий</h1>
        <button onClick={refetch} className="refresh-btn">
          Обновить
        </button>
      </header>

      {error && (
        <div className="app-error">
          <p>{error}</p>
          <button onClick={refetch}>Попробовать снова</button>
        </div>
      )}

      <main className="app-main">
        <RoadmapImporter />
        <TechnologyList technologies={technologies} />
      </main>
    </div>
  );
}

export default App;