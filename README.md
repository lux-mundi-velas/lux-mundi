# Lux Mundi — Projeto Front-end Estático

Resumo: protótipo estático para apresentação da identidade visual "Lux Mundi". Contém marca, layout, estilos e recursos multimídia usados para demonstrar a estética e a navegação proposta.

## Conteúdo deste README

- Visão geral
- Tecnologias e dependências
- Estrutura do projeto
- Como executar localmente (desenvolvimento)
- Boas práticas de design, performance e acessibilidade
- Deploy (opções e passos rápidos)
- Testes e validação
- Contribuição e fluxo de trabalho
- Changelog e versionamento
- Licença e contato

## Visão geral

O objetivo do projeto é servir como um protótipo visual e repositório central dos ativos (imagens, ícones, vídeos) e das folhas de estilo que compõem a identidade visual de Lux Mundi. O site é construído com HTML, CSS modular e JavaScript mínimo para comportamento interativo.

## Tecnologias

- HTML5 sem frameworks
- CSS3 modular (arquivos em `css/` usando variáveis em `variables.css`)
- JavaScript vanilla em `js/main.js`
- Recursos estáticos em `assets/` (imagens, ícones, logo, vídeos)

Observação: atualmente não há build tool configurada (npm, bundler). Posso adicionar um `package.json` com scripts para lint, minify e otimização, se desejar.

## Estrutura do projeto

- `index.html` — página principal do protótipo
- `css/` — estilos separados por responsabilidade
  - `variables.css` — tokens de cor, tipografia, espaçamento
  - `reset.css` — reset/normalize
  - `base.css` — regras base (tipografia, formulários)
  - `layout.css` — grid e posicionamento global
  - `components.css` — estilos de componentes reutilizáveis (botões, cards)
  - `sections.css` — estilos por seção da página
  - `responsive.css` — regras responsivas e breakpoints
- `js/main.js` — scripts do projeto (interações simples)
- `assets/` —
  - `images/` — imagens de conteúdo e decoração
  - `icons/` — ícones em SVG
  - `logo/` — variações do logotipo
  - `videos/` — vídeos usados no protótipo
- `DESIGN.md` — diretrizes e notas de design
- `lux_mundi_briefing_do_projeto.md` — briefing original do projeto

## Como executar localmente

Opção 1 — Abrir diretamente

1. Abra `index.html` no navegador.

Opção 2 — Servidor local para desenvolvimento (recomendado)

Com Python 3:

```bash
python -m http.server 8000
# Acesse http://localhost:8000
```

Com Node + Live Server (VS Code):

```bash
# Instale a extensão Live Server e clique em "Go Live"
```

Opção 3 — Usando `http-server` do npm:

```bash
npx http-server -p 8000
# Acesse http://localhost:8000
```

## Workflow de desenvolvimento sugerido

- Clonar o repositório e criar branch por feature: `git checkout -b feature/nome-da-feature`.
- Validar markup semântico e testar responsividade em dispositivos reais e emuladores.
- Otimizar imagens antes de commitar (`imagemin`, `squoosh` ou exportar WebP/AVIF).
- Abrir Pull Request com descrição das mudanças e screenshots se aplicável.

## Otimização de performance

- Compactar imagens e fornecer formatos modernos (WebP/AVIF) com fallbacks.
- Minificar `css` e `js` para produção.
- Usar lazy-loading para imagens e vídeos:

```html
<img src="image.jpg" loading="lazy" alt="Descrição">
```
- Evitar blocos de renderização síncronos no cabeçalho; colocar scripts não críticos ao final.

## Acessibilidade (checklist)

- Todos os elementos de imagem possuem `alt` descritivo.
- Uso correto de headings (`h1` → `h2` → `h3`).
- Contraste de cores conforme WCAG AA (verificar com ferramentas como axe ou Lighthouse).
- Formulários com labels associados e mensagens de erro acessíveis.
- Navegabilidade por teclado (tab order lógico) e foco visível.

## SEO e metadados

- Verifique se `index.html` contém metas essenciais:
  - `<meta name="description" content="...">`
  - OpenGraph (`og:`) e Twitter Card para compartilhamento social.
- Títulos de páginas (`<title>`) e headings únicos por página.

## Deploy — opções rápidas

1. GitHub Pages
   - Repositório público ou branch `gh-pages`.
   - Habilitar Pages nas configurações do repositório.

2. Netlify
   - Conectar o repositório Git; definir build command (não necessário se site é estático) e publish directory `/`.

3. Vercel
   - Conectar repositório; selecionar projeto estático.

4. FTP / Host tradicional
   - Subir arquivos da raiz para o servidor público.

## Testes e validação automatizada

- Executar Lighthouse para performance, acessibilidade e SEO.
- Rodar `axe-core` para checagem de acessibilidade.
- Validar HTML com um validador W3C.

## Integração contínua (exemplo GitHub Actions)

Recomendo um workflow simples que executa checks em PRs: validação de HTML, lint de CSS e execução de Lighthouse em modo headless. Posso adicionar um arquivo `.github/workflows/ci.yml` com etapas exemplares.

## Padrões de código e commits

- HTML semântico e BEM opcional para classes.
- CSS: variáveis em `variables.css` e componentes isolados.
- Commits: siga um padrão claro (ex.: Conventional Commits: `feat:`, `fix:`, `chore:`).

## Contribuição

1. Abra uma issue descrevendo o que pretende alterar.
2. Crie uma branch da forma `feature/descricao` ou `fix/descricao`.
3. Faça commits limpos e atômicos.
4. Abra Pull Request e solicite revisão.

## Versionamento e changelog

- Use tags Git (`v0.1.0`) e mantenha um `CHANGELOG.md` para releases importantes.

## Checklist pré-produção

- [ ] Otimizar imagens e mídia
- [ ] Minificar CSS/JS
- [ ] Verificar acessibilidade (axe/Lighthouse)
- [ ] Testar responsividade em breakpoints
- [ ] Confirmar metadados SEO e OpenGraph

## Licença

Adicione um arquivo `LICENSE` com a licença escolhida (por exemplo, MIT). Se quiser, eu crio o `LICENSE` automaticamente.

## Contato

Abra uma issue no repositório ou envie um e-mail para o responsável pelo projeto.

---
