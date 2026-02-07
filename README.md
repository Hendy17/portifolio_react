# Portfolio Moderno - React + TypeScript

Um portfólio profissional e responsivo desenvolvido com as mais modernas tecnologias web.

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca para construção da interface
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool rápida e moderna
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Animações fluidas e interações
- **Lucide React** - Ícones modernos e personalizáveis

## ✨ Funcionalidades

- ✅ Design responsivo e mobile-first
- ✅ Modo escuro automático
- ✅ Animações suaves e interativas
- ✅ Navegação suave entre seções
- ✅ Formulário de contato funcional
- ✅ Seção de projetos com filtros
- ✅ Timeline de experiência profissional
- ✅ Gráficos de habilidades animados
- ✅ SEO otimizado

## 📱 Seções do Portfolio

1. **Hero** - Apresentação principal com call-to-action
2. **Sobre** - Informações pessoais e habilidades técnicas
3. **Projetos** - Showcase de projetos com filtros e tecnologias
4. **Experiência** - Timeline profissional e educação
5. **Contato** - Formulário de contato e informações

## 🛠️ Como Executar

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd portifolio_react
```

2. Instale as dependências:
```bash
npm install
```

3. Execute em modo de desenvolvimento:
```bash
npm run dev
```

4. Acesse no navegador:
```
http://localhost:5173
```

### Build para produção

```bash
npm run build
```

### Preview da build de produção

```bash
npm run preview
```

## 🎨 Personalização

### Alterando Informações Pessoais

1. **Hero Section** - Edite [src/sections/Hero.tsx](src/sections/Hero.tsx)
2. **Sobre** - Edite [src/sections/About.tsx](src/sections/About.tsx)
3. **Projetos** - Edite [src/sections/Projects.tsx](src/sections/Projects.tsx)
4. **Experiência** - Edite [src/sections/Experience.tsx](src/sections/Experience.tsx)
5. **Contato** - Edite [src/sections/Contact.tsx](src/sections/Contact.tsx)

## 📂 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Navbar.tsx      # Navegação principal
│   └── Footer.tsx      # Rodapé
├── sections/           # Seções principais
│   ├── Hero.tsx        # Seção hero/banner
│   ├── About.tsx       # Sobre mim
│   ├── Projects.tsx    # Portfólio de projetos
│   ├── Experience.tsx  # Experiência profissional
│   └── Contact.tsx     # Formulário de contato
├── types/              # Definições TypeScript
│   └── index.ts        # Tipos e interfaces
├── App.tsx             # Componente principal
├── main.tsx            # Ponto de entrada
└── index.css           # Estilos globais
```

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Preview da build local
- `npm run lint` - Executa linting do código

---

⭐ Portfolio criado com React + TypeScript + Tailwind CSS
