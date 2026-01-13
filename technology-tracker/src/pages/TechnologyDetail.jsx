import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function TechnologyDetail() {
  const { techId } = useParams();
  const [technology, setTechnology] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('technologies');
    if (saved) {
      const list = JSON.parse(saved);
      const found = list.find(t => t.id === Number(techId));
      setTechnology(found);
    }
  }, [techId]);

  if (!technology) {
    return (
      <div>
        <p>Технология не найдена</p>
        <Link to="/technologies">Назад</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{technology.title}</h1>
      <p>{technology.description}</p>

      <Link to="/technologies">← Назад</Link>
    </div>
  );
}

export default TechnologyDetail;