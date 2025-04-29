'use client'

import { useState } from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    course: '',
    email: '',
    password: ''
  });

  const next = () => setStep((prev) => Math.min(prev + 1, 4));
  const back = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const steps = [
    { id: 1, name: 'Informações Pessoais' },
    { id: 2, name: 'Documentos' },
    { id: 3, name: 'Criar Conta' },
    { id: 4, name: 'Revisão' }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-950 to-indigo-900 dark:from-gray-900 dark:to-gray-800 flex flex-col md:flex-row relative">
      {/* Link de voltar */}
      <Link href="/" className="absolute top-6 left-6 text-blue-200 hover:text-white text-sm transition z-10">
        ← Voltar para Home
      </Link>

      {/* Lado Esquerdo - Informativo */}
      <div className="md:w-1/2 flex items-center justify-center p-8 md:p-12 bg-white/5 backdrop-blur-md border-r border-white/10">
        <div className="max-w-md space-y-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">Crie sua conta</h1>
          </div>
          
          <p className="text-blue-100 leading-relaxed">
            Complete seu cadastro em poucos passos para acessar todos os recursos do sistema.
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
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
              </svg>
              Dados Bancários
            </h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <p className="text-blue-200">Banco:</p>
                <p className="text-white">BAI</p>
              </div>
              <div>
                <p className="text-blue-200">Conta Nº:</p>
                <p className="text-white">000138764 10 003</p>
              </div>
              <div className="col-span-2">
                <p className="text-blue-200">IBAN:</p>
                <p className="text-white">A0060040 000000138764 1030 5</p>
              </div>
            </div>
            <p className="text-xs text-blue-300 mt-3 flex items-start gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              Anexe o comprovativo de pagamento na etapa 2.
            </p>
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
              <span>{step}/4 etapas</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                style={{ width: `${(step / 4) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Conteúdo por etapa */}
          <div className="space-y-6">
            {step === 1 && (
              <>
                <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  Informações Pessoais
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-blue-100 mb-1">Nome completo</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 border border-white/10"
                      placeholder="Digite seu nome completo"
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
                    >
                      <option className='text-gray-700' value="">Selecione um curso</option>
                      <option className='text-gray-700' value="direito">Direito</option>
                      <option className='text-gray-700' value="gestao">Gestão de Empresas</option>
                      <option className='text-gray-700' value="economia">Economia</option>
                      <option className='text-gray-700' value="relacoes">Relações Internacionais</option>
                    </select>
                  </div>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                  Documentos Necessários
                </h2>
                <div className="space-y-4">
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <label className="text-sm text-blue-100 mb-2 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                      </svg>
                      Comprovativo de Pagamento (PDF)
                    </label>
                    <input 
                      type="file" 
                      accept="application/pdf" 
                      className="w-full text-sm text-blue-200 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
                    />
                    <p className="text-xs text-blue-300 mt-2">Tamanho máximo: 5MB</p>
                  </div>

                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                  <label className="text-sm text-blue-100 mb-2 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd" />
                      </svg>
                      Bilhete de Identidade (Imagem)
                    </label>
                    <input 
                      type="file" 
                      accept="image/*" 
                      className="w-full text-sm text-blue-200 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
                    />
                  </div>

                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    
                  <label className="text-sm text-blue-100 mb-2 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                      </svg>
                      Cartão de Vacina (PDF ou Imagem)
                    </label>
                    <input 
                      type="file" 
                      className="w-full text-sm text-blue-200 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
                    />
                  </div>

                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    
                  <label className="text-sm text-blue-100 mb-2 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                      Foto 3x4 (PNG)
                    </label>
                    <input 
                      type="file" 
                      accept="image/png" 
                      className="w-full text-sm text-blue-200 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
                    />
                    <p className="text-xs text-blue-300 mt-2">Fundo branco e rosto visível</p>
                  </div>
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  Criar Conta de Acesso
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-blue-100 mb-1">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 border border-white/10"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-blue-100 mb-1">Senha</label>
                    <input 
                      type="password" 
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 border border-white/10"
                      placeholder="Crie uma senha segura"
                    />
                    <p className="text-xs text-blue-300 mt-2">Mínimo de 8 caracteres com números e letras</p>
                  </div>
                </div>
              </>
            )}

            {step === 4 && (
              <>
                <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Confirme seus dados
                </h2>
                <div className="bg-white/5 p-4 rounded-lg border border-white/10 space-y-3">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-blue-200">Nome completo:</span>
                    <span className="text-white">{formData.name || "Não informado"}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-blue-200">Curso:</span>
                    <span className="text-white">
                      {formData.course === "direito" ? "Direito" : 
                       formData.course === "gestao" ? "Gestão de Empresas" : 
                       formData.course === "economia" ? "Economia" : 
                       formData.course === "relacoes" ? "Relações Internacionais" : 
                       "Não selecionado"}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-blue-200">Email:</span>
                    <span className="text-white">{formData.email || "Não informado"}</span>
                  </div>
                  <div className="pt-2">
                    <p className="text-sm text-blue-200 flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      Após enviar, não será possível editar os dados. Verifique cuidadosamente todas as informações.
                    </p>
                  </div>
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
            {step < 4 ? (
              <button
                type="button"
                onClick={next}
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium text-white flex items-center gap-2 transition-colors"
                disabled={step === 1 && (!formData.name || !formData.course)}
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
                Enviar inscrição
              </button>
            )}
          </div>

          {/* Link para login */}
          <p className="text-sm text-center text-blue-200 mt-6">
            Já tem uma conta?{' '}
            <Link href="/login" className="text-white hover:underline">
              Faça login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}