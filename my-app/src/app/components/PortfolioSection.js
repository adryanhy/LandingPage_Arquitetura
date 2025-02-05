// src/app/components/PortfolioSection.js
import Carousel from './Carousel';

export default function PortfolioSection() {
  const images = [
    '/images/portfolio1.jpg',
    '/images/portfolio2.jpg',
    '/images/portfolio3.jpg',
  ];

  return (
    <div className="p-8 bg-white">
      <h2 className="text-3xl font-bold text-center mb-4">Conheça meu trabalho</h2>
      <Carousel slides={images} />
    </div>
  );
}