import { useState } from 'react';
import TechnologyForm from './TechnologyForm';
import './TechnologyManager.css';

function TechnologyManager() {
  const [technologies, setTechnologies] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingTech, setEditingTech] = useState(null);

  const handleSaveTechnology = (techData) => {
    if (editingTech) {
      setTechnologies(prev => prev.map(tech => tech.id === editingTech.id ? { ...tech, ...techData } : tech));
    } else {
      setTechnologies(prev => [...prev, { ...techData, id: Date.now(), status: 'not-started' }]);
    }
    setShowForm(false);
    setEditingTech(null);
  };

  const handleEdit = (tech) => { setEditingTech(tech); setShowForm(true); };
  const handleCancel = () => { setShowForm(false); setEditingTech(null); };

  return (
    <div className="technology-manager">
      <h2>Управление технологиями</h2>
      <button onClick={() => setShowForm(true)}>+ Добавить технологию</button>

      <div className="technologies-list">
        {technologies.map(tech => (
          <div key={tech.id} className="technology-item">
            <h3>{tech.title}</h3>
            <p>{tech.description}</p>
            <button onClick={() => handleEdit(tech)}>Редактировать</button>
          </div>
        ))}
      </div>

      {showForm && (
        <div className="form-modal">
          <TechnologyForm
            onSave={handleSaveTechnology}
            onCancel={handleCancel}
            initialData={editingTech || {}}
          />
        </div>
      )}
    </div>
  );
}

export default TechnologyManager;