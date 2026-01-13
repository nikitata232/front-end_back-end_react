import { useState, useEffect } from 'react';

function useTechnologiesApi() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchTechnologies = () => {
    setLoading(true);
    setError('');
    try {
      const data = JSON.parse(localStorage.getItem('techTrackerData') || '[]');
      setTechnologies(data);
    } catch (err) {
      setError('Ошибка загрузки технологий');
    }
    setLoading(false);
  };

  useEffect(() => { fetchTechnologies(); }, []);

  return { technologies, loading, error, refetch: fetchTechnologies };
}

export default useTechnologiesApi;