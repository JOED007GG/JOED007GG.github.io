/* ==========================================================================
   Joed Adauto — Professional Site & Resume Interactivity
   - Theme switcher (Light / Dark) with localStorage persistence
   - Bilingual PT-BR / EN switcher across index.html and curriculo.html
   - One-click email copy, mobile menu, print trigger, subtle scroll reveal
   ========================================================================== */

const translations = {
  pt: {
    'brand.role': 'Engenharia de Software',
    'nav.about': 'Sobre',
    'nav.experience': 'Trajetória',
    'nav.projects': 'Projetos',
    'nav.resume': 'Currículo',
    'nav.contact': 'Contato',
    'nav.menuAria': 'Abrir menu',
    'lang.aria': 'Alternar idioma',
    'theme.aria': 'Alternar tema claro e escuro',

    'hero.status': 'Disponível para oportunidades em TI · Remoto ou Campo Grande - MS',
    'hero.headline': 'Estudante de Engenharia de Software (UNINTER) & Jovem Aprendiz em Suporte Técnico na RFK',
    'hero.summary':
      'Estudante bolsista no 4º semestre de Engenharia de Software, combinando base técnica em programação web e lógica com vivência prática em suporte técnico corporativo. Busco oportunidades de estágio ou atuação na área de TI para resolver problemas reais e evoluir continuamente.',
    'hero.ctaViewCv': 'Ver Currículo Online',
    'hero.ctaDownloadCv': 'Baixar Currículo (PDF)',

    'snapshot.eyebrow': 'PERFIL RÁPIDO',
    'snapshot.currentLabel': 'Atuação Atual',
    'snapshot.currentValue': 'Jovem Aprendiz · Suporte Técnico (RFK)',
    'snapshot.educationLabel': 'Graduação',
    'snapshot.educationValue': 'Engenharia de Software · UNINTER (4º sem.)',
    'snapshot.locationLabel': 'Localização',
    'snapshot.locationValue': 'Campo Grande - MS, Brasil',
    'snapshot.goalLabel': 'Foco',
    'snapshot.goalValue': 'Estágio ou TI Geral (Remoto / Presencial)',
    'snapshot.languagesLabel': 'Idiomas',
    'snapshot.languagesValue': 'Português (Nativo) · Inglês (Nível A2)',

    'about.eyebrow': 'BIOGRAFIA PROFISSIONAL',
    'about.title': 'Curiosidade técnica transformada em prática',
    'about.p1':
      'Meu interesse por tecnologia começou cedo — nunca me contentei apenas em usar sistemas e aplicativos; sempre quis entender como os processos funcionam por trás das telas e como as soluções são estruturadas.',
    'about.p2':
      'Conquistei uma bolsa de estudos para cursar Engenharia de Software na UNINTER, onde hoje estou no 4º semestre, complementando minha base com formações práticas em Lógica de Programação e Pacote Office pela Microlins.',
    'about.p3':
      'Atualmente atuo na RFK como Jovem Aprendiz em Suporte Técnico, experiência que fortalece minha comunicação com usuários, diagnóstico de problemas e organização operacional. Mantenho uma visão pé no chão e focada em resultados: aprender na prática, colaborar com boas equipes e construir uma carreira sólida em Tecnologia da Informação.',

    'skills.eyebrow': 'COMPETÊNCIAS TÉCNICAS',
    'skills.title': 'Base de TI & Desenvolvimento',
    'skills.devTitle': 'Desenvolvimento & Lógica',
    'skills.logic': 'Lógica de Programação',
    'skills.supportTitle': 'Suporte & Produtividade',
    'skills.support': 'Suporte Técnico',
    'skills.userHelp': 'Atendimento ao Usuário',
    'skills.office': 'Pacote Office',
    'skills.troubleshooting': 'Diagnóstico de Falhas',
    'skills.toolsTitle': 'Ferramentas & Engenharia',
    'skills.requirements': 'Análise de Requisitos',

    'exp.eyebrow': 'TRAJETÓRIA',
    'exp.title': 'Experiência & Formação',
    'exp.workEyebrow': 'EXPERIÊNCIA PROFISSIONAL',
    'exp.currentBadge': 'Em atividade',
    'exp.rfkRole': 'Jovem Aprendiz — Suporte Técnico',
    'exp.rfkDate': 'Atual',
    'exp.rfkB1':
      'Apoio no atendimento e suporte técnico a usuários, auxiliando na resolução de dúvidas operacionais e incidentes do dia a dia.',
    'exp.rfkB2':
      'Suporte na triagem, organização e acompanhamento de demandas da área de Tecnologia da Informação.',
    'exp.rfkB3':
      'Desenvolvimento contínuo de boas práticas de comunicação corporativa, agilidade no atendimento e trabalho em equipe.',

    'edu.eyebrow': 'FORMAÇÃO ACADÊMICA & CURSOS',
    'edu.scholarshipBadge': 'Bolsista',
    'edu.uninterDegree': 'Bacharelado em Engenharia de Software',
    'edu.uninterDate': '4º Semestre',
    'edu.uninterDesc':
      'Estudante bolsista com foco em fundamentos de engenharia de software, desenvolvimento web, requisitos e modelagem de sistemas.',
    'edu.logicCourse': 'Lógica de Programação',
    'edu.officeCourse': 'Pacote Office',
    'edu.completed': 'Concluído',
    'edu.completed2': 'Concluído',

    'projects.eyebrow': 'PORTFÓLIO',
    'projects.title': 'Projetos em Destaque',
    'projects.p1Tag': 'Engenharia de Software',
    'projects.p1Desc':
      'Projeto interdisciplinar de graduação com levantamento de requisitos funcionais e não funcionais, arquitetura conceitual, conformidade LGPD e modelagem de negócio para plataforma SaaS de gestão de consultórios.',
    'projects.p1Tech1': 'Requisitos',
    'projects.p1Tech2': 'Arquitetura',
    'projects.p2Tag': 'Desenvolvimento Web',
    'projects.p2Title': 'Site Profissional & Currículo Web',
    'projects.p2Desc':
      'Aplicação web responsiva em arquitetura Bento Grid sem frameworks externos, com alternância de tema Claro/Escuro, suporte bilíngue (PT/EN) e página de currículo otimizada para ATS e impressão em PDF.',
    'projects.p2Link': 'Abrir página do currículo →',
    'projects.p3Tag': 'Projeto Acadêmico',
    'projects.p3Title': 'Portfólio Web & Móveis',
    'projects.p3Desc':
      'Site institucional multipáginas desenvolvido para a disciplina de Aplicações Web e Móveis na UNINTER, estruturando páginas de apresentação, formação, portfólio e contato com HTML semântico e CSS.',
    'projects.p3Link': 'Ver repositório no GitHub ↗',

    'values.eyebrow': 'ALÉM DO CÓDIGO',
    'values.title': 'Valores & Interesses',
    'values.v1Title': 'Disciplina & Saúde',
    'values.v1Desc':
      'A rotina de academia reforça minha constância, foco e comprometimento diário com metas de longo prazo.',
    'values.v2Title': 'Trabalho em Equipe',
    'values.v2Desc':
      'Pratico vôlei regularmente — um esporte que valoriza comunicação clara, colaboração e leitura rápida de jogo.',
    'values.v3Title': 'Música & Bateria',
    'values.v3Desc':
      'Tocar bateria estimula ritmo, coordenação e concentração, trazendo equilíbrio criativo para a rotina técnica.',
    'values.v4Title': 'Fé & Princípios',
    'values.v4Desc':
      'Minha fé em Deus orienta meus valores pessoais e profissionais: integridade, respeito e dedicação no que faço.',

    'contact.eyebrow': 'CONTATO',
    'contact.title': 'Vamos conversar sobre oportunidades em TI?',
    'contact.subtitle':
      'Aberto a vagas de estágio, suporte técnico ou tecnologia em geral — remoto ou presencial em Campo Grande - MS.',
    'contact.cvCta': 'Baixar Currículo (PDF)',
    'contact.copy': 'Copiar',
    'contact.copied': 'Copiado!',
    'contact.phoneLabel': 'Telefone / WhatsApp',
    'footer.copy': '© 2026 Joed Adauto de Souza Rocha · Campo Grande - MS',
    'footer.top': 'Voltar ao topo ↑',

    // Resume Page
    'cv.back': '← Voltar ao Site',
    'cv.print': 'Imprimir / Salvar PDF',
    'cv.download': 'Baixar PDF',
    'cv.objTitle': 'Objetivo & Resumo Profissional',
    'cv.objText':
      'Estudante bolsista do 4º semestre de Engenharia de Software (UNINTER) com atuação atual como Jovem Aprendiz em Suporte Técnico na RFK. Busco oportunidade de Estágio ou atuação na área de Tecnologia da Informação (remoto ou presencial em Campo Grande - MS), aplicando base em desenvolvimento web, lógica de programação, atendimento ao usuário e resolução de problemas.',
    'cv.eduTitle': 'Formação Acadêmica',
    'cv.eduDegree': 'Bacharelado em Engenharia de Software (Bolsista) — 4º Semestre',
    'cv.eduStatus': 'Em andamento',
    'cv.expTitle': 'Experiência Profissional',
    'cv.expRole': 'Jovem Aprendiz — Suporte Técnico',
    'cv.expDate': 'Atual',
    'cv.expB1':
      'Apoio no atendimento e suporte técnico a usuários, auxiliando no esclarecimento de dúvidas e solução de demandas operacionais do dia a dia.',
    'cv.expB2':
      'Auxílio na triagem, registro e acompanhamento de chamados e rotinas da equipe de Tecnologia da Informação.',
    'cv.expB3':
      'Colaboração na organização de processos e equipamentos, fortalecendo comunicação técnica, agilidade e trabalho em equipe.',
    'cv.projTitle': 'Projetos Relevantes',
    'cv.p1Name': 'NexoConsulta — Especificação & Plano de Negócio SaaS',
    'cv.p1Stack': 'Requisitos, Arquitetura, LGPD',
    'cv.p1B1':
      'Elaboração de projeto interdisciplinar (UNINTER) contemplando requisitos funcionais e não funcionais, definição de MVP, infraestrutura em nuvem e conformidade com a LGPD para plataforma SaaS de gestão administrativa.',
    'cv.p2Name': 'Site Profissional & Portfólio Web Responsivo',
    'cv.p2B1':
      'Desenvolvimento de aplicação web responsiva (joed007gg.github.io) em layout Bento Grid com alternância de tema Claro/Escuro, suporte bilíngue (PT/EN) e currículo web estruturado para ATS.',
    'cv.p3Name': 'Portfólio Acadêmico — Aplicações Web e Móveis',
    'cv.p3B1':
      'Construção de site multipáginas semântico (github.com/JOED007GG/aplicacoes-web-e-moveis) com seções de apresentação, formação, portfólio e contato para disciplina da graduação.',
    'cv.skillsTitle': 'Habilidades Técnicas',
    'cv.skLangLabel': 'Linguagens & Web:',
    'cv.skLangVal': 'HTML5, CSS3, JavaScript, Python, Lógica de Programação',
    'cv.skToolsLabel': 'Ferramentas & Versionamento:',
    'cv.skSupportLabel': 'Suporte & Produtividade:',
    'cv.skSupportVal': 'Suporte Técnico a Usuários, Atendimento de Chamados, Pacote Office (Word, Excel, PowerPoint)',
    'cv.extraTitle': 'Cursos Complementares & Idiomas',
    'cv.coursesLabel': 'Cursos:',
    'cv.coursesVal': 'Lógica de Programação (Microlins) · Pacote Office (Microlins)',
    'cv.langsLabel': 'Idiomas:',
    'cv.langsVal': 'Português (Nativo) · Inglês (Básico / Pré-Intermediário — Nível A2)'
  },

  en: {
    'brand.role': 'Software Engineering',
    'nav.about': 'About',
    'nav.experience': 'Background',
    'nav.projects': 'Projects',
    'nav.resume': 'Resume',
    'nav.contact': 'Contact',
    'nav.menuAria': 'Open menu',
    'lang.aria': 'Switch language',
    'theme.aria': 'Toggle light and dark theme',

    'hero.status': 'Open to IT opportunities · Remote or Campo Grande, MS (Brazil)',
    'hero.headline': 'Software Engineering Student (UNINTER) & Technical Support Apprentice at RFK',
    'hero.summary':
      'Scholarship student in the 4th semester of Software Engineering, combining a technical foundation in web development and programming logic with hands-on corporate technical support experience. Seeking IT internship or entry-level opportunities to solve real problems and keep growing.',
    'hero.ctaViewCv': 'View Online Resume',
    'hero.ctaDownloadCv': 'Download Resume (PDF)',

    'snapshot.eyebrow': 'AT A GLANCE',
    'snapshot.currentLabel': 'Current Role',
    'snapshot.currentValue': 'Apprentice · Technical Support (RFK)',
    'snapshot.educationLabel': 'Degree',
    'snapshot.educationValue': 'Software Engineering · UNINTER (4th sem.)',
    'snapshot.locationLabel': 'Location',
    'snapshot.locationValue': 'Campo Grande, MS · Brazil',
    'snapshot.goalLabel': 'Target',
    'snapshot.goalValue': 'IT Internship or General IT (Remote / On-site)',
    'snapshot.languagesLabel': 'Languages',
    'snapshot.languagesValue': 'Portuguese (Native) · English (A2)',

    'about.eyebrow': 'PROFESSIONAL BIOGRAPHY',
    'about.title': 'Technical curiosity turned into practice',
    'about.p1':
      'My interest in technology started early — I was never satisfied with merely using apps and websites; I always wanted to understand how processes work behind the scenes and how software is structured.',
    'about.p2':
      'I earned a scholarship to study Software Engineering at UNINTER, where I am currently in the 4th semester, complementing my academic background with practical courses in Programming Logic and Microsoft Office at Microlins.',
    'about.p3':
      'I currently work at RFK as a Technical Support Apprentice, gaining hands-on experience in user assistance, troubleshooting, and IT operational routines. I keep a grounded, results-driven mindset: learning through practice, collaborating well with teams, and building a solid career in Information Technology.',

    'skills.eyebrow': 'TECHNICAL SKILLS',
    'skills.title': 'IT & Development Foundation',
    'skills.devTitle': 'Development & Logic',
    'skills.logic': 'Programming Logic',
    'skills.supportTitle': 'Support & Productivity',
    'skills.support': 'Technical Support',
    'skills.userHelp': 'User Assistance',
    'skills.office': 'Microsoft Office Suite',
    'skills.troubleshooting': 'Troubleshooting',
    'skills.toolsTitle': 'Tools & Engineering',
    'skills.requirements': 'Requirements Analysis',

    'exp.eyebrow': 'BACKGROUND',
    'exp.title': 'Experience & Education',
    'exp.workEyebrow': 'WORK EXPERIENCE',
    'exp.currentBadge': 'Current',
    'exp.rfkRole': 'Apprentice — Technical Support',
    'exp.rfkDate': 'Present',
    'exp.rfkB1':
      'Assist in day-to-day technical support and user assistance, helping resolve operational questions and recurring issues.',
    'exp.rfkB2':
      'Support ticket triage, documentation, and follow-up of Information Technology team routines.',
    'exp.rfkB3':
      'Continuously developing clear corporate communication, responsiveness, and collaborative teamwork.',

    'edu.eyebrow': 'EDUCATION & COURSES',
    'edu.scholarshipBadge': 'Scholarship',
    'edu.uninterDegree': 'B.S. in Software Engineering',
    'edu.uninterDate': '4th Semester',
    'edu.uninterDesc':
      'Scholarship student focusing on software engineering fundamentals, web development, requirements specification, and systems modeling.',
    'edu.logicCourse': 'Programming Logic',
    'edu.officeCourse': 'Microsoft Office Suite',
    'edu.completed': 'Completed',
    'edu.completed2': 'Completed',

    'projects.eyebrow': 'PORTFOLIO',
    'projects.title': 'Featured Projects',
    'projects.p1Tag': 'Software Engineering',
    'projects.p1Desc':
      'Interdisciplinary university project covering functional and non-functional requirements, conceptual architecture, LGPD compliance, and business modeling for a healthcare SaaS platform.',
    'projects.p1Tech1': 'Requirements',
    'projects.p1Tech2': 'Architecture',
    'projects.p2Tag': 'Web Development',
    'projects.p2Title': 'Professional Site & Web Resume',
    'projects.p2Desc':
      'Responsive vanilla web application in a Bento Grid layout featuring Light/Dark mode, bilingual PT/EN support, and an ATS-friendly resume view ready for PDF printing.',
    'projects.p2Link': 'Open resume page →',
    'projects.p3Tag': 'Academic Project',
    'projects.p3Title': 'Web & Mobile Portfolio',
    'projects.p3Desc':
      'Multi-page website created for the Web & Mobile Applications course at UNINTER, organizing about, education, portfolio, and contact pages with semantic HTML and CSS.',
    'projects.p3Link': 'View GitHub repository ↗',

    'values.eyebrow': 'BEYOND CODE',
    'values.title': 'Values & Interests',
    'values.v1Title': 'Discipline & Health',
    'values.v1Desc':
      'Regular gym training reinforces consistency, focus, and daily commitment to long-term goals.',
    'values.v2Title': 'Teamwork',
    'values.v2Desc':
      'Playing volleyball strengthens clear communication, cooperation, and quick decision-making.',
    'values.v3Title': 'Music & Drums',
    'values.v3Desc':
      'Playing drums sharpens rhythm, coordination, and focus, bringing creative balance to technical work.',
    'values.v4Title': 'Faith & Principles',
    'values.v4Desc':
      'My faith in God guides my personal and professional values: integrity, respect, and dedication.',

    'contact.eyebrow': 'CONTACT',
    'contact.title': 'Let’s talk about IT opportunities',
    'contact.subtitle':
      'Open to internship, technical support, or general IT roles — remote or on-site in Campo Grande, MS.',
    'contact.cvCta': 'Download Resume (PDF)',
    'contact.copy': 'Copy',
    'contact.copied': 'Copied!',
    'contact.phoneLabel': 'Phone / WhatsApp',
    'footer.copy': '© 2026 Joed Adauto de Souza Rocha · Campo Grande, MS - Brazil',
    'footer.top': 'Back to top ↑',

    // Resume Page
    'cv.back': '← Back to Website',
    'cv.print': 'Print / Save PDF',
    'cv.download': 'Download PDF',
    'cv.objTitle': 'Objective & Professional Summary',
    'cv.objText':
      '4th-semester Software Engineering scholarship student (UNINTER) currently working as a Technical Support Apprentice at RFK. Seeking an IT Internship or entry-level Information Technology role (remote or on-site in Campo Grande, MS), applying foundational web development, programming logic, user support, and troubleshooting skills.',
    'cv.eduTitle': 'Education',
    'cv.eduDegree': 'B.S. in Software Engineering (Scholarship) — 4th Semester',
    'cv.eduStatus': 'In progress',
    'cv.expTitle': 'Professional Experience',
    'cv.expRole': 'Apprentice — Technical Support',
    'cv.expDate': 'Present',
    'cv.expB1':
      'Support end users with day-to-day technical questions and operational troubleshooting.',
    'cv.expB2':
      'Assist with ticket triage, documentation, and follow-up of Information Technology team demands.',
    'cv.expB3':
      'Collaborate in organizing IT routines and equipment while strengthening communication and teamwork.',
    'cv.projTitle': 'Selected Projects',
    'cv.p1Name': 'NexoConsulta — SaaS Specification & Business Plan',
    'cv.p1Stack': 'Requirements, Architecture, LGPD',
    'cv.p1B1':
      'Interdisciplinary university project (UNINTER) detailing functional/non-functional requirements, MVP definition, cloud infrastructure, and LGPD privacy compliance for an administrative SaaS platform.',
    'cv.p2Name': 'Professional Biography Website & Web Resume',
    'cv.p2B1':
      'Built a responsive Bento Grid portfolio (joed007gg.github.io) with Light/Dark theme toggle, bilingual PT/EN support, and an integrated ATS-friendly resume view.',
    'cv.p3Name': 'Academic Portfolio — Web & Mobile Applications',
    'cv.p3B1':
      'Developed a semantic multi-page website (github.com/JOED007GG/aplicacoes-web-e-moveis) with About, Education, Portfolio, and Contact sections for university coursework.',
    'cv.skillsTitle': 'Technical Skills',
    'cv.skLangLabel': 'Languages & Web:',
    'cv.skLangVal': 'HTML5, CSS3, JavaScript, Python, Programming Logic',
    'cv.skToolsLabel': 'Tools & Version Control:',
    'cv.skSupportLabel': 'Support & Productivity:',
    'cv.skSupportVal': 'Technical Support, User Assistance, Ticket Triage, Microsoft Office (Word, Excel, PowerPoint)',
    'cv.extraTitle': 'Courses & Languages',
    'cv.coursesLabel': 'Courses:',
    'cv.coursesVal': 'Programming Logic (Microlins) · Microsoft Office Suite (Microlins)',
    'cv.langsLabel': 'Languages:',
    'cv.langsVal': 'Portuguese (Native) · English (Elementary / Pre-Intermediate — CEFR A2)'
  }
};

// State helpers
let currentLang = localStorage.getItem('joed_prof_lang') || 'pt';
let currentTheme = localStorage.getItem('joed_prof_theme') || 'light';

function applyTheme(theme) {
  currentTheme = theme === 'dark' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  localStorage.setItem('joed_prof_theme', currentTheme);

  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) {
    metaTheme.setAttribute('content', currentTheme === 'dark' ? '#0b1120' : '#f8fafc');
  }
}

function applyLanguage(lang) {
  currentLang = translations[lang] ? lang : 'pt';
  const dict = translations[currentLang];
  document.documentElement.lang = currentLang === 'en' ? 'en' : 'pt-BR';
  localStorage.setItem('joed_prof_lang', currentLang);

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const key = el.getAttribute('data-i18n-aria');
    if (dict[key]) {
      el.setAttribute('aria-label', dict[key]);
    }
  });

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    const active = btn.getAttribute('data-lang') === currentLang;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-pressed', String(active));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  applyTheme(currentTheme);
  applyLanguage(currentLang);

  // Language buttons
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      applyLanguage(btn.getAttribute('data-lang'));
    });
  });

  // Theme toggle
  const themeBtn = document.getElementById('themeToggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
  }

  // Mobile menu
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const open = mainNav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', String(open));
    });

    mainNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Copy email button
  const copyBtn = document.getElementById('copyEmailBtn');
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      const email = copyBtn.getAttribute('data-email');
      try {
        await navigator.clipboard.writeText(email);
      } catch {
        const input = document.createElement('input');
        input.value = email;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
      }

      copyBtn.classList.add('is-copied');
      copyBtn.textContent = translations[currentLang]['contact.copied'];
      setTimeout(() => {
        copyBtn.classList.remove('is-copied');
        copyBtn.textContent = translations[currentLang]['contact.copy'];
      }, 2000);
    });
  }

  // Print CV button (on curriculo.html)
  const printBtn = document.getElementById('printCvBtn');
  if (printBtn) {
    printBtn.addEventListener('click', () => window.print());
  }

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }
});
