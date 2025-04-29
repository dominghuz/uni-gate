import Link from "next/link";
import Image from "next/image";

export default function Login() {
  return (
    <section className="min-h-screen flex">
      {/* Lado esquerdo com imagem de fundo */}
      <div className="hidden md:flex w-1/2 bg-indigo-900 relative overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/6929214/pexels-photo-6929214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Substitua pela sua imagem de tranquilidade
          alt="Paisagem tranquila"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-90"
        />
        <div className="absolute inset-0 bg-indigo-900/30 backdrop-blur-sm flex items-center justify-center">
          <div className="text-center p-8 max-w-md">
            <h1 className="text-4xl font-bold text-white mb-4">Bem-vindo de volta</h1>
            <p className="text-blue-100 text-lg">
              Entre em sua conta e continue sua jornada conosco.
            </p>
          </div>
        </div>
      </div>

      {/* Lado direito com formulário */}
      <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-950 to-indigo-900 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4 py-12 relative">
        {/* Link de voltar */}
        <Link 
          href="/" 
          className="absolute top-6 left-6 text-blue-200 hover:text-white text-sm transition flex items-center"
        >
          ← Voltar para Home
        </Link>

        <div className="relative max-w-md w-full bg-white/5 dark:bg-gray-900/60 backdrop-blur-md border border-white/10 dark:border-gray-700/40 rounded-2xl p-8 shadow-xl">
          <h2 className="text-3xl font-semibold text-center text-white dark:text-gray-100 mb-6">
            Acesse sua Conta
          </h2>
          <form className="space-y-5">
            <div>
              <label className="block text-sm text-blue-100 mb-1">Email</label>
              <input
                type="email"
                placeholder="seu@email.com"
                className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm text-blue-100 mb-1">Senha</label>
              <input
                type="password"
                placeholder="********"
                className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-blue-100">
                <input type="checkbox" className="rounded bg-white/10 border-white/10 mr-2" />
                Lembrar-me
              </label>
              <a href="#" className="text-blue-200 hover:text-white">
                Esqueceu a senha?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-all duration-200"
            >
              Entrar
            </button>
          </form>
          <p className="text-sm text-center text-blue-100 mt-5">
            Não tem uma conta?{' '}
            <a href="/register" className="underline hover:text-white transition-colors">
              Cadastre-se
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}