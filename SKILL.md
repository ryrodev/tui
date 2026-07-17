---
name: tui-framework
description: Cria, converte e mantém interfaces web usando o TUI Framework, com componentes tui-, tokens CSS, responsividade, temas claro e escuro e acessibilidade.
version: 1.1
license: MIT
---

# TUI Framework Skill

Use este skill quando o usuário pedir para:

- criar uma página, dashboard, painel administrativo, monitor, formulário ou interface web com o estilo TUI;
- converter uma interface existente para o TUI Framework de arquivo único;
- reutilizar o mesmo design em vários projetos;
- criar novos componentes compatíveis com o framework;
- corrigir inconsistências visuais em código que já usa classes `tui-`.

## Arquivos de referência

Antes de editar a interface, leia:

1. `tuiframework.js`, para confirmar classes, tokens e APIs existentes;
2. `README.md`, para exemplos, convenções e limitações;
3. `example.html`, como catálogo oficial dos 64 componentes, referência funcional e padrão visual geral.

Não invente uma classe `tui-*` sem antes verificar se ela existe no CSS incorporado em `tuiframework.js`. Para componentes interativos, verifique também os atributos `data-tui-*` e as APIs `TUIComponents` e `TUIToast`.

## Referência visual

Considere `example.html` a fonte oficial para composição, aparência e comportamento dos componentes. Ao adaptar ou criar páginas:

- não copie blocos grandes de CSS local;
- promova padrões realmente reutilizáveis ao `tuiframework.js`;
- use `data-density="compact"` quando a interface exigir alta densidade;
- use os grids oficiais para indicadores, filtros e conteúdo;
- use `tui-status-pill` para estados curtos e semânticos;
- use `tui-chip` e grupos de toggle para filtros e seleções rápidas;
- use tabelas, células e áreas de rolagem fornecidas pelo framework;
- use `tui-details` ou `tui-collapsible` para conteúdo expansível;
- use `TUITheme` e `TUIAccent`, sem criar persistência paralela;
- compare o resultado final com a galeria oficial em temas claro e escuro.

## Objetivo visual

A interface deve preservar estas características:

- estética de terminal/TUI moderna;
- tipografia monoespaçada;
- painéis separados por espaços visíveis;
- bordas fortes e cantos retos por padrão;
- hierarquia baseada em contraste, bordas, títulos compactos e cor de destaque;
- fundos escuros neutros e destaque roxo por padrão;
- controles compactos, legíveis e consistentes;
- animações discretas, nunca essenciais para compreender a interface.

## Fluxo obrigatório

### 1. Entender a interface

Identifique:

- objetivo principal da página;
- conteúdo e ações mais importantes;
- estados necessários: vazio, carregando, sucesso, alerta e erro;
- comportamento em desktop e celular;
- componentes repetidos que devem ser reutilizados.

### 2. Escolher a estrutura

Use componentes existentes antes de criar CSS novo:

| Necessidade | Classes preferidas |
|---|---|
| Aplicação com sidebar | `tui-app`, `tui-topbar`, `tui-sidebar` |
| Conteúdo centralizado | `tui-container`, `tui-section` |
| Bloco delimitado | `tui-panel` |
| Conteúdo resumido | `tui-card` |
| Indicador numérico | `tui-metric` |
| Grupo vertical | `tui-stack` |
| Grupo horizontal | `tui-cluster`, `tui-split` |
| Grade responsiva | `tui-grid` |
| Ações | `tui-btn` e modificadores |
| Entrada de dados | `tui-field`, `tui-input`, `tui-select`, `tui-textarea` |
| Estado curto | `tui-badge`, `tui-status`, `tui-status-pill` |
| Mensagem importante | `tui-alert` |
| Filtros rápidos | `tui-chip-group`, `tui-chip` |
| Dados tabulares | `tui-table-wrap`, `tui-table` |
| Diagnóstico expansível | `tui-details`, `tui-details__grid`, `tui-details__pre` |
| Rodapé de ações | `tui-toolbar`, `tui-toolbar__actions` |
| Logs ou comandos | `tui-terminal`, `tui-command-palette` |
| Modal e confirmação | `tui-dialog`, `tui-alert-dialog` |
| Painel lateral | `tui-drawer`, `tui-sheet` |
| Menu e popover | `tui-dropdown`, `tui-popover`, `tui-context-menu` |
| Navegação | `tui-accordion`, `tui-tabs`, `tui-menubar`, `tui-navigation-menu` |
| Seleção avançada | `tui-combobox`, `tui-custom-select`, `tui-input-otp` |
| Feedback temporário | `tui-toast`, `tui-sonner`, `TUIToast` |
| Comunicação | `tui-bubble`, `tui-chat-message`, `tui-message-scroller` |
| Dados e mídia | `tui-data-table`, `tui-chart`, `tui-carousel`, `tui-calendar` |

### 3. Produzir HTML semântico

Regras:

- use `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>` e `<footer>` quando apropriado;
- use `<button>` para ações e `<a>` para navegação;
- use `<label>` associado a cada campo;
- use `<table>` apenas para dados realmente tabulares;
- mantenha uma ordem de títulos coerente, começando em `<h1>`;
- forneça `aria-label` para botões apenas com ícone;
- em abas, mantenha `role="tablist"`, `role="tab"`, `aria-selected` e `aria-controls`;
- em progresso, forneça `role="progressbar"` e valores ARIA;
- em alertas importantes, use `role="alert"` quando a mensagem surgir dinamicamente.

### 4. Personalizar com tokens

Prefira sobrescrever variáveis em um arquivo do projeto carregado depois do framework:

```css
:root {
  --tui-accent-1: var(--tui-blue-1);
  --tui-accent-2: var(--tui-blue-2);
  --tui-accent-3: var(--tui-blue-3);
  --tui-accent-4: var(--tui-blue-4);
  --tui-accent-5: var(--tui-blue-5);
  --tui-gap: 16px;
  --tui-scrollbar-size: 10px;
  --tui-scrollbar-thumb: var(--tui-blue-3);
  --tui-scrollbar-thumb-hover: var(--tui-blue-2);
}
```

Não copie o CSS inteiro de um componente apenas para trocar uma cor, distância, fonte ou arredondamento.

### 5. Criar CSS específico apenas quando necessário

Quando o framework não cobrir uma regra de negócio:

- crie classes com prefixo do projeto, nunca com `tui-`;
- reutilize tokens `--tui-*`;
- mantenha BEM ou uma convenção consistente;
- não use seletores dependentes de uma árvore HTML frágil;
- evite `!important`, exceto para sobrescrever uma regra externa inevitável;
- evite estilos inline, exceto para valores dinâmicos em propriedades customizadas.

Exemplo:

```css
.monitor-signal {
  border-left: var(--tui-divider-width) solid var(--tui-info);
  min-height: 8rem;
}

.monitor-signal--error {
  border-left-color: var(--tui-danger);
}
```

### 6. Adicionar JavaScript somente para comportamento

Use primeiro os controladores nativos do framework para diálogos, abas, menus, accordions, selects, carousels, toggles, calendário, tabelas e toasts. JavaScript específico do projeto deve ficar restrito a regras de negócio, carregamento de dados, filtros próprios e estados assíncronos.

Não use JavaScript para aplicar estilos que podem ser resolvidos com classes, atributos ou tokens CSS.


## Biblioteca de componentes

O framework inclui 64 componentes oficiais:

```text
Accordion       Alert             Alert Dialog      Aspect Ratio
Attachment      Avatar            Badge             Breadcrumb
Bubble          Button            Button Group      Calendar
Card            Carousel          Chart             Checkbox
Collapsible     Combobox          Command           Context Menu
Data Table      Date Picker       Dialog            Direction
Drawer          Dropdown Menu     Empty             Field
Hover Card      Input             Input Group       Input OTP
Item            Kbd               Label             Marker
Menubar         Message           Message Scroller  Native Select
Navigation Menu Pagination        Popover           Progress
Radio Group     Resizable         Scroll Area       Select
Separator       Sheet             Sidebar           Skeleton
Slider          Sonner            Spinner           Switch
Table           Tabs              Textarea          Toast
Toggle          Toggle Group      Tooltip           Typography
```

Componentes interativos devem usar os controladores incorporados ao bundle:

```js
TUIComponents.bind();
TUIComponents.open('dialog-id');
TUIComponents.close('dialog-id');
TUIToast.show({ title: 'Saved', variant: 'success' });
```

Compare toda nova interface com `example.html`. Preserve bordas retas, tipografia monoespaçada, hierarquia compacta, uma cor de destaque por contexto, foco visível e pouco ou nenhum CSS local.

## Padrões de composição

### Dashboard

```html
<div class="tui-app">
  <header class="tui-app__header tui-topbar">
    <a class="tui-topbar__brand" href="/">Monitor</a>
    <button class="tui-btn tui-btn--ghost tui-btn--sm">Atualizar</button>
  </header>

  <aside class="tui-app__sidebar tui-sidebar">
    <nav class="tui-nav" aria-label="Navegação principal">
      <a class="tui-nav__link is-active" href="#resumo">Resumo</a>
      <a class="tui-nav__link" href="#logs">Logs</a>
    </nav>
  </aside>

  <main class="tui-app__main tui-stack">
    <section class="tui-grid tui-grid--3" aria-label="Indicadores">
      <article class="tui-card tui-metric">
        <span class="tui-metric__label">Total</span>
        <strong class="tui-metric__value">128</strong>
      </article>
    </section>

    <section class="tui-panel" data-label="atividade">
      <div class="tui-panel__body">...</div>
    </section>
  </main>
</div>
```

### Formulário

```html
<form class="tui-panel">
  <header class="tui-panel__header">
    <h2 class="tui-panel__title">Novo equipamento</h2>
  </header>

  <div class="tui-panel__body tui-stack">
    <label class="tui-field">
      <span class="tui-field__label">Identificador</span>
      <input class="tui-input" name="id" required>
    </label>

    <label class="tui-field">
      <span class="tui-field__label">Tipo</span>
      <select class="tui-select" name="tipo">
        <option>BOOL</option>
        <option>INT</option>
      </select>
    </label>
  </div>

  <footer class="tui-panel__footer tui-cluster">
    <button class="tui-btn tui-btn--primary" type="submit">Salvar</button>
    <button class="tui-btn tui-btn--ghost" type="button">Cancelar</button>
  </footer>
</form>
```

### Estado vazio

```html
<section class="tui-panel tui-empty">
  <div class="tui-empty__icon" aria-hidden="true">[ ]</div>
  <h2>Nenhum registro encontrado</h2>
  <p class="tui-muted">Altere os filtros ou adicione um novo item.</p>
  <button class="tui-btn tui-btn--primary">Adicionar registro</button>
</section>
```

### Carregamento

```html
<div class="tui-card tui-stack" aria-busy="true" aria-label="Carregando dados">
  <div class="tui-skeleton" style="width: 40%"></div>
  <div class="tui-skeleton" style="height: 2.5rem"></div>
  <div class="tui-skeleton" style="width: 70%"></div>
</div>
```

## Responsividade

- Priorize conteúdo em uma coluna em telas pequenas.
- Não reduza textos a tamanhos ilegíveis para manter várias colunas.
- Tabelas devem permanecer dentro de `tui-table-wrap`.
- A sidebar padrão desaparece abaixo de `60rem`; forneça navegação móvel quando necessário.
- Ações essenciais não podem existir apenas em hover.
- Botões de toque devem manter área adequada, preferencialmente `tui-control-height` ou maior.

## Tema

Carregue o arquivo único no `<head>` para que o CSS incorporado e o tema inicial sejam aplicados antes da renderização:

```html
<html data-theme-preference="system" data-accent="purple">
<head>
  <meta name="color-scheme" content="dark light">
  <meta name="theme-color" content="#292929">
  <script src="tuiframework.js"></script>
</head>
```

Use os controles fornecidos pelo framework em vez de criar outro sistema de persistência. Para cor de destaque:

```html
<select class="tui-accent-select" data-tui-accent-select aria-label="Cor de destaque">
  <option value="purple">Roxo</option>
  <option value="blue">Azul</option>
  <option value="green">Verde</option>
  <option value="yellow">Amarelo</option>
  <option value="red">Vermelho</option>
</select>
```

A API equivalente é `TUIAccent.set('green')`.

Use o controle fornecido pelo framework em vez de criar outro sistema de persistência para tema:

```html
<button
  class="tui-btn tui-btn--ghost tui-theme-toggle"
  type="button"
  data-tui-theme-toggle
  data-label-prefix="tema: "
  data-label-system="auto"
>
  <span class="tui-theme-toggle__icon" data-tui-theme-icon aria-hidden="true">[A]</span>
  <span data-tui-theme-label>tema: auto</span>
</button>
```

Regras para agentes:

- ofereça `system`, `dark` e `light`, salvo quando o usuário pedir somente dois modos;
- use `data-theme-preference="system"` como padrão em novos projetos;
- não substitua `tuiframework.js` por um alternador local duplicado;
- não grave diretamente `data-theme`; use `TUITheme.set(...)`;
- mantenha o botão como `<button type="button">` e preserve seu rótulo acessível;
- carregue `tuiframework.js` no `<head>` para reduzir flashes do tema incorreto;
- teste a interface nos dois temas, especialmente tabelas, campos, alertas, foco e contraste;
- mantenha a scrollbar global do framework; personalize-a apenas pelos tokens `--tui-scrollbar-*`;
- para iniciar em um tema fixo, use `data-theme-preference="light"` ou `data-theme-preference="dark"`; o JavaScript continua necessário porque contém o CSS.

API disponível:

```js
TUITheme.set('light');
TUITheme.set('dark');
TUITheme.set('system');
TUITheme.cycle();
```

Para uma área com tema próprio, aplique `data-theme="light"` ou `data-theme="dark"` no contêiner somente quando os tokens herdados forem suficientes. Essa área não é controlada por `tuiframework.js`.

## Critérios de qualidade

Antes de entregar, confirme:

- [ ] `tuiframework.js` foi carregado antes do CSS específico do projeto.
- [ ] Todas as classes `tui-*` e atributos `data-tui-*` utilizados existem no framework.
- [ ] Componentes interativos usam o controlador do bundle antes de receber JavaScript próprio.
- [ ] A página foi comparada visualmente com `example.html`.
- [ ] Não há nomes genéricos que possam colidir, como `.card`, `.button` ou `.panel`.
- [ ] A interface funciona sem hover e somente com teclado.
- [ ] O foco é visível.
- [ ] Contraste e estados não dependem apenas de cor.
- [ ] O layout não gera rolagem horizontal, exceto em tabelas ou conteúdo deliberadamente rolável.
- [ ] Existe estado vazio, de carregamento e de erro quando dados são assíncronos.
- [ ] O HTML mantém uma hierarquia semântica válida.
- [ ] O modo de movimento reduzido permanece utilizável.

## Restrições

Não faça:

- importar o CSS externo do tema Discord original;
- usar classes internas do Discord;
- substituir a interface inteira por uma imagem;
- copiar componentes de bibliotecas externas sem adaptar tokens e acessibilidade;
- misturar múltiplos sistemas visuais sem necessidade;
- criar dezenas de utilitários novos no HTML para evitar uma classe semântica do projeto;
- alterar `tuiframework.js` para uma customização exclusiva de uma única aplicação.

## Formato de entrega recomendado

Para projetos novos, entregue:

```text
projeto/
├─ index.html
├─ tuiframework.js
├─ app.css
└─ app.js
```

Inclua instruções curtas para abrir ou executar o projeto e informe qualquer comportamento que exija servidor local, API ou build.


## APIs de estado da versão 1.1

Para indicadores operacionais, não manipule classes semânticas manualmente. Use:

```js
TUIComponents.status('status-id', 'success', 'online', { pulse: true });
TUIComponents.setToggle('toggle-id', true);
TUIComponents.setCollapsible('trigger-id', 'panel-id', true);
```

Escute `tui:togglechange` e `tui:collapsiblechange` para conectar o estado visual à lógica da aplicação. Em seletores exclusivos, use `data-tui-toggle-group="single"` e `data-tui-toggle-required="true"`.
