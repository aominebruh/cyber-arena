import './Booking.css';
export default function Booking() {
  return (
    <section id="booking" className="booking">
      <div className="container">
        <h2 className="section-title">Забронировать ПК</h2>
        <div className="booking-form-container">
          <form className="booking-form">
            <input type="text" placeholder="Ваше имя" required />
            <input type="tel" placeholder="Телефон" required />
            <input type="text" placeholder="Дата и время" required />
            <button type="submit" className="btn btn-primary">Забронировать</button>
          </form>
        </div>
      </div>
    </section>
  );
}