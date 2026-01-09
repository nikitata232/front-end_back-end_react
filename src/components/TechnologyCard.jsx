import './TechnologyCard.css';

function TechnologyCard({ tech, onStatusChange }) {
  const handleClick = () => {
    const statusOrder = ['not-started', 'in-progress', 'completed'];
    const currentIndex = statusOrder.indexOf(tech.status);
    const nextStatus = statusOrder[(currentIndex + 1) % statusOrder.length];
    onStatusChange(tech.id, nextStatus);
  };

  return (
    <div className={`technology-card status-${tech.status}`} onClick={handleClick}>
      <h3>{tech.title}</h3>
      <p>{tech.description}</p>
      <p>Статус: <strong>{tech.status}</strong></p>
    </div>
  );
}

export default TechnologyCard;