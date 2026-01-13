import { useState, useEffect } from 'react';

function DataImportExport() {
  const [technologies, setTechnologies] = useState([]);
  const [status, setStatus] = useState('');

  useEffect(() => {
    const savedData = localStorage.getItem('techTrackerData');
    if (savedData) {
      try { setTechnologies(JSON.parse(savedData)); setStatus(`Загружено ${JSON.parse(savedData).length} технологий`); }
      catch { setStatus('Ошибка загрузки данных'); }
    }
  }, []);

  useEffect(() => { if (technologies.length) localStorage.setItem('techTrackerData', JSON.stringify(technologies)); }, [technologies]);

  const handleExport = () => {
    const dataStr = JSON.stringify({ version: '1.0', exportedAt: new Date().toISOString(), technologies }, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a'); link.href = url;
    link.download = `tech-tracker-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link); link.click(); document.body.removeChild(link); URL.revokeObjectURL(url);
    setStatus(`Экспортировано ${technologies.length} технологий`);
  };

  const handleImport = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const importedData = JSON.parse(e.target.result);
        if (!importedData.technologies || !Array.isArray(importedData.technologies)) throw new Error('Неверный формат файла');
        setTechnologies(prev => [...prev, ...importedData.technologies]);
        setStatus(`Импортировано ${importedData.technologies.length} технологий`);
      } catch (err) { setStatus(`Ошибка импорта: ${err.message}`); }
    };
    reader.readAsText(file); event.target.value = '';
  };

  return (
    <div style={{ maxWidth: '800px', margin: '20px auto', padding: '20px' }}>
      <h1>Импорт/Экспорт данных</h1>
      {status && <div>{status}</div>}
      <button onClick={handleExport} disabled={!technologies.length}>📥 Экспорт</button>
      <input type="file" accept=".json" onChange={handleImport} />
      <div>Всего технологий: {technologies.length}</div>
    </div>
  );
}

export default DataImportExport;