import React from 'react';
import './TechnologyCard.css';

function TechnologyCard({ tech }) {
  return (
    <div className="technology-card">
      <h3>{tech.title}</h3>
      <p>{tech.description}</p>
      <p>
        <strong>Категория:</strong> {tech.category}
      </p>
      <p>
        <strong>Сложность:</strong> {tech.difficulty}
      </p>
      {tech.resources && tech.resources.length > 0 && (
        <ul>
          {tech.resources.map((res, idx) => (
            <li key={idx}>
              <a href={res} target="_blank" rel="noopener noreferrer">
                {res}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TechnologyCard;