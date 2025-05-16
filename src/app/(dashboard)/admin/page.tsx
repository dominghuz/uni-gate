'use client'

import Link from "next/link";
import { useState } from "react";

export default function PainelAdmin() {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Dados mock para demonstração
  const recentCandidates = [
    { id: 1, name: "João Bernardo", course: "Direito", status: "Inscrito", date: "2023-11-01" },
    { id: 2, name: "Diogo Pedro", course: "Engenharia", status: "Aprovado", date: "2023-10-28" },
    { id: 3, name: "Paulo Simão", course: "Economia", status: "Em Análise", date: "2023-10-25" },
    { id: 4, name: "Edson Pontes", course: "Gestão", status: "Reprovado", date: "2023-10-20" },
    { id: 5, name: "Hatawa", course: "Medicina", status: "Inscrito", date: "2023-10-18" }
  ];

  const upcomingExams = [
    { id: 1, name: "Avaliação Trimestral", course: "Direito", date: "2023-11-15", type: "Híbrida" },
    { id: 2, name: "Prova Final", course: "Engenharia", date: "2023-11-18", type: "Discursiva" },
    { id: 3, name: "Teste Intermediário", course: "Economia", date: "2023-11-10", type: "Objetiva" }
  ];

  const systemStatus = {
    registrations: 248,
    examsScheduled: 12,
    examsCorrected: 87,
    pendingReviews: 5
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      day: '2-digit', 
      month: '2-digit',
      year: 'numeric'
    };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
  };

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col p-6">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Administração
        </h2>
        <nav className="space-y-2">
          <Link 
            href="/admin" 
            className={`flex items-center gap-2 p-2 rounded-lg ${activeTab === 'dashboard' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            Dashboard
          </Link>
          <Link 
            href="/admin/ViewSchedulesPage" 
            className={`flex items-center gap-2 p-2 rounded-lg ${activeTab === 'candidates' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
            onClick={() => setActiveTab('candidates')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            Candidatos
          </Link>
          <Link 
            href="/admin/cursos" 
            className={`flex items-center gap-2 p-2 rounded-lg ${activeTab === 'courses' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
            onClick={() => setActiveTab('courses')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
            Cursos
          </Link>
          <Link 
            href="/admin/SchedulingPage" 
            className={`flex items-center gap-2 p-2 rounded-lg ${activeTab === 'scheduling' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
            onClick={() => setActiveTab('scheduling')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Agendamentos
          </Link>
          <Link 
            href="/admin/resultados" 
            className={`flex items-center gap-2 p-2 rounded-lg ${activeTab === 'results' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
            onClick={() => setActiveTab('results')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Resultados
          </Link>
          <Link 
            href="/admin/relatorios" 
            className={`flex items-center gap-2 p-2 rounded-lg ${activeTab === 'reports' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
            onClick={() => setActiveTab('reports')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Relatórios
          </Link>
        </nav>

        <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-700">
          <Link href="/" className="flex items-center gap-2 text-sm text-blue-500 hover:underline">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Voltar ao site
          </Link>
        </div>
      </aside>

      {/* Conteúdo */}
      <main className="flex-1 p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            Painel Administrativo
          </h1>
          <p className="text-gray-600 dark:text-gray-300">Visão geral dos sistemas integrados</p>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow border-l-4 border-blue-500">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Inscrições</h3>
                <p className="text-2xl font-bold mt-1">{systemStatus.registrations}</p>
              </div>
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">+12% em relação ao mês passado</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow border-l-4 border-green-500">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Provas Agendadas</h3>
                <p className="text-2xl font-bold mt-1">{systemStatus.examsScheduled}</p>
              </div>
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Próxima: {upcomingExams[0]?.name}</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow border-l-4 border-purple-500">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Provas Corrigidas</h3>
                <p className="text-2xl font-bold mt-1">{systemStatus.examsCorrected}</p>
              </div>
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">{Math.round((systemStatus.examsCorrected / systemStatus.registrations) * 100)}% do total</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow border-l-4 border-yellow-500">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Recursos Pendentes</h3>
                <p className="text-2xl font-bold mt-1">{systemStatus.pendingReviews}</p>
              </div>
              <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Necessária atenção</p>
          </div>
        </div>

        {/* Grid de Conteúdo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Últimos Candidatos */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Últimos Candidatos</h2>
              <Link href="/admin/candidatos" className="text-sm text-blue-500 hover:underline">Ver todos</Link>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700 text-left">
                    <th className="py-2 font-medium">Nome</th>
                    <th className="py-2 font-medium">Curso</th>
                    <th className="py-2 font-medium">Status</th>
                    <th className="py-2 font-medium">Data</th>
                  </tr>
                </thead>
                <tbody>
                  {recentCandidates.map((candidate) => (
                    <tr key={candidate.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/30">
                      <td className="py-2">{candidate.name}</td>
                      <td className="py-2">{candidate.course}</td>
                      <td className="py-2">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                          candidate.status === 'Aprovado' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                          candidate.status === 'Inscrito' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                          candidate.status === 'Em Análise' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                          'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                        }`}>
                          {candidate.status}
                        </span>
                      </td>
                      <td className="py-2">{formatDate(candidate.date)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Próximas Provas */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Próximas Provas</h2>
              <Link href="/admin/agendamentos" className="text-sm text-blue-500 hover:underline">Ver todos</Link>
            </div>
            <div className="space-y-4">
              {upcomingExams.map((exam) => (
                <div key={exam.id} className="border-b border-gray-100 dark:border-gray-700 pb-4 last:border-0 last:pb-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{exam.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{exam.course}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded ${
                      exam.type === 'Objetiva' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' :
                      exam.type === 'Discursiva' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                      'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200'
                    }`}>
                      {exam.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-sm text-gray-500 dark:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {formatDate(exam.date)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gráficos (Placeholder) */}
        <div className="mt-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4">Inscrições por Curso (Últimos 30 dias)</h2>
          <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/30 rounded-lg flex items-center justify-center">
            <p className="text-gray-500 dark:text-gray-400">Gráfico de inscrições por curso</p>
          </div>
        </div>
      </main>
    </div>
  );
}