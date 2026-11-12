import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Tariffs from './components/Tariffs';
import Features from './components/Features';
import Tournament from './components/Tournament';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews'; // НОВОЕ
import FAQ from './components/FAQ';         // НОВОЕ
import Contacts from './components/Contacts'; // НОВОЕ
import Booking from './components/Booking';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Tariffs />
        <Features />
        <Tournament />
        <Gallery />
        <Reviews />
        <FAQ />
        <Contacts />
        <Booking />
      </main>
      <Footer />
    </>
  );
}

export default App;