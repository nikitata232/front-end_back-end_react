// src/components/TechnologyCard.jsx
import { useState } from 'react';
import TechnologyModal from './Technologymodal';
import ProgressBar from './ProgressBar';
import './TechnologyCard.css';

function TechnologyCard({ technology, onStatusChange, onNotesChange }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleStatusChange = (event) => {
    onStatusChange(technology.id, event.target.value);
  };

  const handleNotesChange = (newNotes) => {
    onNotesChange(technology.id, newNotes);
  };

  // Преобразуем статус в процент для ProgressBar
  let progress = 0;
  if (technology.status === 'not-started') progress = 0;
  else if (technology.status === 'in-progress') progress = 50;
  else if (technology.status === 'completed') progress = 100;

  return (
    <div className="technology-card">
      <h3>{technology.title}</h3>
      <p>{technology.description}</p>

      <div className="status-group">
        <label>
          Статус:
          <select value={technology.status} onChange={handleStatusChange}>
            <option value="not-started">Не начинал</option>
            <option value="in-progress">В процессе</option>
            <option value="completed">Выполнено</option>
          </select>
        </label>
      </div>

      {/* Прогресс-бар */}
      <ProgressBar progress={progress} />

      <button onClick={() => setIsModalOpen(true)}>📋 Заметки</button>

      {/* Модальное окно */}
      <TechnologyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        technology={technology}
        onNotesChange={handleNotesChange}
      />
    </div>
  );
}

export default TechnologyCard;