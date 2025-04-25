export default function Header() {
    return (
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-lg bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">UG</span>
              </div>
              <span className="text-xl font-bold text-gray-800">UniGate</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-blue-600 font-medium">Início</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Funcionalidades</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Contato</a>
            </nav>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Acesso Restrito
            </button>
          </div>
        </div>
      </header>
    );
  }