import { useState } from 'react';

function DataImporter({ onImport }) {
  const [error, setError] = useState('');

  const handleFile = (file) => {
    setError('');
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        if (!data.technologies || !Array.isArray(data.technologies)) throw new Error('Неверный формат');
        onImport(data.technologies);
      } catch (err) { setError(`Ошибка импорта: ${err.message}`); }
    };
    reader.readAsText(file);
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) handleFile(file);
    e.target.value = '';
  };

  return (
    <div>
      <h3>Импорт данных</h3>
      <input type="file" accept=".json" onChange={handleChange} />
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
}

export default DataImporter;