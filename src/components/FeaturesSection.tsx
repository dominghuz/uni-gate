const features = [
    {
      title: "Inscrição Digital",
      description: "Formulários online com validação automática e upload de documentos.",
      icon: "📝",
    },
    {
      title: "Agendamento Inteligente",
      description: "Calendário integrado para provas e prazos personalizados.",
      icon: "🗓️",
    },
    {
      title: "Painel Administrativo",
      description: "Controle total de candidatos, cursos e relatórios.",
      icon: "📊",
    },
  ];
  
  export default function FeaturesSection() {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Tecnologia a Serviço da Educação
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }