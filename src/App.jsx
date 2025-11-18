import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Play, Code, Gamepad2, User, Briefcase, MessageCircle, ChevronDown, Menu, X, Brain, GitBranch, Puzzle, LayoutGrid, MonitorPlay } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './components/ui/dialog';
import './App.css';

// Import assets
import HSFimg from './assets/HSFimg.png';
import HSFvid from './assets/HSFvid.mp4';

import ECHimg from './assets/ECHimg.png';
import ECHvid from './assets/ECHvid.mp4';

import SDMimg from './assets/SDMimg.png';
import SDMvid from './assets/SDMvid.mp4';

import profilePic from './assets/Profile.jpeg';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [currentDemoVideo, setCurrentDemoVideo] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Horror Story Folks",
      description: "Jogo de horror independente em desenvolvimento pela UF Team. Focado em resolução de enigmas e mecânicas de sobrevivência.",
      image: HSFimg,
      video: HSFvid,
      technologies: ["Unity", "C#", "Game Design","Horror"],
      link: "https://uf-team.itch.io/horrorstoryfolks",
      status: "Em Desenvolvimento",
      role: "Gameplay Programmer"
    },
    {
      id: 2,
      title: "Echoes: Capítulo 1",
      description: "Jogo de horror psicológico em desenvolvimento como parte do Trabalho de Iniciação Científica (TIC ), explorando imersão e narrativa interativa.",
      image: ECHimg,
      video: ECHvid,
      technologies: ["Unity", "C#", "Psychological Horror", "Narrative Design"],
      link: "https://lorenzoschadeck.itch.io/echoes-chapter-1",
      status: "Em Desenvolvimento",
      role: "Lead Developer"
    },
    {
      id: 3,
      title: "Sombra das Memórias",
      description: "Projeto desenvolvido em Game Jam, explorando mecânicas de memória e atmosfera sombria.",
      image: SDMimg,
      video: SDMvid,
      technologies: ["Unity", "C#", "Game Jam", "Rapid Prototyping"],
      link: "https://uf-team.itch.io/sombra-das-memorias",
      status: "Concluído",
      role: "Programmer"
    },
  ];

  const skillIcons = {
    "Unity 3D": <LayoutGrid size={16} className="mr-1" />,
    "C#": <Code size={16} className="mr-1" />,
    ".NET": <Code size={16} className="mr-1" />,
    "Game Design": <Gamepad2 size={16} className="mr-1" />,
    "Gameplay Programming": <MonitorPlay size={16} className="mr-1" />,
    "Git": <GitBranch size={16} className="mr-1" />,
  };

  const skills = [
    { name: "Unity 3D", category: "Engine" },
    { name: "C#", category: "Programming" },
    { name: ".NET", category: "Framework" },
    { name: "Game Design", category: "Design" },
    { name: "Gameplay Programming", category: "Programming" },
    { name: "Git", category: "Tools" }
  ];

  const navigation = [
    { id: 'home', label: 'Início', icon: User },
    { id: 'about', label: 'Sobre', icon: User },
    { id: 'projects', label: 'Projetos', icon: Briefcase },
    { id: 'contact', label: 'Contato', icon: MessageCircle }
  ];

  const scrollToSection = (sectionId ) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const openDemoModal = (videoSrc) => {
    setCurrentDemoVideo(videoSrc);
    setIsDemoModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 nav-elevated backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold text-gradient"
            >
              Lorenzo Schadeck
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-button flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                    activeSection === item.id
                      ? 'nav-button-active text-white'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <item.icon size={16} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-card border-t border-border"
            >
              <div className="px-4 py-2 space-y-1">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`nav-button flex items-center space-x-2 w-full px-4 py-3 rounded-lg text-left transition-all ${
                      activeSection === item.id
                        ? 'nav-button-active text-white'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <item.icon size={16} />
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold">
              Olá, eu sou o{' '}
              <span className="text-gradient">Lorenzo</span>
            </h1>
            <div className="text-xl md:text-2xl text-muted-foreground space-y-2">
              <p>🎮 Game Developer | 🧠 C# Programmer | 🕹️ Unity3D</p>
              <p className="text-lg">Desenvolvendo experiências interativas que combinam complexidade técnica e gameplay envolvente.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Button
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="bg-[#0a0a0f] hover:bg-[#151520] border border-slate-700 text-white"
              >
                <Gamepad2 className="mr-2" size={20} />
                Ver Projetos
              </Button>
              <Button
                size="lg"
                onClick={() => scrollToSection('about')}
                className="bg-[#0a0a0f] hover:bg-[#151520] border border-slate-700 text-white"
              >
                <User className="mr-2" size={20} />
                Sobre Mim
              </Button>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown size={32} className="text-muted-foreground" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <img
              src={profilePic}
              // alt="Lorenzo Schadeck"
              className="w-48 h-48 rounded-full object-cover border-4 border-primary shadow-lg mb-8 mx-auto"
            />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Sobre Mim</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Entusiasta do desenvolvimento de jogos com foco em gameplay programming, 
              dedicado a construir mecânicas funcionais e contribuir para experiências interativas dinâmicas.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="card-hover">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gradient">Atualmente</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>👻 Desenvolvendo <strong>Horror Story Folks</strong></li>
                    <li>🧠 Desenvolvedor de <strong>Echoes: Capítulo 1</strong></li>
                    <li>🏆 Participante ativo de <strong>Game Jams</strong></li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="card-hover">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gradient">Habilidades</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="px-4 py-2 text-base">
                        {skillIcons[skill.name]} {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Meus Projetos</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conheça meus projetos com uma seleção dos mais recentes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="card-hover overflow-hidden">
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary">{project.status}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <p className="text-sm text-primary mb-4">Função: {project.role}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      {project.link !== '#' && (
                        <Button size="sm" className="btn-gradient-blue" asChild>
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={16} className="mr-2" />
                            Acessar
                          </a>
                        </Button>
                      )}
                      <Button size="sm" variant="outline" onClick={() => openDemoModal(project.video)}>
                        <Play size={16} className="mr-2" />
                        Play
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Vamos Conversar!</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button size="lg" asChild>
                <a href="mailto:lorenzo.schadeck@gmail.com">
                  <Mail className="mr-2" size={20} />
                  Email
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://www.linkedin.com/in/lorenzoschadeck/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2" size={20} />
                  LinkedIn
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://github.com/LorenzoSchadeck" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2" size={20} />
                  GitHub
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 Lorenzo Dick Schadeck. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* Demo Video Modal */}
      <Dialog open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen}>
        <DialogContent className="sm:max-w-[800px]">
          <DialogHeader>
            <DialogTitle>Demonstração do Projeto</DialogTitle>
            <DialogDescription>
              Assista ao vídeo de demonstração do projeto.
            </DialogDescription>
          </DialogHeader>
          <div class="aspect-video rounded-md overflow-hidden mb-4">
            {currentDemoVideo && (
              <video
                controls
                className="w-full h-full object-cover"
                src={currentDemoVideo}
                type="video/mp4"
              />
             )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default App;
