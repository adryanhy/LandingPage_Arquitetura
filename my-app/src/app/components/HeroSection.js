import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-gray-100">
      <div className="md:w-1/2 space-y-4">
        <h1 className="text-4xl font-bold">Transformando sonhos em realidade</h1>
        <p className="text-gray-600">Arquitetura e design de interiores com excelência e criatividade.</p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">Entre em contato</button>
      </div>
      <div className="md:w-1/2">
        <Image
          src="/images/hero-image.jpg"
          alt="Hero Image"
          width={600}
          height={400}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}