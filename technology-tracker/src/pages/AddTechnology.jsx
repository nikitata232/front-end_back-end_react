import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddTechnology() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const saved = localStorage.getItem('technologies');
    const technologies = saved ? JSON.parse(saved) : [];

    const newTech = {
      id: Date.now(),
      title,
      description
    };

    localStorage.setItem(
      'technologies',
      JSON.stringify([...technologies, newTech])
    );

    navigate('/technologies');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Добавить технологию</h1>

      <input
        placeholder="Название"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />

      <textarea
        placeholder="Описание"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />

      <button type="submit">Сохранить</button>
    </form>
  );
}

export default AddTechnology;