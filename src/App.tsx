/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  ArrowRight,
  BarChart3, 
  CheckCircle2, 
  ClipboardCheck, 
  Droplets, 
  Info, 
  Mail, 
  MapPin, 
  Menu, 
  Phone, 
  Search, 
  ShieldCheck, 
  Users,
  Wheat, 
  X 
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { AgroTexasLogo } from './components/AgroTexasLogo';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Como Trabalhamos', href: '#metodologia' },
    { name: 'Contato', href: '#contato' },
  ];

  const ZigZag = () => (
    <svg width="50" height="8" viewBox="0 0 50 8" fill="none" className="mb-4">
      <path d="M0 4L4 1L8 7L12 1L16 7L20 1L24 7L28 1L32 7L36 1L40 7L44 1L48 4" stroke="#F58220" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <div className="min-h-screen bg-agro-dark selection:bg-agro-orange/30">
      {/* Navigation */}
      <nav 
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'top-2 md:top-0 mx-4 md:mx-0 py-3 md:py-4 glass rounded-[2rem] md:rounded-none border border-white/10 md:border-t-0 md:border-x-0 md:border-b shadow-2xl' 
            : 'top-0 mx-0 py-4 md:py-8 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <AgroTexasLogo variant="full" />

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-agro-orange transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="px-6 py-2 bg-agro-orange text-white rounded-full font-bold text-sm hover:translate-y-[-2px] transition-all hover:shadow-[0_10px_20px_rgba(245,130,32,0.3)]">
              SISTEMA
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 glass-dark pt-32 px-6"
        >
          <div className="flex flex-col gap-6 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-display font-medium text-white hover:text-agro-orange"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-[100svh] flex flex-col justify-center py-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2560" 
            alt="Agriculture Field" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-agro-dark via-agro-dark/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-10 pb-20 md:pb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl relative z-20"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 glass rounded-full mb-6 border-white/20">
              <span className="w-2 h-2 rounded-full bg-agro-orange animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase text-white/80">Especialistas em Classificação de Grãos</span>
            </div>
            <h1 className="font-display text-5xl md:text-8xl font-bold leading-[0.9] text-white mb-8">
              ESTRATÉGIA EM <br />
              <span className="text-agro-orange text-glow">CADA GRÃO</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 mb-10 leading-relaxed font-light max-w-lg">
              Entregamos as melhores estratégias na execução de classificação e inspeções. 
              Soluções completas para a certificação da sua produção com agilidade e precisão.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 md:px-10 py-4 bg-agro-orange text-white rounded-full font-bold text-base md:text-lg hover:scale-105 transition-all shadow-xl shadow-agro-orange/20">
                Ver Soluções
              </button>
              <button className="px-8 md:px-10 py-4 glass text-white rounded-full font-bold text-base md:text-lg hover:bg-white/20 transition-all">
                Falar no WhatsApp
              </button>
            </div>
          </motion.div>
        </div>

        {/* Glass Stats Bar */}
        <div className="relative md:absolute md:bottom-10 left-0 right-0 z-20 px-6 pb-20 md:pb-0">
          <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Equipe Especializada', value: '100+', icon: <Users className="w-5 h-5" /> },
              { label: 'Amostragem Técnica', value: 'Precisa', icon: <Droplets className="w-5 h-5" /> },
              { label: 'Análises Realizadas', value: 'Milhares', icon: <ClipboardCheck className="w-5 h-5" /> },
              { label: 'Laudos Emitidos', value: 'Instantâneo', icon: <ShieldCheck className="w-5 h-5" /> },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="glass p-5 md:p-6 rounded-2xl flex flex-col justify-center border-white/10 hover:border-agro-orange/30 transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-agro-orange/10 flex items-center justify-center text-agro-orange">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-display font-bold text-white group-hover:text-agro-orange transition-colors">{stat.value}</div>
                </div>
                <div className="text-[10px] text-white/40 uppercase tracking-[0.2em]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section (Optimized & Integrated) */}
      <section id="sobre" className="py-16 md:py-32 relative overflow-hidden bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="glass rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border-white/5 flex flex-col lg:flex-row bg-white/[0.01]">
            {/* Image Side */}
            <div className="lg:w-1/2 relative min-h-[350px] sm:min-h-[450px] md:min-h-[600px] group">
              <img 
                src="https://images.unsplash.com/photo-1594751414434-6019623e6f96?auto=format&fit=crop&q=80&w=1200" 
                alt="Agro Texas Professional" 
                className="absolute inset-0 w-full h-full object-cover grayscale brightness-75 transition-transform duration-[3s] group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-agro-orange/20 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-agro-dark via-agro-dark/20 to-transparent" />
            </div>

            {/* Content Side */}
            <div className="lg:w-1/2 p-7 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-center bg-white/[0.01]">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center lg:text-left"
              >
                <div className="inline-block px-6 py-2 md:px-10 md:py-3 glass rounded-full mb-6 md:mb-10 border-white/5">
                  <span className="text-[9px] md:text-xs font-bold uppercase tracking-[0.25em] text-white/70">SOBRE NÓS</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-10 leading-[1.15] md:leading-[1.1]">
                  Entregamos as melhores estratégias <span className="text-agro-orange">na execução do serviço!</span>
                </h2>
                <div className="space-y-4 md:space-y-8 text-white/50 text-sm sm:text-base md:text-xl font-light leading-relaxed mb-8 md:mb-12">
                  <p>
                    A Agro Texas é uma empresa especializada em classificação de grãos, inspeções e análises de qualidade. 
                    Contamos com uma equipe de profissionais altamente qualificados e certificados para atender 
                    às necessidades do agronegócio com excelência.
                  </p>
                  <p>
                    Nossa missão é garantir a qualidade e segurança dos produtos agrícolas, oferecendo serviços 
                    precisos e confiáveis que atendem às mais rigorosas normas do setor.
                  </p>
                </div>
                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 md:px-12 py-3.5 md:py-5 bg-agro-orange/80 hover:bg-agro-orange rounded-xl md:rounded-3xl text-white font-bold text-sm md:text-lg transition-all shadow-xl shadow-agro-orange/20 hover:translate-y-[-3px] active:translate-y-0">
                  <Phone className="w-5 h-5 md:w-6 md:h-6" />
                  Fale Conosco
                </button>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Abstract Background Glow */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-agro-orange/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </section>

      <section id="servicos" className="py-16 md:py-32 relative overflow-hidden bg-agro-dark/50">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12 md:mb-20"
          >
            <h2 className="text-agro-orange font-bold uppercase tracking-[0.3em] text-[10px] md:text-sm mb-4">
              CONHEÇA NOSSOS
            </h2>
            <h3 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 md:mb-8">
              Serviços
            </h3>
            <p className="max-w-2xl mx-auto text-white/50 text-base md:text-lg leading-relaxed">
              Trabalhar para entregar os melhores resultados para nossos clientes nos torna cada dia mais experientes para sermos referência no mercado que atuamos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1: Classificação de Grãos */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-dark rounded-3xl overflow-hidden flex flex-col h-full border-white/5 hover:border-agro-orange/30 transition-all duration-500"
            >
              <div className="h-64 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80&w=800" 
                  alt="Classificação de Grãos" 
                  className="w-full h-full object-cover grayscale opacity-60"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-agro-dark via-agro-dark/20 to-transparent flex flex-col justify-end p-8">
                  <h4 className="text-white font-display text-2xl font-bold uppercase tracking-tight mb-2">
                    Classificação de Grãos
                  </h4>
                  <ZigZag />
                </div>
              </div>
              <div className="p-8 flex-grow">
                <p className="text-white/50 leading-relaxed text-sm group-hover:text-white/70 transition-colors">
                  Classificação de grãos é o processo de análise técnica e laboratorial com objetivo de determinar a qualidade de um lote de soja ou milho, de acordo com padrões oficiais do Ministério da Agricultura, Pecuária e Abastecimento (MAPA).
                </p>
              </div>
            </motion.div>

            {/* Card 2: Classificação CIF */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -10 }}
              className="glass-dark rounded-3xl overflow-hidden flex flex-col h-full border-white/5 hover:border-agro-orange/30 transition-all duration-500"
            >
              <div className="h-64 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1595273670150-db0a3d39074c?auto=format&fit=crop&q=80&w=800" 
                  alt="Classificação CIF" 
                  className="w-full h-full object-cover grayscale opacity-60"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-agro-dark via-agro-dark/20 to-transparent flex flex-col justify-end p-8">
                  <h4 className="text-white font-display text-2xl font-bold uppercase tracking-tight mb-2">
                    Classificação CIF
                  </h4>
                  <ZigZag />
                </div>
              </div>
              <div className="p-8 flex-grow">
                <p className="text-white/50 leading-relaxed text-sm group-hover:text-white/70 transition-colors">
                  Somos especialistas em realizar classificação de entrada CIF, análise minuciosa e amostragem precisa de grãos em fazendas, silos, propriedades rurais e outros locais para tornar o processo mais seguro e eficiente.
                </p>
              </div>
            </motion.div>

            {/* Card 3: Auditoria */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -10 }}
              className="glass-dark rounded-3xl overflow-hidden flex flex-col h-full border-white/5 hover:border-agro-orange/30 transition-all duration-500"
            >
              <div className="h-64 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=800" 
                  alt="Auditoria" 
                  className="w-full h-full object-cover grayscale opacity-60"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-agro-dark via-agro-dark/20 to-transparent flex flex-col justify-end p-8">
                  <h4 className="text-white font-display text-2xl font-bold uppercase tracking-tight mb-2">
                    Auditoria
                  </h4>
                  <ZigZag />
                </div>
              </div>
              <div className="p-8 flex-grow">
                <p className="text-white/50 leading-relaxed text-sm group-hover:text-white/70 transition-colors">
                  Garante a rastreabilidade, qualidade e segurança dos produtos classificados, minimizando riscos de fraudes e reduzindo prejuízos em todo o processo para todos os participantes ao longo da cadeia produtiva.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      </section>

      {/* How We Work Section */}
      <section id="metodologia" className="py-20 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-8"
          >
            <div className="max-w-2xl text-center md:text-left">
              <h2 className="text-[10px] md:text-sm font-bold text-agro-orange uppercase tracking-[.3em] mb-4">Metodologia</h2>
              <h3 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight">
                Como Trabalhamos
              </h3>
            </div>
            <p className="max-w-md text-white/50 font-light leading-relaxed text-sm md:text-base text-center md:text-left">
              Processos rigorosos e tecnologia integrada para garantir a máxima precisão 
              em cada etapa da classificação e auditoria.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                number: '01',
                title: 'Triagem',
                image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ee?auto=format&fit=crop&q=80&w=800',
                desc: 'Verificamos todos os pontos importantes no caminhão e ponto de embarque para garantir a segurança da carga.',
                points: ['Inspeção visual completa', 'Verificação de documentação', 'Análise de condições de transporte']
              },
              {
                number: '02',
                title: 'Amostragem',
                image: 'https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&q=80&w=800',
                desc: 'Consiste em retirar uma pequena quantidade de grãos de um lote ou carga, realizada em pontos diferentes.',
                points: ['Coleta em múltiplos pontos', 'Protocolos técnicos rigorosos', 'Amostras representativas']
              },
              {
                number: '03',
                title: 'Análise',
                image: 'https://images.unsplash.com/photo-1582719202047-76d3432ee323?auto=format&fit=crop&q=80&w=800',
                desc: 'Exame detalhado das amostras coletadas seguindo normas técnicas e legislação vigente.',
                points: ['Testes de qualidade completos', 'Análise de umidade precisa', 'Detecção de impurezas']
              },
              {
                number: '04',
                title: 'Laudo',
                image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
                desc: 'Emissão de documento técnico com os resultados obtidos nas análises e classificação final.',
                points: ['Documento oficial validado', 'Resultados detalhados', 'Certificação de qualidade']
              }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-[2rem] md:rounded-[2.5rem] glass-dark border-white/5 hover:border-agro-orange/30 transition-all duration-500 relative flex flex-col h-full overflow-hidden"
              >
                {/* Image Header */}
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-full object-cover grayscale brightness-75 transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-agro-dark to-transparent opacity-90" />
                  
                  {/* Number Badge Inside Image */}
                  <div className="absolute bottom-4 left-6">
                    <div className="w-10 h-10 rounded-full bg-agro-dark/80 backdrop-blur-md border border-agro-orange/30 flex items-center justify-center relative">
                       <span className="font-display text-sm font-extrabold text-agro-orange">{step.number}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8 pt-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-display font-bold text-white mb-4 group-hover:text-agro-orange transition-colors">
                    {step.title}
                  </h4>
                  
                  <p className="text-white/50 text-[13px] md:text-sm leading-relaxed mb-6 flex-grow">
                    {step.desc}
                  </p>

                  <ul className="space-y-3 pt-5 border-t border-white/5">
                    {step.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[11px] md:text-xs text-white/40 group-hover:text-white/60 transition-colors">
                        <ArrowRight className="w-2.5 h-2.5 text-agro-orange mt-0.5" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section (A Escolha Certa) */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="glass rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border-white/5 flex flex-col lg:flex-row bg-white/[0.01]"
          >
            {/* Left side: Image & Logo */}
            <div className="lg:w-[45%] relative min-h-[400px] md:min-h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1590682680695-43b964a3ae17?auto=format&fit=crop&q=80&w=1200" 
                alt="Agro Professional" 
                className="absolute inset-0 w-full h-full object-cover grayscale brightness-75"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-agro-orange/20 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-agro-dark via-agro-dark/20 to-transparent" />
              
              <div className="absolute inset-x-6 md:inset-x-8 bottom-10 md:bottom-12">
                <div className="bg-agro-dark/40 backdrop-blur-md p-4 rounded-3xl border border-white/10 inline-block">
                  <AgroTexasLogo variant="full" />
                </div>
              </div>
            </div>

            {/* Right side: Content */}
            <div className="lg:w-[55%] p-8 md:p-16 lg:p-24 bg-[#F9F9F9]/[0.02] flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight">
                  A Escolha Certa
                </h2>
                <p className="text-white/50 text-base md:text-lg lg:text-xl font-light leading-relaxed mb-10 md:mb-16">
                  Com uma equipe com mais de 10 anos de experiência no mercado, iremos garantir que ao escolher a Agro Texas, sua empresa esteja criando uma parceria de sucesso.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 md:gap-y-12 gap-x-8 md:gap-x-12">
                  {[
                    {
                      icon: <Search className="w-8 h-8 md:w-10 md:h-10" />,
                      title: 'Transparência',
                      subtitle: 'na execução dos processos.'
                    },
                    {
                      icon: <Phone className="w-8 h-8 md:w-10 md:h-10" />,
                      title: 'Suporte',
                      subtitle: 'sempre disponível para ajudar.'
                    },
                    {
                      icon: <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10" />,
                      title: 'Processos',
                      subtitle: 'de acordo com as regras nacionais.'
                    },
                    {
                      icon: <ShieldCheck className="w-8 h-8 md:w-10 md:h-10" />,
                      title: 'Garantia',
                      subtitle: 'de informações rápidas e seguras.'
                    }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-5 md:gap-6 group"
                    >
                      <div className="text-agro-orange group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-agro-orange transition-colors">{item.title}</h4>
                        <p className="text-white/40 text-xs md:text-sm">{item.subtitle}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-agro-orange/5 rounded-full blur-[100px] -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-agro-orange/5 rounded-full blur-[100px] -ml-48 -mb-48" />
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-16 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass rounded-[2rem] md:rounded-[4rem] overflow-hidden border-white/10 flex flex-col lg:flex-row shadow-2xl bg-white/[0.01]"
          >
            {/* Info Column */}
            <div className="lg:w-1/2 p-7 sm:p-12 md:p-16 lg:p-20">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-block px-5 py-1.5 glass rounded-full mb-6 md:mb-8 border-white/5">
                  <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-agro-orange">CONTATO</span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-10 leading-[1.1]">
                  Pronto para elevar o <br className="hidden sm:block"/>
                  <span className="text-agro-orange">Padrão de Qualidade?</span>
                </h2>
                
                <div className="space-y-3 md:space-y-6 mt-8 md:mt-16">
                  {[
                    { icon: <Phone className="w-5 h-5 md:w-6 md:h-6" />, label: 'Telefone', value: '(66) 3544-0000' },
                    { icon: <Mail className="w-5 h-5 md:w-6 md:h-6" />, label: 'E-mail', value: 'contato@agrotexas.com.br' },
                    { icon: <MapPin className="w-5 h-5 md:w-6 md:h-6" />, label: 'Localização', value: 'Sorriso - MT | Rio Verde - GO' }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 md:gap-6 glass p-3.5 md:p-5 rounded-xl md:rounded-3xl border-white/5 hover:border-agro-orange/30 transition-all cursor-default"
                    >
                      <div className="flex-shrink-0 w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-2xl bg-agro-orange/10 flex items-center justify-center text-agro-orange border border-agro-orange/20">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-[8px] md:text-[10px] text-white/30 uppercase tracking-[0.2em] mb-0.5 md:mb-1">{item.label}</div>
                        <div className="text-sm md:text-lg text-white font-medium">{item.value}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            {/* Form Column */}
            <div className="lg:w-1/2 bg-white/[0.02] p-7 sm:p-12 md:p-16 lg:p-20 backdrop-blur-xl border-t lg:border-t-0 lg:border-l border-white/10">
              <form className="space-y-5 md:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
                  <div>
                    <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2 md:mb-3 block ml-2 md:ml-4">Nome</label>
                    <input 
                      type="text" 
                      placeholder="Seu nome"
                      className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-[1.5rem] py-3.5 md:py-5 px-5 md:px-8 focus:border-agro-orange focus:bg-white/[0.08] outline-none transition-all placeholder:text-white/10 text-white text-sm" 
                    />
                  </div>
                  <div>
                    <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2 md:mb-3 block ml-2 md:ml-4">Empresa</label>
                    <input 
                      type="text" 
                      placeholder="Sua empresa"
                      className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-[1.5rem] py-3.5 md:py-5 px-5 md:px-8 focus:border-agro-orange focus:bg-white/[0.08] outline-none transition-all placeholder:text-white/10 text-white text-sm" 
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2 md:mb-3 block ml-2 md:ml-4">E-mail Corporativo</label>
                  <input 
                    type="email" 
                    placeholder="email@empresa.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-[1.5rem] py-3.5 md:py-5 px-5 md:px-8 focus:border-agro-orange focus:bg-white/[0.08] outline-none transition-all placeholder:text-white/10 text-white text-sm" 
                  />
                </div>
                <div>
                  <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2 md:mb-3 block ml-2 md:ml-4">Sua Mensagem</label>
                  <textarea 
                    rows={4} 
                    placeholder="Como podemos ajudar seu negócio hoje?"
                    className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-[1.5rem] py-3.5 md:py-5 px-5 md:px-8 focus:border-agro-orange focus:bg-white/[0.08] outline-none transition-all placeholder:text-white/10 text-white text-sm resize-none"
                  />
                </div>
                <button className="w-full py-4 md:py-6 bg-agro-orange text-white rounded-xl md:rounded-[1.5rem] font-bold text-base md:text-lg hover:bg-white hover:text-agro-orange active:scale-[0.98] transition-all shadow-2xl shadow-agro-orange/20 flex items-center justify-center gap-3 group px-4">
                  Enviar Solicitação
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

        {/* Floating background elements */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute top-1/3 right-10 w-64 h-64 bg-agro-orange/5 rounded-full blur-[100px] animate-pulse" />

      {/* Footer */}
      <footer className="py-12 md:py-20 border-t border-white/5 bg-agro-dark">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-10">
            <AgroTexasLogo variant="footer" />
          </div>
          <p className="text-white/30 text-sm max-w-lg mx-auto leading-relaxed">
            Agro Texas Certificação e Auditoria © 2026. <br />
            Todos os direitos reservados. Excelência técnica e conformidade em cada grão.
          </p>
          <div className="flex justify-center gap-8 mt-10">
            {['Instagram', 'LinkedIn', 'YouTube'].map((social) => (
              <a key={social} href="#" className="text-xs font-bold uppercase tracking-widest text-white/40 hover:text-agro-orange transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
