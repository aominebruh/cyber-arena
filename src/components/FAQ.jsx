import './FAQ.css';

export default function FAQ() {
  const faqs = [
    { q: 'Можно ли прийти одному?', a: 'Конечно! У нас много одиночных мест, а наши администраторы всегда помогут выбрать место.' },
    { q: 'Со скольки лет можно посещать клуб?', a: 'Мы принимаем гостей с 14 лет. Если вам меньше 16, потребуется письменное согласие родителей.' },
    { q: 'Можно ли приносить свою еду и напитки?', a: 'Приносить свою еду нельзя, но у нас есть энергетики и снеки, нужно лишь подойти к администратору.' },
  ];

  return (
    <section className="faq">
      <div className="container">
        <h2 className="section-title">Частые вопросы</h2>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <details className="faq-item" key={i}>
              <summary className="faq-question">{faq.q}</summary>
              <p className="faq-answer">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}