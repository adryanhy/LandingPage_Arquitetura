export default function ContactSection() {
    return (
      <div className="p-8 bg-white">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Contato</h2>
        <div className="flex justify-center space-x-4">
          <a href="https://wa.me/5511999999999" className="bg-green-500 text-white-bold px-6 py-2 rounded-lg">
            WhatsApp
          </a>
          <a href="https://instagram.com/arquiteta" className="bg-pink-500 text-white px-6 py-2 rounded-lg">
            Instagram
          </a>
        </div>
      </div>
    );
  }