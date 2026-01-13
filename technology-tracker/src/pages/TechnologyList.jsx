import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function TechnologyList() {
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('technologies');
    if (saved) {
      setTechnologies(JSON.parse(saved));
    }
  }, []);

  return (
    <div>
      <h1>Все технологии</h1>

      {technologies.length === 0 && <p>Пока нет технологий</p>}

      <ul>
        {technologies.map(tech => (
          <li key={tech.id}>
            <strong>{tech.title}</strong>{' '}
            <Link to={`/technology/${tech.id}`}>Подробнее</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TechnologyList;