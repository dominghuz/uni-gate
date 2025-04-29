import Link from "next/link";

export default function PainelAdmin() {
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col p-6">
        <h2 className="text-xl font-bold mb-6">Administração</h2>
        <nav className="space-y-3 text-sm font-medium">
          <a href="/admin" className="block hover:text-blue-500">📊 Dashboard</a>
          <a href="/admin/candidatos" className="block hover:text-blue-500">👤 Candidatos</a>
          <a href="/admin/cursos" className="block hover:text-blue-500">🎓 Cursos</a>
          <a href="/admin/relatorios" className="block hover:text-blue-500">📈 Relatórios</a>
          <Link href="/" className="block text-sm text-blue-400 mt-10 hover:underline">← Voltar ao site</Link>
        </nav>
      </aside>

      {/* Conteúdo */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Painel Administrativo</h1>
          <p className="text-gray-600 dark:text-gray-300">Visão geral da plataforma.</p>
        </div>

        {/* Gráficos fake com placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-4">Inscrições por Curso</h2>
            <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-800 dark:to-indigo-900 rounded-lg flex items-center justify-center text-white/80">
              [ Gráfico de Barras ]
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-4">Distribuição de Candidatos</h2>
            <div className="h-48 bg-gradient-to-br from-green-400 to-teal-500 dark:from-green-700 dark:to-teal-800 rounded-lg flex items-center justify-center text-white/80">
              [ Gráfico de Pizza ]
            </div>
          </div>
        </div>

        {/* Tabela de Candidatos */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4">Últimos Candidatos</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="py-2 text-left font-medium">Nome</th>
                  <th className="py-2 text-left font-medium">Curso</th>
                  <th className="py-2 text-left font-medium">Status</th>
                  <th className="py-2 text-left font-medium">Data</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { nome: "Lucas Silva", curso: "Engenharia", status: "Aprovado", data: "22/04" },
                  { nome: "Ana Costa", curso: "Direito", status: "Pendente", data: "21/04" },
                  { nome: "Carlos Lima", curso: "Administração", status: "Reprovado", data: "20/04" },
                ].map((candidato, i) => (
                  <tr key={i} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/30">
                    <td className="py-2">{candidato.nome}</td>
                    <td className="py-2">{candidato.curso}</td>
                    <td className="py-2">{candidato.status}</td>
                    <td className="py-2">{candidato.data}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
