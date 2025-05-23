'use client'

import { useState } from 'react';
import Link from 'next/link';

export default function SchedulingPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    examName: '',
    course: '',
    examType: '',
    examDate: '',
    examDuration: '',
    secondCallEligible: false,
    secondCallDate: '',
    publicationDate: ''
  });

  const next = () => setStep((prev) => Math.min(prev + 1, 3));
  const back = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const steps = [
    { id: 1, name: 'Informações Básicas' },
    { id: 2, name: 'Configuração de Datas' },
    { id: 3, name: 'Segunda Chamada' }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-950 to-indigo-900 dark:from-gray-900 dark:to-gray-800 flex flex-col md:flex-row relative">
      {/* Link de voltar */}
      <Link href="/admin" className="absolute top-6 left-6 text-blue-200 hover:text-white text-sm transition z-10">
        ← Voltar para Painel
      </Link>

      {/* Lado Esquerdo - Informativo */}
      <div className="md:w-1/2 flex items-center justify-center p-8 md:p-12 bg-white/5 backdrop-blur-md border-r border-white/10">
        <div className="max-w-md space-y-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
              </svg>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">Agendamento de Provas</h1>
          </div>
          
          <p className="text-blue-100 leading-relaxed">
            Configure os períodos de avaliação, datas importantes e regras para segunda chamada.
          </p>
          
          <div className="space-y-4 mt-8">
            {steps.map((item) => (
              <div key={item.id} className="flex items-start gap-3">
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${step >= item.id ? 'bg-blue-600 text-white' : 'bg-white/10 text-blue-200'}`}>
                  {item.id}
                </div>
                <div>
                  <h3 className={`text-sm font-medium ${step >= item.id ? 'text-white' : 'text-blue-200'}`}>{item.name}</h3>
                  {step === item.id && (
                    <p className="text-xs text-blue-300 mt-1">Etapa atual</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-800/30 p-4 rounded-lg border border-blue-700/50 mt-8">
            <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              Dicas de Agendamento
            </h3>
            <ul className="text-sm text-blue-200 space-y-2">
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Verifique o calendário acadêmico antes de agendar
              </li>
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Considere feriados e eventos institucionais
              </li>
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Deixe pelo menos 3 dias entre a prova e a publicação de resultados
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Lado Direito - Formulário */}
      <div className="md:w-1/2 p-6 md:p-10 flex items-center justify-center">
        <div className="bg-white/5 backdrop-blur-xl p-6 md:p-8 rounded-xl border border-white/10 w-full max-w-xl">
          {/* Barra de progresso visual */}
          <div className="mb-8">
            <div className="flex justify-between mb-2 text-xs text-blue-200">
              <span>Progresso</span>
              <span>{step}/3 etapas</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                style={{ width: `${(step / 3) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Conteúdo por etapa */}
          <div className="space-y-6">
            {step === 1 && (
              <>
                <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                  Informações Básicas
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-blue-100 mb-1">Nome da Prova</label>
                    <input 
                      type="text" 
                      name="examName"
                      value={formData.examName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 border border-white/10"
                      placeholder="Ex: Avaliação Trimestral de Matemática"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm text-blue-100 mb-1 flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                      </svg>
                      Curso
                    </label>
                    <select 
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 border border-white/10 appearance-none"
                      required
                    >
                      <option className='text-gray-700' value="">Selecione um curso</option>
                      <option className='text-gray-700' value="direito">Direito</option>
                      <option className='text-gray-700' value="gestao">Gestão de Empresas</option>
                      <option className='text-gray-700' value="economia">Economia</option>
                      <option className='text-gray-700' value="engenharia">Engenharia Civil</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm text-blue-100 mb-1 flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      Tipo de Prova
                    </label>
                    <select 
                      name="examType"
                      value={formData.examType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 border border-white/10 appearance-none"
                      required
                    >
                      <option className='text-gray-700' value="">Selecione o tipo</option>
                      <option className='text-gray-700' value="objective">Objetiva</option>
                      <option className='text-gray-700' value="discursive">Discursiva</option>
                      <option className='text-gray-700' value="hybrid">Híbrida</option>
                    </select>
                  </div>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  Configuração de Datas
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-blue-100 mb-1">Data da Prova</label>
                    <input 
                      type="datetime-local" 
                      name="examDate"
                      value={formData.examDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 border border-white/10"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-blue-100 mb-1">Duração (minutos)</label>
                    <input 
                      type="number" 
                      name="examDuration"
                      value={formData.examDuration}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 border border-white/10"
                      placeholder="Ex: 120"
                      min="30"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-blue-100 mb-1">Data de Publicação dos Resultados</label>
                    <input 
                      type="datetime-local" 
                      name="publicationDate"
                      value={formData.publicationDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 border border-white/10"
                      required
                    />
                  </div>
                  <div className="flex items-center gap-3 pt-2">
                    <input 
                      type="checkbox" 
                      id="secondCallEligible"
                      name="secondCallEligible"
                      checked={formData.secondCallEligible as boolean}
                      onChange={handleChange}
                      className="w-4 h-4 text-blue-600 bg-white/10 border-white/10 rounded focus:ring-blue-500 focus:ring-2"
                    />
                    <label htmlFor="secondCallEligible" className="text-sm text-blue-100">
                      Permitir segunda chamada para esta prova
                    </label>
                  </div>
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                  Segunda Chamada
                </h2>
                <div className="space-y-4">
                  {formData.secondCallEligible ? (
                    <>
                      <div>
                        <label className="block text-sm text-blue-100 mb-1">Data da Segunda Chamada</label>
                        <input 
                          type="datetime-local" 
                          name="secondCallDate"
                          value={formData.secondCallDate}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 border border-white/10"
                          required
                        />
                      </div>
                      <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                        <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                          </svg>
                          Regras para Segunda Chamada
                        </h3>
                        <p className="text-xs text-blue-300 mt-2">
                          Os candidatos poderão solicitar segunda chamada até 24 horas após a prova original. Será necessário apresentar justificativa documentada.
                        </p>
                      </div>
                    </>
                  ) : (
                    <div className="p-4 bg-white/5 rounded-lg border border-white/10 text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-blue-200 mt-2">Segunda chamada não está habilitada para esta prova</p>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>

          {/* Botões de navegação */}
          <div className="mt-8 flex justify-between">
            <button
              type="button"
              onClick={back}
              disabled={step === 1}
              className={`px-6 py-2.5 rounded-lg font-medium flex items-center gap-2 ${step === 1 ? 'bg-white/5 text-white/30 cursor-not-allowed' : 'bg-transparent border border-white/30 text-white hover:bg-white/10'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Voltar
            </button>
            {step < 3 ? (
              <button
                type="button"
                onClick={next}
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium text-white flex items-center gap-2 transition-colors"
                disabled={step === 1 && (!formData.examName || !formData.course || !formData.examType)}
              >
                Próxima etapa
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            ) : (
              <button 
                type="submit" 
                className="px-6 py-2.5 bg-green-600 hover:bg-green-700 rounded-lg font-medium text-white flex items-center gap-2 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Salvar Agendamento
              </button>
            )}
          </div>

          {/* Status do agendamento */}
          <div className="text-xs text-center text-blue-300 mt-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            Este agendamento será integrado automaticamente com os módulos de correção e resultados
          </div>
        </div>
      </div>
    </section>
  );
}