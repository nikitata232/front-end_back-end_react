import React from 'react';
import './styles/App.css';

import TechnologyManager from './components/TechnologyManager';
import WorkingAccessibleForm from './components/WorkingAccessibleForm';
import DataImportExport from './components/DataImportExport';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>🚀 Трекер технологий - Практика 25</h1>
      </header>

      <main className="app-main">
        <section style={{ marginBottom: '40px' }}>
          <TechnologyManager />
        </section>

        <section style={{ marginBottom: '40px' }}>
          <WorkingAccessibleForm />
        </section>

        <section>
          <DataImportExport />
        </section>
      </main>

      <footer className="app-footer">
        <p>© 2026 Практика 25 – React формы и экспорт/импорт</p>
      </footer>
    </div>
  );
}

export default App;