import React from 'react';
import TechnologyCard from './TechnologyCard';
import './TechnologyList.css';

function TechnologyList({ technologies }) {
  if (!technologies || technologies.length === 0) {
    return <p>Нет технологий для отображения</p>;
  }

  return (
    <div className="technology-list">
      {technologies.map((tech) => (
        <TechnologyCard key={tech.id} tech={tech} />
      ))}
    </div>
  );
}

export default TechnologyList;