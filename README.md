# 🚀 Portfólio Profissional - Carlos Anísio

Portfólio moderno e responsivo desenvolvido com HTML5, CSS3 e JavaScript vanilla, seguindo as melhores práticas de desenvolvimento web.

## ✨ Características

### Design & UX
- 🎨 **Design Moderno**: Interface única com gradientes, animações suaves e estética profissional
- 🌓 **Modo Escuro/Claro**: Alternância entre temas com persistência de preferência
- 📱 **Mobile-First**: Totalmente responsivo, otimizado para todos os dispositivos
- ♿ **Acessível**: Seguindo padrões de acessibilidade web (WCAG)
- ⚡ **Performance**: Carregamento rápido e otimizado

### Funcionalidades
- 🎯 **Navegação Suave**: Scroll animado entre seções
- 📊 **Barras de Progresso Animadas**: Visualização interativa de habilidades
- 🎭 **Animações de Entrada**: Elementos aparecem gradualmente ao rolar
- 💫 **Parallax Sutil**: Efeito de profundidade no background
- 📱 **Menu Mobile**: Navegação otimizada para dispositivos móveis
- 🎮 **Easter Egg**: Código Konami escondido!

## 🛠️ Tecnologias

- **HTML5**: Estrutura semântica e moderna
- **CSS3**: 
  - Variáveis CSS para temas
  - Flexbox e Grid Layout
  - Animações e transições
  - Media queries (Mobile-first)
- **JavaScript**: 
  - Vanilla JS (sem frameworks)
  - Intersection Observer API
  - Local Storage para preferências
  - Event Listeners otimizados

## 📁 Estrutura do Projeto

```
portfolio/
│
├── index.html          # Página principal (SPA - Single Page Application)
├── style.css          # Estilos globais e responsivos
├── script.js          # Funcionalidades interativas
└── README.md          # Documentação
```

## 🎨 Paleta de Cores

### Modo Escuro (Padrão)
- **Background**: `#0a0e27`, `#151a35`, `#1d2442`
- **Texto**: `#e8eaf6`, `#b4b8d4`, `#6e7191`
- **Acentos**: `#00d9ff` (Cyan), `#7c3aed` (Roxo)

### Modo Claro
- **Background**: `#ffffff`, `#f8fafc`, `#f1f5f9`
- **Texto**: `#0f172a`, `#334155`, `#64748b`
- **Acentos**: Mantém as cores principais

## 🚀 Como Usar

1. **Clone ou baixe os arquivos**
2. **Abra o `index.html` em um navegador moderno**
3. **Personalize o conteúdo** editando os arquivos HTML

### Personalizações Fáceis

#### Alterar Cores
Edite as variáveis CSS no início do arquivo `style.css`:

```css
:root {
  --accent-primary: #00d9ff;  /* Cor principal */
  --accent-secondary: #7c3aed; /* Cor secundária */
  /* ... */
}
```

#### Adicionar/Remover Seções
No `index.html`, cada seção está claramente marcada:

```html
<section class="nome-da-secao" id="nome-da-secao">
  <!-- Conteúdo -->
</section>
```

#### Mudar Fontes
As fontes são carregadas do Google Fonts. Para mudar:

1. Escolha novas fontes em [Google Fonts](https://fonts.google.com)
2. Substitua o link no `<head>` do HTML
3. Atualize as variáveis no CSS:

```css
:root {
  --font-display: 'SuaFonte', sans-serif;
  --font-body: 'SuaFonte', monospace;
}
```

## 📱 Responsividade

O site é otimizado para:
- 📱 **Mobile**: < 768px
- 💻 **Tablet**: 768px - 1023px
- 🖥️ **Desktop**: > 1024px

### Breakpoints Principais

```css
/* Mobile First - estilos base */

@media (min-width: 768px) {
  /* Tablets */
}

@media (min-width: 1024px) {
  /* Desktops */
}
```

## ⚡ Performance

- **Lazy Loading**: Imagens carregam sob demanda
- **Debounce**: Otimização de eventos de scroll
- **CSS Puro**: Sem dependências de frameworks
- **Minificação**: Pronto para minificação em produção

## 🎯 Próximas Melhorias

- [ ] Adicionar formulário de contato funcional
- [ ] Integrar com API de e-mail
- [ ] Adicionar mais projetos
- [ ] Criar versão em inglês
- [ ] PWA (Progressive Web App)
- [ ] Analytics

## 🤝 Contribuindo

Sugestões e melhorias são sempre bem-vindas! 

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar como base para seu próprio portfólio!

## 👤 Autor

**Carlos Anísio**
- GitHub: [@T3CNO0](https://github.com/T3CNO0)
- LinkedIn: [Carlos Anísio](https://www.linkedin.com/in/carlos-anisio-a54a77251/)
- Instagram: [@carloss_11110](https://www.instagram.com/carloss_11110/)

---

⭐ Se gostou, deixe uma estrela no repositório!

💼 Desenvolvido com 💜 e ☕ por Carlos Anísio
