import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        {/* Обернули логотип в ссылку */}
        <a href="#" className="logo">CYBER ARENA</a>
        
        <nav className="nav">
          <a href="#tariffs">Тарифы</a>
          <a href="#tournaments">Турниры</a>
          <a href="#contacts">Контакты</a>
        </nav>
        <a href="#booking" className="btn btn-primary">Забронировать</a>
      </div>
    </header>
  );
}