import React, { useState } from 'react';
import TechnologyCard from './components/TechnologyCard';
import QuickActions from './components/QuickActions';
import './App.css';
import { useTechnologies } from './hooks/useTechnologies';

function App() {
  const { technologies, updateStatus, updateNotes } = useTechnologies();

  return (
    <div className="App">
      <h1>Technology Tracker</h1>
      {technologies.map((tech) => (
        <TechnologyCard
          key={tech.id}
          technology={tech}
          onStatusChange={updateStatus}
          onNotesChange={updateNotes}
        />
      ))}

      {/* QuickActions для первого элемента, только как пример */}
      {technologies[0] && (
        <QuickActions
          technology={technologies[0]}
          onStatusChange={updateStatus}
          onNotesChange={updateNotes}
        />
      )}
    </div>
  );
}

export default App;