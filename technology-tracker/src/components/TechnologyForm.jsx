import { useState, useEffect } from 'react';
import './TechnologyForm.css';

function TechnologyForm({ onSave, onCancel, initialData = {} }) {
  const [formData, setFormData] = useState({
    title: initialData.title || '',
    description: initialData.description || '',
    category: initialData.category || 'frontend',
    difficulty: initialData.difficulty || 'beginner',
    deadline: initialData.deadline || '',
    resources: initialData.resources || ['']
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Название технологии обязательно';
    else if (formData.title.trim().length < 2) newErrors.title = 'Название должно содержать минимум 2 символа';
    else if (formData.title.trim().length > 50) newErrors.title = 'Название не должно превышать 50 символов';

    if (!formData.description.trim()) newErrors.description = 'Описание технологии обязательно';
    else if (formData.description.trim().length < 10) newErrors.description = 'Описание должно содержать минимум 10 символов';

    if (formData.deadline) {
      const deadlineDate = new Date(formData.deadline);
      const today = new Date(); today.setHours(0,0,0,0);
      if (deadlineDate < today) newErrors.deadline = 'Дедлайн не может быть в прошлом';
    }

    formData.resources.forEach((res, idx) => {
      if (res && !isValidUrl(res)) newErrors[`resource_${idx}`] = 'Введите корректный URL';
    });

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  };

  const isValidUrl = (string) => { try { new URL(string); return true } catch (_) { return false } };

  useEffect(() => validateForm(), [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleResourceChange = (index, value) => {
    const newResources = [...formData.resources]; newResources[index] = value;
    setFormData(prev => ({ ...prev, resources: newResources }));
  };

  const addResourceField = () => setFormData(prev => ({ ...prev, resources: [...prev.resources, ''] }));
  const removeResourceField = (index) => {
    if (formData.resources.length > 1) {
      setFormData(prev => ({ ...prev, resources: prev.resources.filter((_, i) => i !== index) }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) onSave({ ...formData, resources: formData.resources.filter(r => r.trim() !== '') });
  };

  return (
    <form onSubmit={handleSubmit} className="technology-form" noValidate>
      <h2>{initialData.title ? 'Редактирование технологии' : 'Добавление новой технологии'}</h2>

      {/* Название */}
      <div className="form-group">
        <label htmlFor="title" className="required">Название технологии</label>
        <input
          id="title" name="title" type="text"
          value={formData.title} onChange={handleChange}
          className={errors.title ? 'error' : ''}
          aria-describedby={errors.title ? 'title-error' : undefined}
          required
        />
        {errors.title && <span id="title-error" className="error-message">{errors.title}</span>}
      </div>

      {/* Описание */}
      <div className="form-group">
        <label htmlFor="description" className="required">Описание</label>
        <textarea
          id="description" name="description"
          value={formData.description} onChange={handleChange}
          className={errors.description ? 'error' : ''}
          rows="4"
          aria-describedby={errors.description ? 'description-error' : undefined}
          required
        />
        {errors.description && <span id="description-error" className="error-message">{errors.description}</span>}
      </div>

      {/* Категория и сложность */}
      <div className="form-group">
        <label htmlFor="category">Категория</label>
        <select id="category" name="category" value={formData.category} onChange={handleChange}>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="mobile">Mobile</option>
          <option value="devops">DevOps</option>
          <option value="database">Базы данных</option>
          <option value="tools">Инструменты</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="difficulty">Уровень сложности</label>
        <select id="difficulty" name="difficulty" value={formData.difficulty} onChange={handleChange}>
          <option value="beginner">Начинающий</option>
          <option value="intermediate">Средний</option>
          <option value="advanced">Продвинутый</option>
        </select>
      </div>

      {/* Дедлайн */}
      <div className="form-group">
        <label htmlFor="deadline">Планируемая дата освоения</label>
        <input
          id="deadline" name="deadline" type="date"
          value={formData.deadline} onChange={handleChange}
          className={errors.deadline ? 'error' : ''}
          aria-describedby={errors.deadline ? 'deadline-error' : undefined}
        />
        {errors.deadline && <span id="deadline-error" className="error-message">{errors.deadline}</span>}
      </div>

      {/* Ресурсы */}
      <div className="form-group">
        <label>Ресурсы для изучения</label>
        {formData.resources.map((res, idx) => (
          <div key={idx} className="resource-field">
            <input
              type="url" value={res}
              onChange={(e) => handleResourceChange(idx, e.target.value)}
              className={errors[`resource_${idx}`] ? 'error' : ''}
              aria-describedby={errors[`resource_${idx}`] ? `resource-${idx}-error` : undefined}
            />
            {formData.resources.length > 1 && <button type="button" onClick={() => removeResourceField(idx)}>×</button>}
            {errors[`resource_${idx}`] && <span id={`resource-${idx}-error`} className="error-message">{errors[`resource_${idx}`]}</span>}
          </div>
        ))}
        <button type="button" onClick={addResourceField}>+ Добавить ещё ресурс</button>
      </div>

      {/* Кнопки */}
      <div className="form-actions">
        <button type="submit" disabled={!isFormValid}> {initialData.title ? 'Обновить' : 'Добавить'} </button>
        <button type="button" onClick={onCancel}>Отмена</button>
      </div>

      {!isFormValid && <div className="form-validation-info">⚠️ Заполните все обязательные поля корректно</div>}
    </form>
  );
}

export default TechnologyForm;