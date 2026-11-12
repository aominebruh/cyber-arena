import './Hero.css';
import heroBg from '../assets/hero-bg.jpg'; // Импорт твоей картинки

export default function Hero() {
  return (
    <section 
      className="hero" 
      style={{ backgroundImage: `linear-gradient(rgba(11, 15, 25, 0.7), rgba(11, 15, 25, 0.9)), url(${heroBg})` }}
    >
      <div className="container hero-content">
        <h1>Твоя зона<br/>победы</h1>
        <p>Мощные ПК, мониторы 240Hz и комфорт для настоящих геймеров. Играй без лагов.</p>
        <a href="#tariffs" className="btn btn-primary">Выбрать компьютер</a>
      </div>
    </section>
  );
}