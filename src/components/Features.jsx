import './Features.css';
// Импортируем крутые иконки из библиотеки
import { FaBolt, FaCoffee, FaTrophy } from 'react-icons/fa';

export default function Features() {
  const features = [
    { title: '1 Гбит/с', desc: 'Стабильный интернет без лагов и пинга', icon: <FaBolt /> },
    { title: 'Кофе и снеки', desc: 'Принесем всё прямо к твоему ПК', icon: <FaCoffee /> },
    { title: 'Турниры', desc: 'Играем на призовые каждую пятницу', icon: <FaTrophy /> },
  ];

  return (
    <section className="features">
      <div className="container">
        <h2 className="section-title">Почему выбирают нас</h2>
        <div className="features-grid">
          {features.map((f, i) => (
            <div className="feature-card" key={i}>
              {/* Иконка теперь рендерится как React-компонент */}
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}