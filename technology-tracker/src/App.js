import './App.css';
import { useState } from 'react';

import Greeting from './components/Greeting';
import UserCard from './components/UserCard';
import TaskList from './components/TaskList';
import Counter from './components/Counter';
import RegistrationForm from './components/RegistrationForm';
import ColorPicker from './components/ColorPicker';
import TechnologyCard from './components/TechnologyCard';
import Statistics from './components/Statistics';
import QuickActions from './components/QuickActions';

function App() {
  const [technologies, setTechnologies] = useState([
    { id: 1, title: 'React Components', description: 'Изучение базовых компонентов', status: 'not-started' },
    { id: 2, title: 'JSX Syntax', description: 'Освоение синтаксиса JSX', status: 'not-started' },
    { id: 3, title: 'State Management', description: 'Работа с состоянием компонентов', status: 'not-started' },
    { id: 4, title: 'Props', description: 'Передача данных в компоненты', status: 'not-started' }
  ]);

  const handleStatusChange = (id, newStatus) => {
    setTechnologies(technologies.map(t => t.id === id ? { ...t, status: newStatus } : t));
  };

  return (
    <div className="App">
      <Greeting />
      <UserCard
        name="Иван Иванов"
        role="Администратор"
        avatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfVMhpKmVy_-iwfRLAiNiaDslMa-2oEz7KTw&s"
        isOnline={true}
      />
      <TaskList />
      <Counter />
      <RegistrationForm />
      <ColorPicker />
      
      <QuickActions technologies={technologies} setTechnologies={setTechnologies} />
      {technologies.map(tech => (
        <TechnologyCard key={tech.id} tech={tech} onStatusChange={handleStatusChange} />
      ))}
      <Statistics technologies={technologies} />
    </div>
  );
}

export default App;