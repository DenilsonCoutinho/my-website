
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "SaaS de Gestão",
      description: "Plataforma completa para gestão de pequenas empresas com dashboard intuitivo e relatórios em tempo real.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
      github: "#",
      demo: "#"
    },
    {
      title: "E-commerce Moderno",
      description: "Loja online responsiva com sistema de pagamentos integrado e painel administrativo completo.",
      tech: ["Next.js", "TypeScript", "Prisma", "Tailwind"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center",
      github: "#",
      demo: "#"
    },
    {
      title: "App de Produtividade",
      description: "Aplicativo web para gerenciamento de tarefas com colaboração em tempo real e integrações.",
      tech: ["React", "Firebase", "Material-UI", "PWA"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&crop=center",
      github: "#",
      demo: "#"
    },
    {
      title: "Dashboard Analytics",
      description: "Interface de análise de dados com visualizações interativas e relatórios personalizáveis.",
      tech: ["Vue.js", "D3.js", "Express", "MongoDB"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projetos" className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
              Meus Projetos
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes, incluindo micro-SaaS e aplicações web completas
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors duration-300"
                  >
                    <Github size={20} />
                    <span className="font-medium">Código</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                    <span className="font-medium">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
