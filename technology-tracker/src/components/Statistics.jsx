function Statistics({ technologies }) {
  const total = technologies.length;
  const completed = technologies.filter(t => t.status === 'completed').length;
  const inProgress = technologies.filter(t => t.status === 'in-progress').length;
  const notStarted = technologies.filter(t => t.status === 'not-started').length;
  const completionPercent = total ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="statistics">
      <h2>Статистика прогресса</h2>
      <p>Всего технологий: {total}</p>
      <p>Не начато: {notStarted}</p>
      <p>В процессе: {inProgress}</p>
      <p>Завершено: {completed}</p>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${completionPercent}%` }}></div>
      </div>
      <p>Процент выполнения: {completionPercent}%</p>
    </div>
  );
}

export default Statistics;