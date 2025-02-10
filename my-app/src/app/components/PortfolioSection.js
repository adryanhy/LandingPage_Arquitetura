// src/app/components/PortfolioSection.js
import Carousel from './Carousel';

export default function PortfolioSection() {
  const images = [
    './images/academia.jpg',
    './images/quarto-4.jfif',
    './images/quarto-2.jpeg',
  ];

  return (
    <div className="p-8 bg-white h-128">
      <h2 className="text-3xl font-bold text-center mb-4 text-gray-700">Conheça meu trabalho</h2>
      <Carousel slides={images} />
    </div>
  );
}