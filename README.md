# Psicólogo Ricardo Montanari - Website Oficial

Repositório do código-fonte do website profissional do Psicólogo Clínico Ricardo Montanari (CRP: 06/88234-X).

Este projeto foi desenvolvido com foco em **performance**, **acessibilidade** e **SEO**, utilizando as melhores práticas de desenvolvimento web moderno com Next.js 14.

![Status do Build](https://img.shields.io/badge/build-passing-brightgreen) ![Versão](https://img.shields.io/badge/version-1.0.0-blue) ![Licença](https://img.shields.io/badge/license-Proprietary-red)

## 🚀 Stack Tecnológica

O projeto foi construído sobre uma arquitetura moderna e escalável:

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router & Server Components)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/) (Tipagem estática rigorosa)
- **Estilização**: [Tailwind CSS](https://tailwindcss.com/) (Utility-first CSS)
- **Animações**: [Framer Motion](https://www.framer.com/motion/) (Interações fluidas e performáticas)
- **Ícones**: [Lucide React](https://lucide.dev/)
- **Deploy**: GitHub Pages (Exportação Estática)

## ⚡ Destaques de Engenharia

### Performance (Core Web Vitals)
O site foi otimizado para atingir pontuações altas no Google Lighthouse, garantindo carregamento rápido e experiência fluida:
- **LCP (Largest Contentful Paint)** otimizado com `next/image` e priorização de carregamento.
- **CLS (Cumulative Layout Shift)** minimizado através de dimensionamento explícito de mídia.
- **Code Splitting** automático via Next.js App Router.

### SEO (Otimização para Motores de Busca)
- Estrutura semântica de HTML5 (`<header>`, `<main>`, `<section>`, `<footer>`).
- Metadados dinâmicos e Open Graph tags para redes sociais.
- Sitemap e Robots.txt configurados para indexação correta.

### Acessibilidade (a11y)
- Contraste de cores verificado conforme diretrizes WCAG.
- Atributos `aria-label` e navegação por teclado implementados.
- HTML semântico para leitores de tela.

## 🛠️ Instalação e Desenvolvimento

Para rodar o projeto localmente em ambiente de desenvolvimento:

```bash
# Clone o repositório
git clone https://github.com/ednaniajundiai/site-psicologo-ricardo.git

# Entre no diretório
cd site-psicologo-ricardo

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:3000`.

## 📦 Build e Deploy

O projeto utiliza GitHub Actions para CI/CD. A cada push na branch `main`, o workflow de build é acionado, gerando a versão estática e realizando o deploy automaticamente.

```bash
# Para gerar o build de produção localmente
npm run build
```

## 📝 Licença

Todos os direitos reservados a Ricardo Montanari. O código-fonte é disponibilizado para fins de portfólio e auditoria técnica.

---
Desenvolvido por **Ednan** | [LinkedIn](https://www.linkedin.com/in/seu-linkedin)
