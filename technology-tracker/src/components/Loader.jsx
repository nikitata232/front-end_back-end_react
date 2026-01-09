import { useState, useEffect } from 'react';

function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="loader">
      {loading ? <p>Загрузка данных...</p> : <p>Данные загружены!</p>}
    </div>
  );
}

export default Loader;