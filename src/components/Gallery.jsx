import './Gallery.css';
import gal1 from '../assets/gallery-1.jpg';
import gal2 from '../assets/gallery-2.jpg';
import gal3 from '../assets/gallery-3.jpg';
import gal4 from '../assets/gallery-4.jpg';

export default function Gallery() {
  // Собираем импортированные картинки в массив
  const images = [gal1, gal2, gal3, gal4];

  return (
    <section className="gallery">
      <div className="container">
        <h2 className="section-title">Наша атмосфера</h2>
        <p style={{textAlign: 'center', color: 'var(--text-gray)', marginBottom: '40px'}}>Вам ничего не мешает, только темнота и приятный цвет</p>
        <div className="gallery-grid">
          {images.map((img, i) => (
            <img src={img} alt={`Галерея ${i + 1}`} key={i} className="gallery-img" />
          ))}
        </div>
      </div>
    </section>
  );
}