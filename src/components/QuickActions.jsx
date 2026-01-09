function QuickActions({ technologies, setTechnologies }) {
  const markAllCompleted = () => {
    setTechnologies(technologies.map(t => ({ ...t, status: 'completed' })));
  };

  const resetAll = () => {
    setTechnologies(technologies.map(t => ({ ...t, status: 'not-started' })));
  };

  const randomNext = () => {
    const notCompleted = technologies.filter(t => t.status !== 'completed');
    if (notCompleted.length === 0) return;
    const randomIndex = Math.floor(Math.random() * notCompleted.length);
    const randomTech = notCompleted[randomIndex];
    const statusOrder = ['not-started', 'in-progress', 'completed'];
    const currentIndex = statusOrder.indexOf(randomTech.status);
    const nextStatus = statusOrder[(currentIndex + 1) % statusOrder.length];
    setTechnologies(technologies.map(t => 
      t.id === randomTech.id ? { ...t, status: nextStatus } : t
    ));
  };

  return (
    <div className="quick-actions">
      <h3>Быстрые действия</h3>
      <button onClick={markAllCompleted}>Отметить все как выполненные</button>
      <button onClick={resetAll}>Сбросить все статусы</button>
      <button onClick={randomNext}>Случайный выбор следующей технологии</button>
    </div>
  );
}

export default QuickActions;