import React, { useState } from 'react';
import './Modal.css';

function TechnologyModal({ isOpen, onClose, technology, onNotesChange }) {
  const [notes, setNotes] = useState(technology?.notes || '');

  if (!isOpen || !technology) return null;

  const handleSave = () => {
    onNotesChange(notes);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Заметки для {technology.title}</h2>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        <button onClick={handleSave}>Сохранить</button>
        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
}

export default TechnologyModal;