import React, { useState } from 'react';
import useTechnologies from '../hooks/useTechnologies';
import './RoadmapImporter.css';

function RoadmapImporter() {
  const { addTechnology } = useTechnologies();
  const [importing, setImporting] = useState(false);

  const handleExampleImport = async () => {
    setImporting(true);
    try {
      const exampleTechs = [
        { title: 'Vue', description: 'Фреймворк для фронтенда', category: 'frontend', difficulty: 'beginner', resources: ['https://vuejs.org'] },
        { title: 'Express', description: 'Фреймворк для Node.js', category: 'backend', difficulty: 'intermediate', resources: ['https://expressjs.com'] },
      ];
      for (const tech of exampleTechs) {
        await addTechnology(tech);
      }
      alert(`Импортировано ${exampleTechs.length} технологий`);
    } catch (err) {
      alert('Ошибка при импорте технологий');
    } finally {
      setImporting(false);
    }
  };

  return (
    <div className="roadmap-importer">
      <h3>Импорт дорожной карты</h3>
      <button onClick={handleExampleImport} disabled={importing}>
        {importing ? 'Импорт...' : 'Импорт пример дорожной карты'}
      </button>
    </div>
  );
}

export default RoadmapImporter;