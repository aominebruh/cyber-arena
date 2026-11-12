import './Tournament.css';
import dotaBg from '../assets/dota-bg.jpg'; // Импорт картинки для Доты

export default function Tournament() {
  return (
    <section 
      id="tournaments" 
      className="tournament"
      style={{ backgroundImage: `linear-gradient(to right, rgba(11,15,25,0.9) 20%, rgba(11,15,25,0.5)), url(${dotaBg})` }}
    >
      <div className="container tournament-content">
        <div className="tournament-text">
          <h2>ТУРНИР ПО DOTA 2</h2>
          <p>Призовой фонд 50 000 ₽. Собери пати и победи.</p>
        </div>
        <a href="#booking" className="btn btn-primary">Участвовать</a>
      </div>
    </section>
  );
}