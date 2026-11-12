import './Tariffs.css';
export default function Tariffs() {
  const plans = [
    { name: 'STANDARD', price: '150 ₽/ч', specs: ['RTX 3060', '16GB RAM', 'Монитор 144Hz'], featured: false },
    { name: 'PRO', price: '250 ₽/ч', specs: ['RTX 4070', '32GB RAM', 'Монитор 240Hz'], featured: true },
    { name: 'VIP', price: '500 ₽/ч', specs: ['Отдельная комната', 'PS5', 'Диван'], featured: false },
  ];
  return (
    <section id="tariffs" className="tariffs">
      <div className="container">
        <h2 className="section-title">Выбери свою зону</h2>
        <div className="tariffs-grid">
          {plans.map((plan, index) => (
            <div className={`tariff-card ${plan.featured ? 'featured' : ''}`} key={index}>
              <div className="tariff-header"><h3>{plan.name}</h3><div className="tariff-price">{plan.price}</div></div>
              <ul className="tariff-specs">{plan.specs.map((spec, i) => <li key={i}>{spec}</li>)}</ul>
              <button className={`btn ${plan.featured ? 'btn-primary' : 'btn-outline'}`}>Выбрать</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}