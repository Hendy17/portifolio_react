# 🎨 Guia de Personalização do Portfolio

Este guia te ajudará a personalizar o portfolio com suas informações e preferências.

## 📝 Alterando Informações Pessoais

### 1. Seção Hero (Banner Principal)
**Arquivo:** `src/sections/Hero.tsx`

```typescript
// Altere estas informações:
- Nome e título profissional (linha ~45)
- Descrição pessoal (linha ~52)
- Links para redes sociais (linhas ~75-95)
- Foto de perfil (linha ~30)
```

### 2. Seção Sobre
**Arquivo:** `src/sections/About.tsx`

```typescript
// Informações para alterar:
- Descrição pessoal (linhas ~65-75)
- Lista de habilidades e níveis (linhas ~15-25)
- Características profissionais (linhas ~30-55)
```

### 3. Projetos
**Arquivo:** `src/sections/Projects.tsx`

```typescript
// Array de projetos (linhas ~10-60):
const projects: Project[] = [
  {
    id: '1',
    title: 'Seu Projeto',
    description: 'Descrição do projeto...',
    image: 'URL_DA_IMAGEM',
    technologies: ['React', 'TypeScript'],
    githubUrl: 'https://github.com/usuario/repo',
    liveUrl: 'https://projeto.com',
    featured: true // Para destacar o projeto
  }
];
```

### 4. Experiência Profissional
**Arquivo:** `src/sections/Experience.tsx`

```typescript
// Array de experiências (linhas ~10-40):
const experiences: Experience[] = [
  {
    id: '1',
    position: 'Seu Cargo',
    company: 'Nome da Empresa',
    period: '2023 - Presente',
    description: ['Descrição das atividades...'],
    technologies: ['React', 'TypeScript']
  }
];

// Array de educação (linhas ~45-65):
const education: Education[] = [
  {
    id: '1',
    degree: 'Seu Curso',
    institution: 'Nome da Instituição',
    period: '2020 - 2024'
  }
];
```

### 5. Informações de Contato
**Arquivo:** `src/sections/Contact.tsx`

```typescript
// Informações de contato (linhas ~15-30):
const contactInfo = [
  {
    label: 'Email',
    value: 'seu@email.com',
    href: 'mailto:seu@email.com'
  },
  // ... outros contatos
];
```

## 🎨 Personalizando Cores e Tema

### Cores Principais
**Arquivo:** `tailwind.config.js`

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#f0f9ff',   // Azul muito claro
        500: '#3b82f6',  // Azul principal
        600: '#2563eb',  // Azul escuro
        700: '#1d4ed8',  // Azul muito escuro
      },
      // Adicione suas cores personalizadas:
      custom: {
        purple: '#8b5cf6',
        green: '#10b981',
      }
    }
  }
}
```

### Gradientes Personalizados

```css
/* No seu CSS ou classes Tailwind */
bg-gradient-to-r from-blue-500 to-purple-600
bg-gradient-to-br from-purple-400 to-pink-400
```

## 🖼️ Alterando Imagens

### Foto de Perfil
1. Adicione sua foto na pasta `public/`
2. Altere o src no Hero.tsx:
```typescript
<img
  src="/minha-foto.jpg"
  alt="Foto de Perfil"
  className="..."
/>
```

### Imagens dos Projetos
1. Use URLs externas ou adicione na pasta `public/`
2. Recomendação: Use serviços como Unsplash, Pexels ou suas próprias screenshots

## 🎬 Customizando Animações

### Framer Motion
**Velocidade das animações:**
```typescript
// Mais rápido
transition={{ duration: 0.3 }}

// Mais lento
transition={{ duration: 1.2 }}

// Com delay
transition={{ duration: 0.6, delay: 0.2 }}
```

**Novos tipos de animação:**
```typescript
// Bounce
animate={{ y: [0, -10, 0] }}
transition={{ duration: 2, repeat: Infinity }}

// Fade com escala
initial={{ opacity: 0, scale: 0.8 }}
animate={{ opacity: 1, scale: 1 }}
```

## 📱 Responsividade

### Breakpoints Tailwind CSS
```typescript
className={`
  text-sm        // Mobile
  md:text-base   // Tablet (768px+)
  lg:text-lg     // Desktop (1024px+)
  xl:text-xl     // Large Desktop (1280px+)
`}
```

## 🌙 Modo Escuro

O tema escuro já está configurado! Use as classes:
```typescript
className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
```

## 🔧 Funcionalidades Extras

### Adicionar Nova Seção
1. Crie o arquivo em `src/sections/NovaSessao.tsx`
2. Importe e adicione no `App.tsx`
3. Adicione ao menu de navegação no `Navbar.tsx`

### Formulário de Contato Real
Para conectar o formulário a um serviço real:
```typescript
// Usando Formspree, Netlify Forms, ou EmailJS
const handleSubmit = async (e) => {
  e.preventDefault();
  const response = await fetch('https://formspree.io/f/SEU_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  // Handle response
};
```

## 📦 Adicionando Dependências

### Novas funcionalidades úteis:
```bash
# Gráficos
npm install recharts

# Ícones adicionais
npm install react-icons

# Carousel/Slider
npm install swiper

# Formatação de texto
npm install react-markdown
```

## 🚀 Otimizações de Performance

### Lazy Loading de Componentes
```typescript
import { lazy, Suspense } from 'react';

const Projects = lazy(() => import('./sections/Projects'));

// No JSX:
<Suspense fallback={<div>Loading...</div>}>
  <Projects />
</Suspense>
```

### Otimização de Imagens
```typescript
// Use next/image se migrar para Next.js
// Ou optimize as imagens manualmente
<img 
  loading="lazy"
  src="imagem.webp" // Use formato WebP
  alt="Descrição"
/>
```

## 📄 SEO e Meta Tags

### Atualize o index.html:
```html
<meta name="description" content="Sua descrição personalizada" />
<meta name="keywords" content="suas, palavras-chave" />
<meta property="og:title" content="Seu Nome - Portfolio" />
<meta property="og:description" content="Sua descrição" />
<meta property="og:image" content="/sua-imagem-og.jpg" />
```

---

💡 **Dica:** Mantenha sempre um backup do código original antes de fazer grandes alterações!