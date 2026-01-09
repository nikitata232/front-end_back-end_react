import React, { useState } from 'react';
import TechnologyModal from './Technologymodal';

function QuickActions({ technology, onStatusChange, onNotesChange }) {
  if (!technology) return null;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleStatusChange = (event) => {
    onStatusChange(technology.id, event.target.value);
  };

  const handleNotesChange = (newNotes) => {
    onNotesChange(technology.id, newNotes);
  };

  return (
    <div className="quick-actions">
      <label>
        Статус:
        <select value={technology.status} onChange={handleStatusChange}>
          <option value="not-started">Не начинал</option>
          <option value="in-progress">В процессе</option>
          <option value="completed">Выполнено</option>
        </select>
      </label>
      <button onClick={() => setIsModalOpen(true)}>📋 Заметки</button>

      <TechnologyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        technology={technology}
        onNotesChange={handleNotesChange}
      />
    </div>
  );
}

export default QuickActions;