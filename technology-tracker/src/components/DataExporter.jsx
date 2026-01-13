function DataExporter({ technologies }) {
  const exportData = () => {
    if (!technologies.length) return;
    const dataStr = JSON.stringify({ version: '1.0', exportedAt: new Date().toISOString(), technologies }, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a'); link.href = url;
    link.download = `technology-roadmap-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link); link.click(); document.body.removeChild(link); URL.revokeObjectURL(url);
  };

  return (
    <div>
      <h3>Экспорт данных</h3>
      <button onClick={exportData} disabled={!technologies.length}>📥 Экспортировать JSON</button>
    </div>
  );
}

export default DataExporter;