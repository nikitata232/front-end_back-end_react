import { useState } from 'react';

function Conditional() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(prev => !prev);
  };

  return (
    <div className="conditional">
      <h2>Условный рендеринг</h2>
      <p>{isLoggedIn ? 'Вы вошли в систему' : 'Вы не авторизованы'}</p>
      <button onClick={toggleLogin}>
        {isLoggedIn ? 'Выйти' : 'Войти'}
      </button>
    </div>
  );
}

export default Conditional;