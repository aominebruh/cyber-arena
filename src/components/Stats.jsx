import './Stats.css';
export default function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <h2 className="section-title">Клуб, в который хочется вернуться</h2>
        <div className="stats-grid">
          <div className="stat-item"><span className="stat-number">50+</span><span className="stat-text">Игровых ПК</span></div>
          <div className="stat-item"><span className="stat-number">240Hz</span><span className="stat-text">Мониторы</span></div>
          <div className="stat-item"><span className="stat-number">1 Гбит/с</span><span className="stat-text">Интернет</span></div>
        </div>
      </div>
    </section>
  );
}