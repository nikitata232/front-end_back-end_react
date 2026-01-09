import './ProgressHeader.css';

function ProgressHeader({ technologies }) {
  const total = technologies.length;
  const completed = technologies.filter(
    tech => tech.status === 'completed'
  ).length;

  const percent = total === 0
    ? 0
    : Math.round((completed / total) * 100);

  return (
    <div className="progress-header">
      <h2>Прогресс обучения</h2>

      <p>
        Изучено <strong>{completed}</strong> из <strong>{total}</strong>
      </p>

      <div className="progress-bar">
        <div
          className="progress-bar__fill"
          style={{ width: `${percent}%` }}
        ></div>
      </div>

      <span className="progress-percent">{percent}%</span>
    </div>
  );
}

export default ProgressHeader;
