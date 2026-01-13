import React from 'react';
import { useParams } from 'react-router-dom';

function TechnologyDetail({ technologies }) {
  const { id } = useParams();
  const tech = technologies.find(t => t.id === parseInt(id));

  if (!tech) return <p>Технология не найдена</p>;

  return (
    <div>
      <h2>{tech.title}</h2>
      <p>{tech.description}</p>
      <p>Категория: {tech.category}</p>
      <p>Сложность: {tech.difficulty}</p>
      <ul>
        {tech.resources.map((r, i) => (
          <li key={i}><a href={r} target="_blank" rel="noreferrer">{r}</a></li>
        ))}
      </ul>
    </div>
  );
}

export default TechnologyDetail;