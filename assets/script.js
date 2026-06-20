// ============================================
// CONSTANTES E ELEMENTOS
// ============================================

const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const themeToggle = document.getElementById('themeToggle');

// ============================================
// TEMA ESCURO/CLARO
// ============================================

// Verifica se há um tema salvo no localStorage
const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);

// Toggle de tema
themeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});

// ============================================
// NAVEGAÇÃO
// ============================================

// Scroll suave para âncoras
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    
    // Só processa se for uma âncora interna
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80;
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
        
        // Fecha o menu mobile após clicar
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
      }
    }
  });
});

// Menu mobile toggle
navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Fecha o menu ao clicar fora
document.addEventListener('click', (e) => {
  if (!nav.contains(e.target) && navMenu.classList.contains('active')) {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
  }
});

// ============================================
// NAVEGAÇÃO NO SCROLL
// ============================================

let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  // Adiciona classe quando scrollar
  if (currentScroll > 100) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
  
  // Atualiza link ativo baseado na seção visível
  updateActiveLink();
  
  lastScroll = currentScroll;
});

// ============================================
// HIGHLIGHT DO LINK ATIVO
// ============================================

function updateActiveLink() {
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.pageYOffset;
  
  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

// ============================================
// ANIMAÇÕES DE ENTRADA
// ============================================

// Intersection Observer para animações
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observa elementos com atributo data-animate
const animatedElements = document.querySelectorAll('[data-animate]');
animatedElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  observer.observe(el);
});

// ============================================
// ANIMAÇÃO DAS BARRAS DE HABILIDADE
// ============================================

const skillBars = document.querySelectorAll('.skill-progress');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const progressBar = entry.target;
      const progress = progressBar.style.getPropertyValue('--progress');
      
      // Reset e anima
      progressBar.style.width = '0';
      setTimeout(() => {
        progressBar.style.width = progress;
      }, 100);
      
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

skillBars.forEach(bar => skillObserver.observe(bar));

// ============================================
// EFEITO DE DIGITAÇÃO NO HERO
// ============================================

function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.textContent = '';
  
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Opcional: ativar efeito de digitação
// const heroSubtitle = document.querySelector('.hero-subtitle .text-gradient');
// if (heroSubtitle) {
//   const originalText = heroSubtitle.textContent;
//   typeWriter(heroSubtitle, originalText, 100);
// }

// ============================================
// PARALLAX SUAVE NO HERO
// ============================================

const heroBackground = document.querySelector('.hero-background');

window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const parallaxSpeed = 0.5;
  
  if (heroBackground && scrolled < window.innerHeight) {
    heroBackground.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
  }
});

// ============================================
// CURSOR PERSONALIZADO (OPCIONAL)
// ============================================

// const cursor = document.createElement('div');
// cursor.classList.add('custom-cursor');
// document.body.appendChild(cursor);

// document.addEventListener('mousemove', (e) => {
//   cursor.style.left = e.clientX + 'px';
//   cursor.style.top = e.clientY + 'px';
// });

// document.querySelectorAll('a, button').forEach(el => {
//   el.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
//   el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
// });

// ============================================
// ESTATÍSTICAS ANIMADAS
// ============================================

function animateNumber(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 16);
}

// Anima números das estatísticas quando aparecem na tela
const stats = document.querySelectorAll('.stat-number');
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const element = entry.target;
      const text = element.textContent;
      const number = parseInt(text.replace(/\D/g, ''));
      
      if (!isNaN(number)) {
        element.textContent = '0';
        animateNumber(element, number);
      }
      
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

stats.forEach(stat => {
  if (stat) {
    statsObserver.observe(stat);
  }
});

// ============================================
// PREVENÇÃO DE SCROLL HORIZONTAL
// ============================================

document.body.style.overflowX = 'hidden';

// ============================================
// LOADING INICIAL
// ============================================

window.addEventListener('load', () => {
  document.body.classList.add('loaded');
  
  // Remove o indicador de scroll após 5 segundos
  setTimeout(() => {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
      scrollIndicator.style.opacity = '0';
    }
  }, 5000);
});

// ============================================
// PERFORMANCE: DEBOUNCE
// ============================================

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Aplica debounce no scroll para melhor performance
const debouncedScroll = debounce(() => {
  updateActiveLink();
}, 100);

window.addEventListener('scroll', debouncedScroll);

// ============================================
// ACESSIBILIDADE: NAVEGAÇÃO POR TECLADO
// ============================================

// Trap focus no menu mobile quando aberto
navMenu.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navMenu.classList.contains('active')) {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
    navToggle.focus();
  }
});

// ============================================
// MENSAGEM DE CONSOLE
// ============================================

console.log('%c👋 Olá, Dev!', 'font-size: 20px; font-weight: bold; color: #00d9ff;');
console.log('%cGostou do portfólio? Vamos trabalhar juntos!', 'font-size: 14px; color: #7c3aed;');
console.log('%c🔗 GitHub: https://github.com/T3CNO0', 'font-size: 12px; color: #b4b8d4;');

// ============================================
// EASTER EGG: KONAMI CODE
// ============================================

let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
  konamiCode.push(e.key);
  konamiCode = konamiCode.slice(-10);
  
  if (konamiCode.join(',') === konamiPattern.join(',')) {
    console.log('%c🎮 KONAMI CODE ATIVADO! 🎮', 'font-size: 24px; font-weight: bold; color: #00d9ff; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);');
    console.log('%c✨ Você desbloqueou o modo desenvolvedor épico! ✨', 'font-size: 16px; color: #7c3aed;');
    
    // Efeito visual
    document.body.style.animation = 'rainbow 2s linear infinite';
    setTimeout(() => {
      document.body.style.animation = '';
    }, 3000);
  }
});

// ============================================
// FUNÇÕES UTILITÁRIAS
// ============================================

// Copia texto para clipboard
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    console.log('Texto copiado:', text);
  });
}

// Detecta se é mobile
function isMobile() {
  return window.innerWidth <= 768;
}

// Smooth scroll para elemento específico
function scrollToElement(elementId, offset = 80) {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.offsetTop - offset;
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
}

// ============================================
// EXPORTA FUNÇÕES ÚTEIS GLOBALMENTE
// ============================================

window.portfolioUtils = {
  scrollToElement,
  copyToClipboard,
  isMobile
};
