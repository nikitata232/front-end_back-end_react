import './App.css';
import Greeting from './components/Greeting';
import UserCard from './components/UserCard';
import TaskList from './components/TaskList';
import Counter from './components/Counter';
import RegistrationForm from './components/RegistrationForm';
import ColorPicker from './components/ColorPicker';
import TechnologyCard from './components/TechnologyCard';
import Statistics from './components/Statistics';
import QuickActions from './components/QuickActions';
import Conditional from './components/Conditional';
import Loader from './components/Loader';
import { useState } from 'react';

function App() {
  const [technologies, setTechnologies] = useState([
    { id: 1, title: 'React Components', description: 'Изучение базовых компонентов', status: 'not-started' },
    { id: 2, title: 'JSX Syntax', description: 'Освоение синтаксиса JSX', status: 'in-progress' },
    { id: 3, title: 'State Management', description: 'Работа с состоянием компонентов', status: 'completed' },
  ]);

  const updateTechnologyStatus = (id) => {
    setTechnologies(prev =>
      prev.map(tech => {
        if (tech.id === id) {
          const nextStatus =
            tech.status === 'not-started'
              ? 'in-progress'
              : tech.status === 'in-progress'
              ? 'completed'
              : 'not-started';
          return { ...tech, status: nextStatus };
        }
        return tech;
      })
    );
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
      <h2>Технологии</h2>
      <div className="technology-list">
        {technologies.map(tech => (
          <TechnologyCard
            key={tech.id}
            tech={tech}
            onStatusChange={updateTechnologyStatus}
          />
        ))}
      </div>
      <Statistics technologies={technologies} />
      <QuickActions technologies={technologies} setTechnologies={setTechnologies} />
      <Conditional />
      <Loader />
    </div>
  );
}

export default App;