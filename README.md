# 📚 Doki Doki Translate Club Memorial (DDTCM)

O repositório oficial da versão moderna da **Doki Doki Translate Club Memorial**, o maior acervo de modificações e traduções em português brasileiro para o jogo *Doki Doki Literature Club* (DDLC).

Este projeto migrou do formato estático original em HTML/jQuery para uma aplicação **React (SPA) moderna, rápida e totalmente responsiva** em **TypeScript** empacotada com **Vite**.

---

## 🛠️ Tecnologias e Ferramentas

- **Core**: [React 19](https://react.dev)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org)
- **Empacotador (Bundler)**: [Vite](https://vite.dev) (HMR ultra rápido)
- **Roteamento**: [React Router DOM](https://reactrouter.com)
- **Estilização**: [Bootstrap CSS](https://getbootstrap.com) (estrutural) & CSS Customizado (Premium)
- **Ícones**: [Lucide React](https://lucide.dev)

---

## 🚀 Funcionalidades Principais

1. **SPA (Single Page Application)**: Navegação instantânea e fluida sem recarregamento de página.
2. **Carrossel Responsivo Nativo**: Slider de destaques animado reconstruído nativamente em React (sem jQuery).
3. **Filtro e Busca em Tempo Real**: Campo de pesquisa avançado e filtros dinâmicos por categoria e plataforma (PC/Android) rodando em tempo real.
4. **Páginas de Detalhes Dinâmicas**: Roteamento baseado em slug (`/mod/:slug`) para carregamento de informações específicas de cada mod.
5. **Seção de Equipe Personalizada**: Perfis dos integrantes com avatares estilizados e efeitos visuais brilhantes.
6. **Metatags Otimizadas**: Suporte completo para SEO, pré-visualizações em redes sociais (Open Graph) e imagens de link compartilháveis.

---

## 📦 Como Executar o Projeto Localmente

### Pré-requisitos
Certifique-se de ter o [Node.js](https://nodejs.org) instalado em sua máquina.

### Passos para rodar:
1. Clone o repositório:
   ```bash
   git clone https://github.com/kayqueprogram/DDTCM.git
   cd DDTCM
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Gere a build otimizada para produção:
   ```bash
   npm run build
   ```

---

## 🌎 Hospedagem e Produção

O projeto está otimizado para deploy na **Vercel**:
* O arquivo `vercel.json` na raiz garante que todas as requisições sejam redirecionadas para o `index.html`, evitando erros de página não encontrada (404) ao recarregar rotas em produção.

---

## ✍️ Autores e Colaboradores

- **Kayque de Jesus** ([kayqueprogram](https://github.com/kayqueprogram)) - Desenvolvedor Web e Mantenedor Atual (Migração para React/TypeScript).
- **Derik Fernando** - Tradutor & Revisor.
- **Miki** - Colaborador & Tradutor.
- **Drack** - Desenvolvedor Original do Acervo.
