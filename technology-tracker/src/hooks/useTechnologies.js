import { useState } from 'react';

export function useTechnologies() {
  const [technologies, setTechnologies] = useState([
    {
      id: 1,
      title: 'React',
      description: 'Frontend library',
      status: 'not-started',
      notes: '',
    },
    {
      id: 2,
      title: 'Node.js',
      description: 'Backend runtime',
      status: 'in-progress',
      notes: '',
    },
  ]);

  const updateStatus = (id, status) => {
    setTechnologies((prev) =>
      prev.map((tech) =>
        tech.id === id ? { ...tech, status } : tech
      )
    );
  };

  const updateNotes = (id, notes) => {
    setTechnologies((prev) =>
      prev.map((tech) =>
        tech.id === id ? { ...tech, notes } : tech
      )
    );
  };

  return { technologies, updateStatus, updateNotes };
}