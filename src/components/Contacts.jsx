import './Contacts.css';

export default function Contacts() {
  return (
    <section id="contacts" className="contacts">
      <div className="container contacts-container">
        <div className="contacts-info">
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '30px' }}>Как нас найти</h2>
          <div className="info-item">
            <h3>Адрес</h3>
            <p>г. Екатеринбург, ул. Куйбышева, д. 67 (ТЦ "Пассаж", 2 этаж)</p>
          </div>
          <div className="info-item">
            <h3>Режим работы</h3>
            <p>Круглосуточно, 24/7</p>
          </div>
          <div className="info-item">
            <h3>Телефон</h3>
            <p>+7 (228) 228-67-67</p>
          </div>
        </div>
        <div className="contacts-map">
          {/* Это встроенная карта Яндекса (Москва) */}
          <iframe 
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A3c8011991e9189f8a701e7b71b19b7b258da6e73188e88cf6bc40e12519a0e64&amp;source=constructor" 
            width="100%" 
            height="400" 
            frameBorder="0"
            title="Карта"
          ></iframe>
        </div>
      </div>
    </section>
  );
}