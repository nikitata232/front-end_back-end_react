import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <Link to="/">Главная</Link> |{' '}
      <Link to="/technologies">Технологии</Link> |{' '}
      <Link to="/add-technology">Добавить</Link>
    </nav>
  );
}

export default Navigation;