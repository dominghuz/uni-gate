export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">UG</span>
                </div>
                <span className="text-xl font-bold">UniGate</span>
              </div>
              <p className="mt-2 text-gray-400">© 2024 Todos os direitos reservados.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-blue-400 transition">Termos</a>
              <a href="#" className="hover:text-blue-400 transition">Privacidade</a>
              <a href="#" className="hover:text-blue-400 transition">Contato</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }