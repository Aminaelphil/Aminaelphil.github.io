import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ArrowRight, Code2, Database, Brain, Zap, ExternalLink, MapPin, GraduationCap, Briefcase, Globe, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((window.scrollY / height) * 100);
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll('section[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const isVisible = (id) => visibleSections.has(id);

  const skills = {
    'Backend': { items: ['PHP', 'Symfony 6/7', '.NET 8'], icon: Database },
    'Frontend': { items: ['React', 'Angular', 'HTML5/CSS3', 'Bootstrap'], icon: Code2 },
    'Mobile': { items: ['Flutter'], icon: Zap },
    'Data & AI': { items: ['Python', 'Spark', 'Ollama', 'AI Agents'], icon: Brain },
    'Databases': { items: ['MySQL', 'PostgreSQL'], icon: Database },
    'DevOps': { items: ['Git', 'GitHub', 'GitLab'], icon: Zap }
  };

  const experiences = [
    {
      title: 'Développement Plateforme Services',
      company: 'Dream Tek Consulting',
      period: 'Oct – Déc 2025',
      details: ['Symfony V7 full-stack', 'Intégration Agent IA (Ollama)', 'Architecture solutions IA']
    },
    {
      title: 'Gestion Tickets Maintenance',
      company: 'Poste Tunisienne',
      period: 'Jan – Fév 2025',
      details: ['App web Symfony + MySQL', 'Système automatisé de suivi']
    },
    {
      title: 'Application Covoiturage (PFE)',
      company: 'Dream Tek Consulting',
      period: 'Jan – Mai 2024',
      details: ['Full Symfony V6', 'Gestion utilisateurs & réservations', 'Note: Très Bien']
    }
  ];

  const languages = [
    { lang: 'Français', level: 'C1/C2', pct: 90 },
    { lang: 'Anglais', level: 'B1-B2', pct: 65 },
    { lang: 'Arabe', level: 'Natif', pct: 100 }
  ];

  const navItems = ['Accueil', 'Compétences', 'Expérience', 'Contact'];

  return (
    <div style={{ minHeight: '100vh', background: '#fff', color: '#1e293b', fontFamily: "'Inter', sans-serif", overflowX: 'hidden' }}>
      {/* Progress bar */}
      <div style={{
        position: 'fixed', top: 0, left: 0, height: 3, zIndex: 100,
        width: `${scrollProgress}%`,
        background: 'linear-gradient(90deg, #2563eb, #3b82f6, #60a5fa)',
        transition: 'width 0.2s ease-out'
      }} />

      {/* Navigation */}
      <nav style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 50,
        background: scrolled ? 'rgba(255,255,255,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid #e2e8f0' : '1px solid transparent',
        transition: 'all 0.3s ease'
      }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="#accueil" style={{ textDecoration: 'none', fontSize: 24, fontWeight: 800, letterSpacing: '-0.04em' }}>
            <span className="gradient-text">AE</span>
            <span style={{ color: '#0f172a' }}>.</span>
          </a>

          {/* Desktop */}
          <div style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="nav-desktop">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}
                style={{ textDecoration: 'none', fontSize: 14, fontWeight: 500, color: '#64748b', transition: 'color 0.2s' }}
                onMouseEnter={(e) => e.target.style.color = '#2563eb'}
                onMouseLeave={(e) => e.target.style.color = '#64748b'}
              >{item}</a>
            ))}
            <a href="mailto:aminaelphil@gmail.com" className="btn-primary" style={{ padding: '10px 24px', fontSize: 13, borderRadius: 10 }}>
              <Mail size={15} /> Me contacter
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="nav-mobile-btn"
            style={{ background: 'none', border: '1px solid #e2e8f0', borderRadius: 10, padding: 8, cursor: 'pointer', color: '#334155', display: 'none' }}>
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div style={{ background: '#fff', borderTop: '1px solid #f1f5f9', padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 12 }} className="nav-mobile-menu">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                style={{ textDecoration: 'none', fontSize: 15, fontWeight: 500, color: '#334155', padding: '8px 0', borderBottom: '1px solid #f8fafc' }}>
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ═══ HERO ═══ */}
      <section id="accueil" style={{ paddingTop: 140, paddingBottom: 100, position: 'relative', overflow: 'hidden' }}>
        {/* Background decorations */}
        <div style={{ position: 'absolute', top: -80, right: -120, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -60, left: -100, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 200, left: '60%', width: 6, height: 6, borderRadius: '50%', background: '#3b82f6', opacity: 0.3 }} className="animate-float" />
        <div style={{ position: 'absolute', top: 300, left: '20%', width: 8, height: 8, borderRadius: '50%', background: '#2563eb', opacity: 0.15 }} className="animate-float delay-300" />

        <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div className="animate-fade-in-up" style={{ opacity: 0 }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              fontSize: 13, fontWeight: 600, color: '#2563eb',
              background: '#eff6ff', border: '1px solid #dbeafe',
              padding: '8px 20px', borderRadius: 999, marginBottom: 28
            }}>
              <MapPin size={14} /> Tunis, Tunisie • Disponible pour stage PFE
            </span>
          </div>

          <h1 className="animate-fade-in-up delay-100" style={{
            opacity: 0, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900,
            letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 24, color: '#0f172a'
          }}>
            Amina <span className="gradient-text-animated">Elphil</span>
          </h1>

          <p className="animate-fade-in-up delay-200" style={{
            opacity: 0, fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: '#64748b',
            maxWidth: 600, lineHeight: 1.8, marginBottom: 40
          }}>
            Ingénieure Informatique spécialisée en <strong style={{ color: '#334155' }}>Data Science & Intelligence Artificielle</strong>.
            Développement full-stack avec intégration IA.
          </p>

          <div className="animate-fade-in-up delay-300" style={{ opacity: 0, display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}>
            <a href="#contact" className="btn-primary"><ArrowRight size={18} /> Contactez-moi</a>
            <a href="https://github.com/Aminaelphil" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <Github size={18} /> GitHub
            </a>
          </div>

          {/* Stats */}
          <div className="animate-fade-in-up delay-500" style={{
            opacity: 0, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40,
            marginTop: 72, padding: '32px 48px', background: '#f8fafc', borderRadius: 20,
            border: '1px solid #f1f5f9'
          }}>
            {[
              { num: '4+', label: 'Stages réalisés' },
              { num: '6+', label: 'Technologies' },
              { num: '3', label: 'Langues parlées' }
            ].map((s) => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 28, fontWeight: 800, color: '#2563eb', letterSpacing: '-0.03em' }}>{s.num}</div>
                <div style={{ fontSize: 13, color: '#94a3b8', fontWeight: 500, marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SKILLS ═══ */}
      <section id="compétences" style={{ padding: '80px 24px', background: '#f8fafc' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 className={`section-title ${isVisible('compétences') ? 'animate-fade-in-up' : ''}`}
              style={{ opacity: isVisible('compétences') ? undefined : 0 }}>
              Compétences <span style={{ color: '#94a3b8' }}>&</span> <span style={{ color: '#3b82f6' }}>Expertise</span>
            </h2>
            <p className="section-subtitle" style={{ margin: '16px auto 0' }}>
              Technologies maîtrisées au fil de mes expériences professionnelles
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 20 }}>
            {Object.entries(skills).map(([category, { items, icon: Icon }], idx) => (
              <div key={category} className={`card ${isVisible('compétences') ? 'animate-fade-in-up' : ''}`}
                style={{ opacity: isVisible('compétences') ? undefined : 0, animationDelay: `${idx * 0.1}s` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: 'linear-gradient(135deg, #eff6ff, #dbeafe)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <Icon size={20} style={{ color: '#2563eb' }} />
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: '#0f172a' }}>{category}</h3>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {items.map((skill) => (
                    <span key={skill} style={{
                      padding: '6px 14px', fontSize: 13, fontWeight: 500,
                      background: '#f1f5f9', color: '#475569',
                      borderRadius: 8, border: '1px solid #e2e8f0',
                      transition: 'all 0.25s ease'
                    }}
                    onMouseEnter={(e) => { e.target.style.background = '#2563eb'; e.target.style.color = '#fff'; e.target.style.borderColor = '#2563eb'; }}
                    onMouseLeave={(e) => { e.target.style.background = '#f1f5f9'; e.target.style.color = '#475569'; e.target.style.borderColor = '#e2e8f0'; }}
                    >{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Specialization cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginTop: 40 }}>
            {[
              { icon: Brain, title: 'AI & Data Science', desc: 'Agents IA, analyse de données, Big Data, modèles prédictifs' },
              { icon: Code2, title: 'Full-Stack Dev', desc: 'Applications web modernes avec frameworks actuels' },
              { icon: Zap, title: 'DevOps & Tools', desc: 'Versioning, CI/CD, automatisation du déploiement' }
            ].map((item, idx) => {
              const IC = item.icon;
              return (
                <div key={item.title} className="card" style={{ textAlign: 'center', padding: 32 }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: 14, margin: '0 auto 16px',
                    background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 8px 24px -4px rgba(37,99,235,0.3)'
                  }}>
                    <IC size={26} style={{ color: '#fff' }} />
                  </div>
                  <h4 style={{ fontSize: 17, fontWeight: 700, color: '#0f172a', marginBottom: 8 }}>{item.title}</h4>
                  <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ EXPERIENCE ═══ */}
      <section id="expérience" style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 className={`section-title ${isVisible('expérience') ? 'animate-fade-in-up' : ''}`}
              style={{ opacity: isVisible('expérience') ? undefined : 0 }}>
              Expérience <span style={{ color: '#94a3b8' }}>&</span> <span style={{ color: '#3b82f6' }}>Projets</span>
            </h2>
            <p className="section-subtitle" style={{ margin: '16px auto 0' }}>
              Stages et projets professionnels qui ont forgé mon expertise
            </p>
          </div>

          {/* Timeline */}
          <div style={{ position: 'relative', paddingLeft: 32 }}>
            {/* Vertical line */}
            <div style={{ position: 'absolute', left: 7, top: 8, bottom: 8, width: 2, background: 'linear-gradient(to bottom, #dbeafe, #e2e8f0)', borderRadius: 2 }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {experiences.map((exp, idx) => (
                <div key={idx}
                  className={isVisible('expérience') ? 'animate-fade-in-left' : ''}
                  style={{ opacity: isVisible('expérience') ? undefined : 0, animationDelay: `${idx * 0.15}s`, position: 'relative' }}>
                  {/* Dot */}
                  <div style={{
                    position: 'absolute', left: -28, top: 28, width: 16, height: 16,
                    borderRadius: '50%', background: '#fff', border: '3px solid #3b82f6',
                    boxShadow: '0 0 0 4px rgba(59,130,246,0.15)'
                  }} />

                  <div className="card" style={{ marginLeft: 8 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 12 }}>
                      <div>
                        <h3 style={{ fontSize: 18, fontWeight: 700, color: '#0f172a', marginBottom: 4 }}>{exp.title}</h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                          <Briefcase size={14} style={{ color: '#3b82f6' }} />
                          <span style={{ fontSize: 14, fontWeight: 600, color: '#2563eb' }}>{exp.company}</span>
                        </div>
                      </div>
                      <span style={{
                        fontSize: 12, fontWeight: 600, color: '#64748b',
                        background: '#f1f5f9', padding: '6px 14px', borderRadius: 8
                      }}>{exp.period}</span>
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {exp.details.map((detail, i) => (
                        <li key={i} style={{ fontSize: 14, color: '#475569', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#3b82f6', marginTop: 7, flexShrink: 0 }} />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership */}
          <div className="card" style={{ marginTop: 40, background: 'linear-gradient(135deg, #eff6ff, #f8fafc)', border: '1px solid #dbeafe' }}>
            <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0f172a', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
              <GraduationCap size={22} style={{ color: '#2563eb' }} /> Leadership & Initiatives
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.7 }}>
                <strong style={{ color: '#2563eb' }}>Chef Département Médias & Contenu</strong> — Club « Les Ambassadeurs du Livre » (Depuis déc 2022)
              </p>
              <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.7 }}>
                <strong style={{ color: '#2563eb' }}>Responsable Éditorial</strong> — Wattpad Canada (Juil 2021 - Déc 2025) • 100k+ lecteurs, mentorat de 20+ auteurs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ LANGUAGES ═══ */}
      <section id="langues" style={{ padding: '80px 24px', background: '#f8fafc' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h3 className={`section-title ${isVisible('langues') ? 'animate-fade-in-up' : ''}`}
            style={{ opacity: isVisible('langues') ? undefined : 0, textAlign: 'center', marginBottom: 48, fontSize: '1.75rem' }}>
            <Globe size={28} style={{ verticalAlign: 'middle', color: '#3b82f6', marginRight: 10 }} />
            Langues
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
            {languages.map((lang) => (
              <div key={lang.lang} className="card" style={{ textAlign: 'center', padding: 32 }}>
                <p style={{ fontSize: 18, fontWeight: 700, color: '#0f172a', marginBottom: 8 }}>{lang.lang}</p>
                <p style={{ fontSize: 14, fontWeight: 600, color: '#2563eb', marginBottom: 16 }}>{lang.level}</p>
                {/* Progress bar */}
                <div style={{ height: 6, background: '#e2e8f0', borderRadius: 999, overflow: 'hidden' }}>
                  <div style={{
                    height: '100%', borderRadius: 999, width: `${lang.pct}%`,
                    background: 'linear-gradient(90deg, #2563eb, #60a5fa)',
                    transition: 'width 1.2s cubic-bezier(0.22,1,0.36,1)'
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONTACT ═══ */}
      <section id="contact" style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <div className={isVisible('contact') ? 'animate-fade-in-up' : ''} style={{ opacity: isVisible('contact') ? undefined : 0 }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              fontSize: 13, fontWeight: 600, color: '#2563eb',
              background: '#eff6ff', padding: '8px 20px', borderRadius: 999, marginBottom: 20,
              border: '1px solid #dbeafe'
            }}>
              <Mail size={14} /> Disponible pour collaboration
            </span>
          </div>

          <h2 className={`section-title ${isVisible('contact') ? 'animate-fade-in-up delay-100' : ''}`}
            style={{ opacity: isVisible('contact') ? undefined : 0, marginBottom: 16 }}>
            Envoyons un <span style={{ color: '#3b82f6' }}>message</span>
          </h2>
          <p style={{ fontSize: 16, color: '#64748b', marginBottom: 40, lineHeight: 1.7 }}>
            Intéressée par une collaboration, un stage ou un projet ? N'hésitez pas à me contacter !
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
            <a href="mailto:aminaelphil@gmail.com" className="btn-primary" style={{ width: 'fit-content' }}>
              <Mail size={18} /> aminaelphil@gmail.com
            </a>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
              <a href="https://github.com/Aminaelphil" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <Github size={18} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/amina-elphil" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer style={{
        padding: '32px 24px', borderTop: '1px solid #f1f5f9',
        background: '#f8fafc'
      }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 13, color: '#94a3b8' }}>© 2025 Amina Elphil. Tous droits réservés.</p>
          <p style={{ fontSize: 13, color: '#94a3b8' }}>Ingénieure Informatique | Data Science & IA</p>
        </div>
      </footer>

      {/* ═══ RESPONSIVE STYLES ═══ */}
      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
        @media (min-width: 769px) {
          .nav-mobile-btn { display: none !important; }
          .nav-mobile-menu { display: none !important; }
        }
      `}</style>
    </div>
  );
}
