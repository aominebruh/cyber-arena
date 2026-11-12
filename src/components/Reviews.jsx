import './Reviews.css';

export default function Reviews() {
  const reviews = [
    { name: 'Алексей', text: 'Клуб хороший! ПК летают, интернет не лагает. Провожу довольно много времени..', rating: '★★★★★' },
    { name: 'Дмитрий', text: 'Был на турнире по Доте, всё организовано на высшем уровне. Смогли занять 2-ое место.', rating: '★★★★★' },
    { name: 'Максим', text: 'Мониторы 240Гц, тут, лучшее что видел в городе. Кресла удобные, спина не болит после 5 часов игр.', rating: '★★★★★' },
  ];

  return (
    <section className="reviews">
      <div className="container">
        <h2 className="section-title">Отзывы игроков</h2>
        <div className="reviews-grid">
          {reviews.map((rev, i) => (
            <div className="review-card" key={i}>
              <div className="review-stars">{rev.rating}</div>
              <p className="review-text">"{rev.text}"</p>
              <div className="review-author">— {rev.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}