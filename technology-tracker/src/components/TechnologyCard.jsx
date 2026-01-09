import './TechnologyCard.css';

function TechnologyCard({ title, description, status }) {
  let statusText;
  let statusClass;

  if (status === 'completed') {
    statusText = 'Завершено';
    statusClass = 'completed';
  } else if (status === 'in-progress') {
    statusText = 'В процессе';
    statusClass = 'in-progress';
  } else {
    statusText = 'Не начато';
    statusClass = 'not-started';
  }

  return (
    <div className={`tech-card ${statusClass}`}>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="status">{statusText}</span>
    </div>
  );
}

export default TechnologyCard;