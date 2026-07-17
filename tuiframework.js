/**
 * TUI Framework 1.1
 * Single-file TUI-inspired web framework.
 *
 * Includes the complete stylesheet and the light/dark/system theme controller.
 * Runtime dependencies: none.
 *
 * SPDX-License-Identifier: MIT
 */
(function tuiFrameworkBootstrap(window, document) {
  'use strict';

  const VERSION = '1.1';
  const STYLE_ID = 'tui-framework-styles';
  const CSS_TEXT = "/**\n * TUI Framework\n * A dependency-free, TUI-inspired CSS framework for reusable web interfaces.\n *\n * Inspired by the visual language of the reference theme created by refact0r:\n * https://www.refact0r.dev\n *\n * This is an independent web framework. It does not import or depend on\n * Discord, BetterDiscord, or the compiled reference theme.\n *\n * Version: 1.1\n */\n\n@layer reset, tokens, base, layout, components, utilities, overrides;\n\n/* ========================================================================== */\n/* RESET                                                                      */\n/* ========================================================================== */\n\n@layer reset {\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n\n  html {\n    color-scheme: dark light;\n    hanging-punctuation: first last;\n    text-size-adjust: 100%;\n    -webkit-text-size-adjust: 100%;\n  }\n\n  body,\n  h1,\n  h2,\n  h3,\n  h4,\n  p,\n  figure,\n  blockquote,\n  dl,\n  dd {\n    margin: 0;\n  }\n\n  ul[role='list'],\n  ol[role='list'] {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n  }\n\n  body {\n    min-height: 100vh;\n  }\n\n  img,\n  picture,\n  svg,\n  video,\n  canvas {\n    display: block;\n    max-width: 100%;\n  }\n\n  input,\n  button,\n  textarea,\n  select {\n    color: inherit;\n    font: inherit;\n  }\n\n  button,\n  [role='button'] {\n    cursor: pointer;\n  }\n\n  textarea:not([rows]) {\n    min-height: 8rem;\n  }\n\n  :target {\n    scroll-margin-block: 5rem;\n  }\n}\n\n/* ========================================================================== */\n/* TOKENS                                                                     */\n/* ========================================================================== */\n\n@layer tokens {\n  :root {\n    color-scheme: dark;\n\n    /* Typography */\n    --tui-font: 'DM Mono', 'Cascadia Code', 'SFMono-Regular', Consolas,\n      'Liberation Mono', monospace;\n    --tui-font-sans: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,\n      'Segoe UI', sans-serif;\n    --tui-code-font: var(--tui-font);\n    --tui-font-weight: 300;\n    --tui-font-weight-medium: 500;\n    --tui-font-weight-bold: 700;\n    --tui-letter-spacing: -0.05ch;\n    --tui-line-height: 1.55;\n\n    /* Scale */\n    --tui-space-0: 0;\n    --tui-space-1: 0.25rem;\n    --tui-space-2: 0.5rem;\n    --tui-space-3: 0.75rem;\n    --tui-space-4: 1rem;\n    --tui-space-5: 1.25rem;\n    --tui-space-6: 1.5rem;\n    --tui-space-8: 2rem;\n    --tui-space-10: 2.5rem;\n    --tui-space-12: 3rem;\n    --tui-space-16: 4rem;\n    --tui-gap: 0.75rem;\n\n    /* Sizing */\n    --tui-content-width: 90rem;\n    --tui-sidebar-width: 17rem;\n    --tui-rail-width: 4rem;\n    --tui-header-height: 3.25rem;\n    --tui-control-height: 2.5rem;\n    --tui-control-height-sm: 2rem;\n    --tui-control-height-lg: 3rem;\n\n    /* Shape */\n    --tui-radius-none: 0;\n    --tui-radius-sm: 0.125rem;\n    --tui-radius: 0.25rem;\n    --tui-radius-lg: 0.5rem;\n    --tui-radius-pill: 999px;\n    --tui-panel-radius: var(--tui-radius-none);\n    --tui-border-width: 2px;\n    --tui-divider-width: 4px;\n\n    /* Motion */\n    --tui-duration-fast: 120ms;\n    --tui-duration: 200ms;\n    --tui-duration-slow: 400ms;\n    --tui-ease: ease;\n    --tui-transition: var(--tui-duration) var(--tui-ease);\n\n    /* Elevation */\n    --tui-shadow-sm: 0 2px 0 rgb(0 0 0 / 0.22);\n    --tui-shadow: 0 8px 24px rgb(0 0 0 / 0.28);\n    --tui-shadow-lg: 0 18px 60px rgb(0 0 0 / 0.38);\n    --tui-ring: 0 0 0 3px color-mix(in srgb, var(--tui-accent-2), transparent 68%);\n\n    /* Neutral palette: fallbacks first, OKLCH second */\n    --tui-text-0: #303030;\n    --tui-text-0: oklch(19% 0 0);\n    --tui-text-1: #f1f1f1;\n    --tui-text-1: oklch(95% 0 0);\n    --tui-text-2: #d5d5d5;\n    --tui-text-2: oklch(85% 0 0);\n    --tui-text-3: #b7b7b7;\n    --tui-text-3: oklch(75% 0 0);\n    --tui-text-4: #8c8c8c;\n    --tui-text-4: oklch(60% 0 0);\n    --tui-text-5: #575757;\n    --tui-text-5: oklch(40% 0 0);\n\n    --tui-bg-1: #494949;\n    --tui-bg-1: oklch(31% 0 0);\n    --tui-bg-2: #3d3d3d;\n    --tui-bg-2: oklch(27% 0 0);\n    --tui-bg-3: #333333;\n    --tui-bg-3: oklch(23% 0 0);\n    --tui-bg-4: #292929;\n    --tui-bg-4: oklch(19% 0 0);\n    --tui-bg-5: #202020;\n    --tui-bg-5: oklch(15.5% 0 0);\n\n    --tui-hover: rgb(255 255 255 / 0.06);\n    --tui-active: rgb(255 255 255 / 0.12);\n    --tui-active-2: rgb(255 255 255 / 0.18);\n\n    /* Red */\n    --tui-red-1: #ed8796;\n    --tui-red-1: oklch(75% 0.13 0);\n    --tui-red-2: #df7485;\n    --tui-red-2: oklch(70% 0.13 0);\n    --tui-red-3: #cf6174;\n    --tui-red-3: oklch(65% 0.13 0);\n    --tui-red-4: #be4f64;\n    --tui-red-4: oklch(60% 0.13 0);\n    --tui-red-5: #ad3d54;\n    --tui-red-5: oklch(55% 0.13 0);\n\n    /* Green */\n    --tui-green-1: #73c8a9;\n    --tui-green-1: oklch(75% 0.12 170);\n    --tui-green-2: #5ab696;\n    --tui-green-2: oklch(70% 0.12 170);\n    --tui-green-3: #3ea485;\n    --tui-green-3: oklch(65% 0.12 170);\n    --tui-green-4: #218f72;\n    --tui-green-4: oklch(60% 0.12 170);\n    --tui-green-5: #167d64;\n    --tui-green-5: oklch(55% 0.12 160);\n\n    /* Blue */\n    --tui-blue-1: #75c2d1;\n    --tui-blue-1: oklch(75% 0.11 215);\n    --tui-blue-2: #5bb0c2;\n    --tui-blue-2: oklch(70% 0.11 215);\n    --tui-blue-3: #3e9eb1;\n    --tui-blue-3: oklch(65% 0.11 215);\n    --tui-blue-4: #228a9f;\n    --tui-blue-4: oklch(60% 0.11 215);\n    --tui-blue-5: #13778b;\n    --tui-blue-5: oklch(55% 0.11 215);\n\n    /* Yellow */\n    --tui-yellow-1: #d9bd68;\n    --tui-yellow-1: oklch(80% 0.12 90);\n    --tui-yellow-2: #c8aa4d;\n    --tui-yellow-2: oklch(75% 0.12 90);\n    --tui-yellow-3: #b79930;\n    --tui-yellow-3: oklch(70% 0.12 90);\n    --tui-yellow-4: #a4861a;\n    --tui-yellow-4: oklch(65% 0.12 90);\n    --tui-yellow-5: #92730f;\n    --tui-yellow-5: oklch(60% 0.12 90);\n\n    /* Purple */\n    --tui-purple-1: #d594d7;\n    --tui-purple-1: oklch(75% 0.12 310);\n    --tui-purple-2: #c481c7;\n    --tui-purple-2: oklch(70% 0.12 310);\n    --tui-purple-3: #b36eb7;\n    --tui-purple-3: oklch(65% 0.12 310);\n    --tui-purple-4: #a15ca5;\n    --tui-purple-4: oklch(60% 0.12 310);\n    --tui-purple-5: #8f4994;\n    --tui-purple-5: oklch(55% 0.12 310);\n\n    /* Semantic colors */\n    --tui-accent-base-1: var(--tui-purple-1);\n    --tui-accent-base-2: var(--tui-purple-2);\n    --tui-accent-base-3: var(--tui-purple-3);\n    --tui-accent-base-4: var(--tui-purple-4);\n    --tui-accent-base-5: var(--tui-purple-5);\n    --tui-accent-1: var(--tui-accent-base-1);\n    --tui-accent-2: var(--tui-accent-base-2);\n    --tui-accent-3: var(--tui-accent-base-3);\n    --tui-accent-4: var(--tui-accent-base-4);\n    --tui-accent-5: var(--tui-accent-base-5);\n    --tui-danger: var(--tui-red-2);\n    --tui-success: var(--tui-green-2);\n    --tui-info: var(--tui-blue-2);\n    --tui-warning: var(--tui-yellow-2);\n    --tui-online: var(--tui-green-2);\n    --tui-dnd: var(--tui-red-2);\n    --tui-idle: var(--tui-yellow-2);\n    --tui-streaming: var(--tui-purple-2);\n    --tui-offline: var(--tui-text-4);\n\n    /* Surfaces and borders */\n    --tui-body-bg: var(--tui-bg-4);\n    --tui-panel-bg: var(--tui-bg-3);\n    --tui-panel-bg-raised: var(--tui-bg-2);\n    --tui-floating-bg: var(--tui-bg-3);\n    --tui-input-bg: var(--tui-bg-4);\n    --tui-border-light: var(--tui-hover);\n    --tui-border: var(--tui-active);\n    --tui-border-strong: rgb(255 255 255 / 0.18);\n    --tui-border-hover: var(--tui-accent-2);\n    --tui-button-border: rgb(255 255 255 / 0.1);\n\n    /* Effects */\n    --tui-panel-blur: 0px;\n    --tui-panel-mix: 100%;\n    --tui-background-image: none;\n    --tui-selection-bg: var(--tui-accent-3);\n    --tui-selection-text: var(--tui-text-0);\n\n    /* Compatibility aliases for projects migrated from the source theme */\n    --font: var(--tui-font);\n    --code-font: var(--tui-code-font);\n    --gap: var(--tui-gap);\n    --divider-thickness: var(--tui-divider-width);\n    --border-thickness: var(--tui-border-width);\n    --text-0: var(--tui-text-0);\n    --text-1: var(--tui-text-1);\n    --text-2: var(--tui-text-2);\n    --text-3: var(--tui-text-3);\n    --text-4: var(--tui-text-4);\n    --text-5: var(--tui-text-5);\n    --bg-1: var(--tui-bg-1);\n    --bg-2: var(--tui-bg-2);\n    --bg-3: var(--tui-bg-3);\n    --bg-4: var(--tui-bg-4);\n    --hover: var(--tui-hover);\n    --active: var(--tui-active);\n    --active-2: var(--tui-active-2);\n    --accent-1: var(--tui-accent-1);\n    --accent-2: var(--tui-accent-2);\n    --accent-3: var(--tui-accent-3);\n    --accent-4: var(--tui-accent-4);\n    --accent-5: var(--tui-accent-5);\n    --red-1: var(--tui-red-1);\n    --red-2: var(--tui-red-2);\n    --red-3: var(--tui-red-3);\n    --red-4: var(--tui-red-4);\n    --red-5: var(--tui-red-5);\n    --green-1: var(--tui-green-1);\n    --green-2: var(--tui-green-2);\n    --green-3: var(--tui-green-3);\n    --green-4: var(--tui-green-4);\n    --green-5: var(--tui-green-5);\n    --blue-1: var(--tui-blue-1);\n    --blue-2: var(--tui-blue-2);\n    --blue-3: var(--tui-blue-3);\n    --blue-4: var(--tui-blue-4);\n    --blue-5: var(--tui-blue-5);\n    --yellow-1: var(--tui-yellow-1);\n    --yellow-2: var(--tui-yellow-2);\n    --yellow-3: var(--tui-yellow-3);\n    --yellow-4: var(--tui-yellow-4);\n    --yellow-5: var(--tui-yellow-5);\n    --purple-1: var(--tui-purple-1);\n    --purple-2: var(--tui-purple-2);\n    --purple-3: var(--tui-purple-3);\n    --purple-4: var(--tui-purple-4);\n    --purple-5: var(--tui-purple-5);\n  }\n\n  [data-theme='light'] {\n    color-scheme: light;\n    --tui-text-0: #ffffff;\n    --tui-text-1: #151515;\n    --tui-text-2: #282828;\n    --tui-text-3: #424242;\n    --tui-text-4: #5f5f5f;\n    --tui-text-5: #6f6f6f;\n    --tui-bg-1: #d9d9d9;\n    --tui-bg-2: #e8e8e8;\n    --tui-bg-3: #f3f3f3;\n    --tui-bg-4: #fafafa;\n    --tui-bg-5: #ffffff;\n    --tui-hover: rgb(0 0 0 / 0.055);\n    --tui-active: rgb(0 0 0 / 0.1);\n    --tui-active-2: rgb(0 0 0 / 0.16);\n    --tui-body-bg: var(--tui-bg-4);\n    --tui-panel-bg: var(--tui-bg-5);\n    --tui-panel-bg-raised: var(--tui-bg-3);\n    --tui-floating-bg: var(--tui-bg-5);\n    --tui-input-bg: var(--tui-bg-5);\n    --tui-border-light: rgb(0 0 0 / 0.06);\n    --tui-border: rgb(0 0 0 / 0.12);\n    --tui-border-strong: rgb(0 0 0 / 0.2);\n    --tui-button-border: rgb(0 0 0 / 0.13);\n    --tui-shadow-sm: 0 2px 0 rgb(0 0 0 / 0.08);\n    --tui-shadow: 0 8px 24px rgb(0 0 0 / 0.12);\n    --tui-shadow-lg: 0 18px 60px rgb(0 0 0 / 0.18);\n\n    /* Darker semantic colors preserve contrast on light surfaces. */\n    --tui-accent-1: var(--tui-accent-base-5);\n    --tui-accent-2: var(--tui-accent-base-5);\n    --tui-accent-3: var(--tui-accent-base-5);\n    --tui-accent-4: color-mix(in srgb, var(--tui-accent-base-5), black 12%);\n    --tui-accent-5: color-mix(in srgb, var(--tui-accent-base-5), black 24%);\n    --tui-danger: var(--tui-red-5);\n    --tui-success: var(--tui-green-5);\n    --tui-info: var(--tui-blue-5);\n    --tui-warning: var(--tui-yellow-5);\n    --tui-online: var(--tui-green-5);\n    --tui-dnd: var(--tui-red-5);\n    --tui-idle: var(--tui-yellow-5);\n    --tui-streaming: var(--tui-purple-5);\n  }\n\n  [data-accent='blue'] {\n    --tui-accent-base-1: var(--tui-blue-1);\n    --tui-accent-base-2: var(--tui-blue-2);\n    --tui-accent-base-3: var(--tui-blue-3);\n    --tui-accent-base-4: var(--tui-blue-4);\n    --tui-accent-base-5: var(--tui-blue-5);\n  }\n\n  [data-accent='green'] {\n    --tui-accent-base-1: var(--tui-green-1);\n    --tui-accent-base-2: var(--tui-green-2);\n    --tui-accent-base-3: var(--tui-green-3);\n    --tui-accent-base-4: var(--tui-green-4);\n    --tui-accent-base-5: var(--tui-green-5);\n  }\n\n  [data-accent='yellow'] {\n    --tui-accent-base-1: var(--tui-yellow-1);\n    --tui-accent-base-2: var(--tui-yellow-2);\n    --tui-accent-base-3: var(--tui-yellow-3);\n    --tui-accent-base-4: var(--tui-yellow-4);\n    --tui-accent-base-5: var(--tui-yellow-5);\n  }\n\n  [data-accent='red'] {\n    --tui-accent-base-1: var(--tui-red-1);\n    --tui-accent-base-2: var(--tui-red-2);\n    --tui-accent-base-3: var(--tui-red-3);\n    --tui-accent-base-4: var(--tui-red-4);\n    --tui-accent-base-5: var(--tui-red-5);\n  }\n\n  [data-rounded='true'] {\n    --tui-panel-radius: var(--tui-radius-lg);\n  }\n\n  [data-translucent='true'] {\n    --tui-panel-mix: 78%;\n    --tui-panel-blur: 12px;\n  }\n\n  [data-density='compact'] {\n    --tui-gap: 0.5rem;\n    --tui-control-height: 2.125rem;\n    --tui-control-height-sm: 1.75rem;\n    --tui-control-height-lg: 2.625rem;\n  }\n}\n\n/* ========================================================================== */\n/* BASE                                                                       */\n/* ========================================================================== */\n\n@layer base {\n  html {\n    background: var(--tui-bg-5);\n  }\n\n  body {\n    background-color: var(--tui-body-bg);\n    background-image: var(--tui-background-image);\n    background-position: center;\n    background-size: cover;\n    color: var(--tui-text-3);\n    font-family: var(--tui-font);\n    font-weight: var(--tui-font-weight);\n    letter-spacing: var(--tui-letter-spacing);\n    line-height: var(--tui-line-height);\n    text-rendering: optimizeLegibility;\n  }\n\n  ::selection {\n    background: var(--tui-selection-bg);\n    color: var(--tui-selection-text);\n  }\n\n  :focus-visible {\n    outline: 2px solid var(--tui-accent-2);\n    outline-offset: 2px;\n  }\n\n  a {\n    color: var(--tui-accent-1);\n    text-decoration-color: color-mix(in srgb, currentColor, transparent 55%);\n    text-underline-offset: 0.2em;\n  }\n\n  a:hover {\n    color: var(--tui-text-1);\n    text-decoration-color: var(--tui-accent-2);\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    color: var(--tui-text-2);\n    font-weight: var(--tui-font-weight-bold);\n    letter-spacing: -0.07ch;\n    line-height: 1.2;\n    text-wrap: balance;\n  }\n\n  h1 {\n    font-size: clamp(1.75rem, 4vw, 3.5rem);\n  }\n\n  h2 {\n    font-size: clamp(1.4rem, 2.5vw, 2.2rem);\n  }\n\n  h3 {\n    font-size: clamp(1.15rem, 2vw, 1.5rem);\n  }\n\n  small,\n  .tui-muted {\n    color: var(--tui-text-5);\n  }\n\n  strong,\n  b {\n    color: var(--tui-text-2);\n    font-weight: var(--tui-font-weight-bold);\n  }\n\n  code,\n  kbd,\n  samp,\n  pre {\n    font-family: var(--tui-code-font);\n  }\n\n  code:not(pre code) {\n    background: var(--tui-bg-2);\n    border: 1px solid var(--tui-border);\n    color: var(--tui-accent-1);\n    padding: 0.1em 0.35em;\n  }\n\n  kbd {\n    background: var(--tui-bg-2);\n    border: 1px solid var(--tui-border-strong);\n    box-shadow: 0 2px 0 var(--tui-bg-5);\n    color: var(--tui-text-2);\n    font-size: 0.85em;\n    padding: 0.12em 0.4em;\n  }\n\n  pre {\n    background: var(--tui-bg-5);\n    border: var(--tui-border-width) solid var(--tui-border);\n    color: var(--tui-text-3);\n    max-width: 100%;\n    overflow: auto;\n    padding: var(--tui-space-4);\n    tab-size: 2;\n  }\n\n  hr {\n    border: 0;\n    border-top: var(--tui-border-width) solid var(--tui-border);\n    margin-block: var(--tui-space-6);\n  }\n\n  blockquote {\n    background: var(--tui-hover);\n    border-left: var(--tui-divider-width) solid var(--tui-accent-2);\n    color: var(--tui-text-3);\n    padding: var(--tui-space-3) var(--tui-space-4);\n  }\n\n  mark {\n    background: var(--tui-warning);\n    color: var(--tui-text-0);\n    padding-inline: 0.2em;\n  }\n}\n\n/* ========================================================================== */\n/* LAYOUT                                                                     */\n/* ========================================================================== */\n\n@layer layout {\n  .tui-container {\n    inline-size: min(100% - 2rem, var(--tui-content-width));\n    margin-inline: auto;\n  }\n\n  .tui-stack {\n    display: flex;\n    flex-direction: column;\n    gap: var(--tui-stack-gap, var(--tui-gap));\n  }\n\n  .tui-cluster {\n    align-items: center;\n    display: flex;\n    flex-wrap: wrap;\n    gap: var(--tui-cluster-gap, var(--tui-gap));\n  }\n\n  .tui-split {\n    align-items: center;\n    display: flex;\n    flex-wrap: wrap;\n    gap: var(--tui-gap);\n    justify-content: space-between;\n  }\n\n  .tui-grid {\n    display: grid;\n    gap: var(--tui-grid-gap, var(--tui-gap));\n    grid-template-columns: repeat(\n      var(--tui-grid-columns, auto-fit),\n      minmax(min(100%, var(--tui-grid-min, 16rem)), 1fr)\n    );\n  }\n\n  .tui-grid--2 {\n    --tui-grid-columns: 2;\n  }\n\n  .tui-grid--3 {\n    --tui-grid-columns: 3;\n  }\n\n  .tui-grid--4 {\n    --tui-grid-columns: 4;\n  }\n\n  .tui-app {\n    display: grid;\n    gap: var(--tui-gap);\n    grid-template-areas:\n      'header header'\n      'sidebar main';\n    grid-template-columns: var(--tui-sidebar-width) minmax(0, 1fr);\n    grid-template-rows: var(--tui-header-height) minmax(0, 1fr);\n    min-height: 100dvh;\n    padding: var(--tui-gap);\n  }\n\n  .tui-app__header {\n    grid-area: header;\n  }\n\n  .tui-app__sidebar {\n    grid-area: sidebar;\n    min-height: 0;\n  }\n\n  .tui-app__main {\n    grid-area: main;\n    min-width: 0;\n  }\n\n  .tui-app--rail {\n    grid-template-columns: var(--tui-rail-width) minmax(0, 1fr);\n  }\n\n  .tui-page {\n    display: grid;\n    gap: var(--tui-gap);\n    grid-template-columns: minmax(0, 1fr);\n  }\n\n  .tui-page--aside {\n    grid-template-columns: minmax(0, 1fr) minmax(15rem, 22rem);\n  }\n\n  .tui-section {\n    padding-block: var(--tui-space-8);\n  }\n\n  .tui-section__header {\n    align-items: end;\n    display: flex;\n    flex-wrap: wrap;\n    gap: var(--tui-space-3) var(--tui-space-6);\n    justify-content: space-between;\n    margin-bottom: var(--tui-space-5);\n  }\n\n  .tui-scroll-area {\n    min-height: 0;\n    overflow: auto;\n    scrollbar-color: var(--tui-bg-1) transparent;\n    scrollbar-width: thin;\n  }\n\n  @media (max-width: 60rem) {\n    .tui-app,\n    .tui-app--rail {\n      grid-template-areas:\n        'header'\n        'main';\n      grid-template-columns: minmax(0, 1fr);\n    }\n\n    .tui-app__sidebar {\n      display: none;\n    }\n\n    .tui-page--aside {\n      grid-template-columns: minmax(0, 1fr);\n    }\n\n    .tui-grid--4 {\n      --tui-grid-columns: 2;\n    }\n  }\n\n  @media (max-width: 40rem) {\n    .tui-grid--2,\n    .tui-grid--3,\n    .tui-grid--4 {\n      --tui-grid-columns: 1;\n    }\n\n    .tui-app {\n      padding: var(--tui-space-2);\n    }\n  }\n}\n\n/* ========================================================================== */\n/* COMPONENTS                                                                 */\n/* ========================================================================== */\n\n@layer components {\n  /* Panel ------------------------------------------------------------------ */\n  .tui-panel {\n    background: color-mix(\n      in srgb,\n      var(--tui-panel-bg) var(--tui-panel-mix),\n      transparent\n    );\n    border: var(--tui-border-width) solid var(--tui-border);\n    border-radius: var(--tui-panel-radius);\n    min-width: 0;\n    position: relative;\n    transition:\n      border-color var(--tui-transition),\n      background-color var(--tui-transition),\n      transform var(--tui-transition);\n    backdrop-filter: blur(var(--tui-panel-blur));\n  }\n\n  .tui-panel:hover {\n    border-color: var(--tui-border-hover);\n  }\n\n  .tui-panel--raised {\n    background: var(--tui-panel-bg-raised);\n    box-shadow: var(--tui-shadow);\n  }\n\n  .tui-panel--interactive:hover {\n    transform: translateY(-2px);\n  }\n\n  .tui-panel__header,\n  .tui-panel__body,\n  .tui-panel__footer {\n    padding: var(--tui-space-4);\n  }\n\n  .tui-panel__header {\n    align-items: center;\n    border-bottom: var(--tui-border-width) solid var(--tui-border);\n    display: flex;\n    gap: var(--tui-gap);\n    justify-content: space-between;\n  }\n\n  .tui-panel__footer {\n    border-top: var(--tui-border-width) solid var(--tui-border);\n  }\n\n  .tui-panel__title,\n  .tui-label-title {\n    color: var(--tui-text-2);\n    font-size: 0.78rem;\n    font-weight: var(--tui-font-weight-medium);\n    letter-spacing: 0.08em;\n    text-transform: uppercase;\n  }\n\n  .tui-panel[data-label]::before {\n    background: var(--tui-body-bg);\n    color: var(--tui-text-5);\n    content: '[' attr(data-label) ']';\n    font-size: 0.68rem;\n    font-weight: var(--tui-font-weight-medium);\n    left: var(--tui-space-3);\n    line-height: 1;\n    padding-inline: var(--tui-space-1);\n    position: absolute;\n    text-transform: uppercase;\n    top: -0.43rem;\n    z-index: 1;\n  }\n\n  /* Top bar ---------------------------------------------------------------- */\n  .tui-topbar {\n    align-items: center;\n    background: var(--tui-panel-bg);\n    border: var(--tui-border-width) solid var(--tui-border);\n    border-radius: var(--tui-panel-radius);\n    display: flex;\n    gap: var(--tui-gap);\n    min-height: var(--tui-header-height);\n    padding-inline: var(--tui-space-3);\n  }\n\n  .tui-topbar__brand {\n    align-items: center;\n    color: var(--tui-text-1);\n    display: inline-flex;\n    font-weight: var(--tui-font-weight-bold);\n    gap: var(--tui-space-2);\n    margin-right: auto;\n    text-decoration: none;\n  }\n\n  .tui-topbar__brand::before {\n    color: var(--tui-accent-2);\n    content: '>';\n  }\n\n  /* Sidebar and navigation ------------------------------------------------- */\n  .tui-sidebar {\n    background: var(--tui-panel-bg);\n    border: var(--tui-border-width) solid var(--tui-border);\n    border-radius: var(--tui-panel-radius);\n    display: flex;\n    flex-direction: column;\n    min-height: 100%;\n    overflow: hidden;\n  }\n\n  .tui-sidebar__header,\n  .tui-sidebar__footer {\n    padding: var(--tui-space-3);\n  }\n\n  .tui-sidebar__header {\n    border-bottom: var(--tui-border-width) solid var(--tui-border);\n  }\n\n  .tui-sidebar__footer {\n    border-top: var(--tui-border-width) solid var(--tui-border);\n    margin-top: auto;\n  }\n\n  .tui-nav {\n    display: grid;\n    gap: var(--tui-space-1);\n    padding: var(--tui-space-2);\n  }\n\n  .tui-nav__group + .tui-nav__group {\n    border-top: 1px solid var(--tui-border);\n    margin-top: var(--tui-space-2);\n    padding-top: var(--tui-space-3);\n  }\n\n  .tui-nav__label {\n    color: var(--tui-text-5);\n    display: block;\n    font-size: 0.7rem;\n    font-weight: var(--tui-font-weight-medium);\n    margin: var(--tui-space-2);\n    text-transform: uppercase;\n  }\n\n  .tui-nav__link {\n    align-items: center;\n    border: 1px solid transparent;\n    color: var(--tui-text-4);\n    display: flex;\n    gap: var(--tui-space-2);\n    min-height: var(--tui-control-height-sm);\n    padding: var(--tui-space-2) var(--tui-space-3);\n    text-decoration: none;\n    transition:\n      background var(--tui-transition),\n      border-color var(--tui-transition),\n      color var(--tui-transition);\n  }\n\n  .tui-nav__link:hover {\n    background: var(--tui-hover);\n    border-color: var(--tui-border);\n    color: var(--tui-text-2);\n  }\n\n  .tui-nav__link[aria-current='page'],\n  .tui-nav__link.is-active {\n    background: var(--tui-active);\n    border-color: var(--tui-accent-3);\n    color: var(--tui-text-1);\n  }\n\n  .tui-nav__link[aria-current='page']::before,\n  .tui-nav__link.is-active::before {\n    color: var(--tui-accent-2);\n    content: '>';\n  }\n\n  /* Buttons ---------------------------------------------------------------- */\n  .tui-btn {\n    align-items: center;\n    appearance: none;\n    background: var(--tui-bg-2);\n    border: 1px solid var(--tui-button-border);\n    border-radius: var(--tui-radius-sm);\n    color: var(--tui-text-2);\n    display: inline-flex;\n    font-weight: var(--tui-font-weight-medium);\n    gap: var(--tui-space-2);\n    justify-content: center;\n    min-height: var(--tui-control-height);\n    padding: 0 var(--tui-space-4);\n    text-decoration: none;\n    transition:\n      background var(--tui-transition),\n      border-color var(--tui-transition),\n      color var(--tui-transition),\n      transform var(--tui-duration-fast) var(--tui-ease);\n    user-select: none;\n  }\n\n  .tui-btn:hover {\n    background: var(--tui-bg-1);\n    border-color: var(--tui-border-hover);\n    color: var(--tui-text-1);\n  }\n\n  .tui-btn:active {\n    background: var(--tui-bg-4);\n    transform: translateY(1px);\n  }\n\n  .tui-btn:disabled,\n  .tui-btn[aria-disabled='true'] {\n    cursor: not-allowed;\n    opacity: 0.45;\n    pointer-events: none;\n  }\n\n  .tui-btn--primary {\n    background: var(--tui-accent-3);\n    border-color: var(--tui-accent-2);\n    color: var(--tui-text-0);\n  }\n\n  .tui-btn--primary:hover {\n    background: var(--tui-accent-4);\n    border-color: var(--tui-accent-1);\n    color: var(--tui-text-0);\n  }\n\n  .tui-btn--danger {\n    background: var(--tui-red-3);\n    border-color: var(--tui-red-2);\n    color: var(--tui-text-0);\n  }\n\n  .tui-btn--ghost {\n    background: transparent;\n  }\n\n  .tui-btn--sm {\n    min-height: var(--tui-control-height-sm);\n    padding-inline: var(--tui-space-3);\n  }\n\n  .tui-btn--lg {\n    min-height: var(--tui-control-height-lg);\n    padding-inline: var(--tui-space-5);\n  }\n\n  .tui-btn--icon {\n    aspect-ratio: 1;\n    padding: 0;\n  }\n\n  /* Theme controls --------------------------------------------------------- */\n  .tui-theme-toggle {\n    align-items: center;\n    display: inline-flex;\n    gap: var(--tui-space-2);\n    justify-content: center;\n    min-width: 8.5rem;\n    white-space: nowrap;\n  }\n\n  .tui-theme-toggle__icon {\n    color: var(--tui-accent-1);\n    display: inline-block;\n    font-weight: var(--tui-font-weight-bold);\n    min-width: 1.8rem;\n    text-align: center;\n  }\n\n  /* Forms ------------------------------------------------------------------ */\n  .tui-field {\n    display: grid;\n    gap: var(--tui-space-2);\n  }\n\n  .tui-field__label {\n    color: var(--tui-text-2);\n    font-size: 0.82rem;\n    font-weight: var(--tui-font-weight-medium);\n  }\n\n  .tui-field__hint,\n  .tui-field__error {\n    font-size: 0.75rem;\n  }\n\n  .tui-field__hint {\n    color: var(--tui-text-5);\n  }\n\n  .tui-field__error {\n    color: var(--tui-danger);\n  }\n\n  .tui-input,\n  .tui-select,\n  .tui-textarea {\n    appearance: none;\n    background: var(--tui-input-bg);\n    border: 1px solid var(--tui-border-strong);\n    border-radius: var(--tui-radius-sm);\n    color: var(--tui-text-2);\n    inline-size: 100%;\n    min-height: var(--tui-control-height);\n    padding: var(--tui-space-2) var(--tui-space-3);\n    transition:\n      border-color var(--tui-transition),\n      box-shadow var(--tui-transition),\n      background var(--tui-transition);\n  }\n\n  .tui-input::placeholder,\n  .tui-textarea::placeholder {\n    color: var(--tui-text-5);\n  }\n\n  .tui-input:hover,\n  .tui-select:hover,\n  .tui-textarea:hover {\n    border-color: var(--tui-text-4);\n  }\n\n  .tui-input:focus,\n  .tui-select:focus,\n  .tui-textarea:focus {\n    border-color: var(--tui-accent-2);\n    box-shadow: var(--tui-ring);\n    outline: none;\n  }\n\n  .tui-input[aria-invalid='true'],\n  .tui-select[aria-invalid='true'],\n  .tui-textarea[aria-invalid='true'] {\n    border-color: var(--tui-danger);\n  }\n\n  .tui-select {\n    background-image:\n      linear-gradient(45deg, transparent 50%, var(--tui-text-4) 50%),\n      linear-gradient(135deg, var(--tui-text-4) 50%, transparent 50%);\n    background-position:\n      calc(100% - 0.9rem) 50%,\n      calc(100% - 0.65rem) 50%;\n    background-repeat: no-repeat;\n    background-size: 0.25rem 0.25rem;\n    padding-right: 2rem;\n  }\n\n  .tui-check,\n  .tui-radio {\n    accent-color: var(--tui-accent-3);\n    block-size: 1rem;\n    inline-size: 1rem;\n  }\n\n  .tui-control {\n    align-items: center;\n    display: inline-flex;\n    gap: var(--tui-space-2);\n  }\n\n  .tui-input-group {\n    display: flex;\n  }\n\n  .tui-input-group > * {\n    border-radius: 0;\n  }\n\n  .tui-input-group > :first-child {\n    border-bottom-left-radius: var(--tui-radius-sm);\n    border-top-left-radius: var(--tui-radius-sm);\n  }\n\n  .tui-input-group > :last-child {\n    border-bottom-right-radius: var(--tui-radius-sm);\n    border-top-right-radius: var(--tui-radius-sm);\n  }\n\n  .tui-input-group > * + * {\n    margin-left: -1px;\n  }\n\n  /* Cards and metrics ------------------------------------------------------ */\n  .tui-card {\n    background: var(--tui-panel-bg);\n    border: var(--tui-border-width) solid var(--tui-border);\n    border-radius: var(--tui-panel-radius);\n    padding: var(--tui-space-4);\n    transition:\n      border-color var(--tui-transition),\n      transform var(--tui-transition);\n  }\n\n  .tui-card:hover {\n    border-color: var(--tui-border-hover);\n  }\n\n  .tui-card--interactive:hover {\n    transform: translateY(-2px);\n  }\n\n  .tui-card__eyebrow {\n    color: var(--tui-text-5);\n    font-size: 0.72rem;\n    text-transform: uppercase;\n  }\n\n  .tui-card__title {\n    color: var(--tui-text-2);\n    font-size: 1rem;\n    font-weight: var(--tui-font-weight-bold);\n  }\n\n  .tui-metric {\n    display: grid;\n    gap: var(--tui-space-2);\n  }\n\n  .tui-metric__value {\n    color: var(--tui-text-1);\n    font-size: clamp(1.7rem, 4vw, 2.8rem);\n    font-weight: var(--tui-font-weight-bold);\n    line-height: 1;\n  }\n\n  .tui-metric__label {\n    color: var(--tui-text-5);\n    font-size: 0.75rem;\n    text-transform: uppercase;\n  }\n\n  .tui-metric__delta {\n    font-size: 0.78rem;\n  }\n\n  .tui-metric__delta--up {\n    color: var(--tui-success);\n  }\n\n  .tui-metric__delta--down {\n    color: var(--tui-danger);\n  }\n\n  /* Badges and statuses ---------------------------------------------------- */\n  .tui-badge {\n    align-items: center;\n    background: var(--tui-bg-2);\n    border: 1px solid var(--tui-border);\n    color: var(--tui-text-3);\n    display: inline-flex;\n    font-size: 0.72rem;\n    font-weight: var(--tui-font-weight-medium);\n    gap: var(--tui-space-1);\n    line-height: 1;\n    min-height: 1.5rem;\n    padding: 0 var(--tui-space-2);\n    text-transform: uppercase;\n  }\n\n  .tui-badge--accent {\n    background: color-mix(in srgb, var(--tui-accent-3), transparent 78%);\n    border-color: var(--tui-accent-3);\n    color: var(--tui-accent-1);\n  }\n\n  .tui-badge--success {\n    background: color-mix(in srgb, var(--tui-success), transparent 82%);\n    border-color: var(--tui-success);\n    color: var(--tui-green-1);\n  }\n\n  .tui-badge--warning {\n    background: color-mix(in srgb, var(--tui-warning), transparent 82%);\n    border-color: var(--tui-warning);\n    color: var(--tui-yellow-1);\n  }\n\n  .tui-badge--danger {\n    background: color-mix(in srgb, var(--tui-danger), transparent 82%);\n    border-color: var(--tui-danger);\n    color: var(--tui-red-1);\n  }\n\n  .tui-status {\n    align-items: center;\n    display: inline-flex;\n    gap: var(--tui-space-2);\n  }\n\n  .tui-status::before {\n    background: var(--tui-offline);\n    block-size: 0.55rem;\n    content: '';\n    inline-size: 0.55rem;\n  }\n\n  .tui-status--online::before {\n    background: var(--tui-online);\n  }\n\n  .tui-status--idle::before {\n    background: var(--tui-idle);\n  }\n\n  .tui-status--dnd::before {\n    background: var(--tui-dnd);\n  }\n\n  .tui-status--streaming::before {\n    background: var(--tui-streaming);\n  }\n\n  /* Alerts ----------------------------------------------------------------- */\n  .tui-alert {\n    --tui-alert-color: var(--tui-info);\n    background: color-mix(in srgb, var(--tui-alert-color), transparent 90%);\n    border: 1px solid color-mix(in srgb, var(--tui-alert-color), transparent 35%);\n    border-left-width: var(--tui-divider-width);\n    color: var(--tui-text-3);\n    padding: var(--tui-space-3) var(--tui-space-4);\n  }\n\n  .tui-alert__title {\n    color: color-mix(in srgb, var(--tui-alert-color), white 25%);\n    font-weight: var(--tui-font-weight-bold);\n  }\n\n  .tui-alert--success {\n    --tui-alert-color: var(--tui-success);\n  }\n\n  .tui-alert--warning {\n    --tui-alert-color: var(--tui-warning);\n  }\n\n  .tui-alert--danger {\n    --tui-alert-color: var(--tui-danger);\n  }\n\n  /* Tables ----------------------------------------------------------------- */\n  .tui-table-wrap {\n    border: var(--tui-border-width) solid var(--tui-border);\n    overflow: auto;\n  }\n\n  .tui-table {\n    border-collapse: collapse;\n    inline-size: 100%;\n    min-width: 42rem;\n  }\n\n  .tui-table caption {\n    color: var(--tui-text-5);\n    padding: var(--tui-space-3);\n    text-align: left;\n  }\n\n  .tui-table th,\n  .tui-table td {\n    border-bottom: 1px solid var(--tui-border);\n    padding: var(--tui-space-3) var(--tui-space-4);\n    text-align: left;\n    vertical-align: middle;\n  }\n\n  .tui-table th {\n    background: var(--tui-bg-2);\n    color: var(--tui-text-2);\n    font-size: 0.72rem;\n    font-weight: var(--tui-font-weight-medium);\n    letter-spacing: 0.05em;\n    position: sticky;\n    text-transform: uppercase;\n    top: 0;\n    z-index: 1;\n  }\n\n  .tui-table tbody tr:hover {\n    background: var(--tui-hover);\n  }\n\n  .tui-table tbody tr:last-child td {\n    border-bottom: 0;\n  }\n\n  /* Tabs ------------------------------------------------------------------- */\n  .tui-tabs {\n    border-bottom: var(--tui-border-width) solid var(--tui-border);\n    display: flex;\n    gap: var(--tui-space-1);\n    overflow-x: auto;\n  }\n\n  .tui-tab {\n    background: transparent;\n    border: 0;\n    border-bottom: var(--tui-border-width) solid transparent;\n    color: var(--tui-text-4);\n    margin-bottom: calc(var(--tui-border-width) * -1);\n    min-height: var(--tui-control-height);\n    padding-inline: var(--tui-space-4);\n    white-space: nowrap;\n  }\n\n  .tui-tab:hover {\n    background: var(--tui-hover);\n    color: var(--tui-text-2);\n  }\n\n  .tui-tab[aria-selected='true'],\n  .tui-tab.is-active {\n    border-bottom-color: var(--tui-accent-2);\n    color: var(--tui-text-1);\n  }\n\n  /* Breadcrumb and pagination -------------------------------------------- */\n  .tui-breadcrumb,\n  .tui-pagination {\n    align-items: center;\n    display: flex;\n    flex-wrap: wrap;\n    gap: var(--tui-space-1);\n  }\n\n  .tui-breadcrumb a {\n    color: var(--tui-text-4);\n    text-decoration: none;\n  }\n\n  .tui-breadcrumb > * + *::before {\n    color: var(--tui-text-5);\n    content: '/';\n    margin-right: var(--tui-space-1);\n  }\n\n  .tui-pagination a,\n  .tui-pagination button {\n    align-items: center;\n    background: var(--tui-bg-2);\n    border: 1px solid var(--tui-border);\n    color: var(--tui-text-3);\n    display: inline-flex;\n    justify-content: center;\n    min-height: var(--tui-control-height-sm);\n    min-width: var(--tui-control-height-sm);\n    padding-inline: var(--tui-space-2);\n    text-decoration: none;\n  }\n\n  .tui-pagination [aria-current='page'] {\n    background: var(--tui-accent-3);\n    border-color: var(--tui-accent-2);\n    color: var(--tui-text-0);\n  }\n\n  /* Progress and skeleton -------------------------------------------------- */\n  .tui-progress {\n    background: var(--tui-bg-1);\n    block-size: 0.65rem;\n    border: 1px solid var(--tui-border);\n    overflow: hidden;\n  }\n\n  .tui-progress__bar {\n    background: var(--tui-accent-3);\n    block-size: 100%;\n    inline-size: var(--tui-progress, 0%);\n    transition: inline-size var(--tui-duration-slow) var(--tui-ease);\n  }\n\n  .tui-skeleton {\n    animation: tui-pulse 1.4s ease-in-out infinite;\n    background: linear-gradient(\n      90deg,\n      var(--tui-bg-2),\n      var(--tui-bg-1),\n      var(--tui-bg-2)\n    );\n    background-size: 200% 100%;\n    min-height: 1em;\n  }\n\n  @keyframes tui-pulse {\n    from {\n      background-position: 200% 0;\n    }\n    to {\n      background-position: -200% 0;\n    }\n  }\n\n  /* Terminal --------------------------------------------------------------- */\n  .tui-terminal {\n    background: var(--tui-bg-5);\n    border: var(--tui-border-width) solid var(--tui-border);\n    color: var(--tui-text-3);\n    overflow: hidden;\n  }\n\n  .tui-terminal__bar {\n    align-items: center;\n    background: var(--tui-bg-2);\n    border-bottom: 1px solid var(--tui-border);\n    display: flex;\n    gap: var(--tui-space-2);\n    justify-content: space-between;\n    min-height: var(--tui-control-height);\n    padding-inline: var(--tui-space-3);\n  }\n\n  .tui-terminal__title {\n    color: var(--tui-text-4);\n    font-size: 0.75rem;\n  }\n\n  .tui-terminal__body {\n    font-family: var(--tui-code-font);\n    overflow: auto;\n    padding: var(--tui-space-4);\n    white-space: pre-wrap;\n  }\n\n  .tui-prompt::before {\n    color: var(--tui-accent-2);\n    content: '$ ';\n  }\n\n  .tui-command::before {\n    color: var(--tui-accent-2);\n    content: '> ';\n  }\n\n  /* List ------------------------------------------------------------------- */\n  .tui-list {\n    display: grid;\n  }\n\n  .tui-list__item {\n    align-items: center;\n    border-bottom: 1px solid var(--tui-border);\n    display: flex;\n    gap: var(--tui-space-3);\n    min-height: var(--tui-control-height-lg);\n    padding: var(--tui-space-3);\n    transition: background var(--tui-transition);\n  }\n\n  .tui-list__item:hover {\n    background: var(--tui-hover);\n  }\n\n  .tui-list__item:last-child {\n    border-bottom: 0;\n  }\n\n  /* Avatar ----------------------------------------------------------------- */\n  .tui-avatar {\n    align-items: center;\n    background: var(--tui-bg-1);\n    border: 1px solid var(--tui-border-strong);\n    color: var(--tui-text-2);\n    display: inline-flex;\n    flex: 0 0 auto;\n    font-weight: var(--tui-font-weight-bold);\n    height: var(--tui-avatar-size, 2.5rem);\n    justify-content: center;\n    overflow: hidden;\n    width: var(--tui-avatar-size, 2.5rem);\n  }\n\n  .tui-avatar img {\n    height: 100%;\n    object-fit: cover;\n    width: 100%;\n  }\n\n  /* Modal/dialog ----------------------------------------------------------- */\n  .tui-dialog {\n    background: var(--tui-floating-bg);\n    border: var(--tui-border-width) solid var(--tui-border-hover);\n    box-shadow: var(--tui-shadow-lg);\n    color: var(--tui-text-3);\n    max-height: min(85dvh, 50rem);\n    max-width: min(42rem, calc(100vw - 2rem));\n    padding: 0;\n    width: 100%;\n  }\n\n  .tui-dialog::backdrop {\n    backdrop-filter: blur(3px);\n    background: rgb(0 0 0 / 0.66);\n  }\n\n  /* Dropdown --------------------------------------------------------------- */\n  .tui-menu {\n    background: var(--tui-floating-bg);\n    border: var(--tui-border-width) solid var(--tui-border);\n    box-shadow: var(--tui-shadow);\n    display: grid;\n    gap: var(--tui-space-1);\n    min-width: 12rem;\n    padding: var(--tui-space-2);\n  }\n\n  .tui-menu__item {\n    background: transparent;\n    border: 1px solid transparent;\n    color: var(--tui-text-3);\n    display: flex;\n    gap: var(--tui-space-2);\n    padding: var(--tui-space-2) var(--tui-space-3);\n    text-decoration: none;\n    width: 100%;\n  }\n\n  .tui-menu__item:hover {\n    background: var(--tui-hover);\n    border-color: var(--tui-border);\n    color: var(--tui-text-1);\n  }\n\n  /* Empty state ------------------------------------------------------------ */\n  .tui-empty {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    gap: var(--tui-space-3);\n    justify-content: center;\n    min-height: 14rem;\n    padding: var(--tui-space-8);\n    text-align: center;\n  }\n\n  .tui-empty__icon {\n    color: var(--tui-accent-2);\n    font-size: 2rem;\n  }\n\n  /* Divider ---------------------------------------------------------------- */\n  .tui-divider {\n    align-items: center;\n    color: var(--tui-text-5);\n    display: flex;\n    font-size: 0.7rem;\n    gap: var(--tui-space-3);\n    text-transform: uppercase;\n  }\n\n  .tui-divider::before,\n  .tui-divider::after {\n    border-top: 1px solid var(--tui-border);\n    content: '';\n    flex: 1;\n  }\n\n  /* Message/highlight blocks ---------------------------------------------- */\n  .tui-message {\n    border-left: var(--tui-divider-width) solid transparent;\n    padding: var(--tui-space-3) var(--tui-space-4);\n    transition: background var(--tui-transition);\n  }\n\n  .tui-message:hover {\n    background: var(--tui-hover);\n  }\n\n  .tui-message--mention {\n    background: linear-gradient(\n      to right,\n      color-mix(in srgb, var(--tui-accent-2), transparent 90%) 40%,\n      transparent\n    );\n    border-left-color: var(--tui-accent-2);\n  }\n\n  .tui-message--reply {\n    background: linear-gradient(\n      to right,\n      color-mix(in srgb, var(--tui-text-3), transparent 90%) 40%,\n      transparent\n    );\n    border-left-color: var(--tui-text-4);\n  }\n\n  /* Tooltip ---------------------------------------------------------------- */\n  .tui-tooltip {\n    position: relative;\n  }\n\n  .tui-tooltip::after {\n    background: var(--tui-floating-bg);\n    border: 1px solid var(--tui-border-hover);\n    bottom: calc(100% + 0.5rem);\n    color: var(--tui-text-2);\n    content: attr(data-tooltip);\n    font-size: 0.72rem;\n    left: 50%;\n    opacity: 0;\n    padding: var(--tui-space-2) var(--tui-space-3);\n    pointer-events: none;\n    position: absolute;\n    transform: translate(-50%, 0.25rem);\n    transition:\n      opacity var(--tui-transition),\n      transform var(--tui-transition);\n    white-space: nowrap;\n    z-index: 20;\n  }\n\n  .tui-tooltip:hover::after,\n  .tui-tooltip:focus-visible::after {\n    opacity: 1;\n    transform: translate(-50%, 0);\n  }\n}\n\n/* ========================================================================== */\n/* UTILITIES                                                                  */\n/* ========================================================================== */\n\n@layer utilities {\n  .tui-sr-only {\n    clip: rect(0, 0, 0, 0);\n    clip-path: inset(50%);\n    height: 1px;\n    overflow: hidden;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n  }\n\n  .tui-hidden {\n    display: none !important;\n  }\n\n  .tui-block {\n    display: block;\n  }\n\n  .tui-flex {\n    display: flex;\n  }\n\n  .tui-inline-flex {\n    display: inline-flex;\n  }\n\n  .tui-grid-display {\n    display: grid;\n  }\n\n  .tui-grow {\n    flex: 1 1 auto;\n  }\n\n  .tui-shrink-0 {\n    flex-shrink: 0;\n  }\n\n  .tui-items-center {\n    align-items: center;\n  }\n\n  .tui-justify-between {\n    justify-content: space-between;\n  }\n\n  .tui-justify-center {\n    justify-content: center;\n  }\n\n  .tui-wrap {\n    flex-wrap: wrap;\n  }\n\n  .tui-gap-1 {\n    gap: var(--tui-space-1);\n  }\n\n  .tui-gap-2 {\n    gap: var(--tui-space-2);\n  }\n\n  .tui-gap-3 {\n    gap: var(--tui-space-3);\n  }\n\n  .tui-gap-4 {\n    gap: var(--tui-space-4);\n  }\n\n  .tui-gap-6 {\n    gap: var(--tui-space-6);\n  }\n\n  .tui-p-0 {\n    padding: 0;\n  }\n\n  .tui-p-2 {\n    padding: var(--tui-space-2);\n  }\n\n  .tui-p-3 {\n    padding: var(--tui-space-3);\n  }\n\n  .tui-p-4 {\n    padding: var(--tui-space-4);\n  }\n\n  .tui-p-6 {\n    padding: var(--tui-space-6);\n  }\n\n  .tui-m-0 {\n    margin: 0;\n  }\n\n  .tui-mt-2 {\n    margin-top: var(--tui-space-2);\n  }\n\n  .tui-mt-4 {\n    margin-top: var(--tui-space-4);\n  }\n\n  .tui-mt-6 {\n    margin-top: var(--tui-space-6);\n  }\n\n  .tui-mb-2 {\n    margin-bottom: var(--tui-space-2);\n  }\n\n  .tui-mb-4 {\n    margin-bottom: var(--tui-space-4);\n  }\n\n  .tui-w-full {\n    width: 100%;\n  }\n\n  .tui-min-w-0 {\n    min-width: 0;\n  }\n\n  .tui-overflow-auto {\n    overflow: auto;\n  }\n\n  .tui-text-left {\n    text-align: left;\n  }\n\n  .tui-text-center {\n    text-align: center;\n  }\n\n  .tui-text-right {\n    text-align: right;\n  }\n\n  .tui-text-1 {\n    color: var(--tui-text-1);\n  }\n\n  .tui-text-2 {\n    color: var(--tui-text-2);\n  }\n\n  .tui-text-3 {\n    color: var(--tui-text-3);\n  }\n\n  .tui-text-4 {\n    color: var(--tui-text-4);\n  }\n\n  .tui-text-5 {\n    color: var(--tui-text-5);\n  }\n\n  .tui-text-accent {\n    color: var(--tui-accent-1);\n  }\n\n  .tui-text-success {\n    color: var(--tui-success);\n  }\n\n  .tui-text-warning {\n    color: var(--tui-warning);\n  }\n\n  .tui-text-danger {\n    color: var(--tui-danger);\n  }\n\n  .tui-text-xs {\n    font-size: 0.72rem;\n  }\n\n  .tui-text-sm {\n    font-size: 0.85rem;\n  }\n\n  .tui-text-lg {\n    font-size: 1.15rem;\n  }\n\n  .tui-font-medium {\n    font-weight: var(--tui-font-weight-medium);\n  }\n\n  .tui-font-bold {\n    font-weight: var(--tui-font-weight-bold);\n  }\n\n  .tui-uppercase {\n    text-transform: uppercase;\n  }\n\n  .tui-truncate {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  .tui-border {\n    border: var(--tui-border-width) solid var(--tui-border);\n  }\n\n  .tui-bg-panel {\n    background: var(--tui-panel-bg);\n  }\n\n  .tui-bg-subtle {\n    background: var(--tui-hover);\n  }\n\n  .tui-shadow {\n    box-shadow: var(--tui-shadow);\n  }\n\n  .tui-no-radius {\n    border-radius: 0 !important;\n  }\n\n  .tui-radius {\n    border-radius: var(--tui-radius) !important;\n  }\n\n  .tui-radius-lg {\n    border-radius: var(--tui-radius-lg) !important;\n  }\n\n  .tui-ascii-title::before {\n    color: var(--tui-accent-2);\n    content: '[ ';\n  }\n\n  .tui-ascii-title::after {\n    color: var(--tui-accent-2);\n    content: ' ]';\n  }\n\n  @media (max-width: 60rem) {\n    .tui-hide-tablet {\n      display: none !important;\n    }\n  }\n\n  @media (max-width: 40rem) {\n    .tui-hide-mobile {\n      display: none !important;\n    }\n  }\n}\n\n/* ========================================================================== */\n/* OVERRIDES                                                                  */\n/* ========================================================================== */\n\n@layer overrides {\n  [data-motion='off'] *,\n  [data-motion='off'] *::before,\n  [data-motion='off'] *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    scroll-behavior: auto !important;\n    transition-duration: 0.01ms !important;\n  }\n\n  @media (prefers-reduced-motion: reduce) {\n    *,\n    *::before,\n    *::after {\n      animation-duration: 0.01ms !important;\n      animation-iteration-count: 1 !important;\n      scroll-behavior: auto !important;\n      transition-duration: 0.01ms !important;\n    }\n  }\n\n  @media (forced-colors: active) {\n    .tui-panel,\n    .tui-card,\n    .tui-sidebar,\n    .tui-topbar,\n    .tui-btn,\n    .tui-input,\n    .tui-select,\n    .tui-textarea {\n      border-color: CanvasText;\n    }\n  }\n}\n\n/* ========================================================================== */\n/* BASE PATCH FOR COMPLETE COMPONENT LIBRARY                                  */\n/* ========================================================================== */\n@layer tokens {\n  :root {\n    --tui-font-size-xs: 0.72rem;\n    --tui-font-size-sm: 0.85rem;\n    --tui-font-size: 1rem;\n    --tui-font-size-lg: 1.15rem;\n    --tui-font-size-xl: 1.5rem;\n    --tui-border-soft: var(--tui-border-light);\n    --tui-success-text: var(--tui-green-1);\n    --tui-danger-text: var(--tui-red-1);\n    --tui-info-text: var(--tui-blue-1);\n    --tui-warning-text: var(--tui-yellow-1);\n    --tui-accent-contrast: var(--tui-text-0);\n    --tui-scrollbar-size: 0.75rem;\n    --tui-scrollbar-track: var(--tui-bg-5);\n    --tui-scrollbar-thumb: var(--tui-bg-1);\n    --tui-scrollbar-thumb-hover: var(--tui-accent-3);\n    --tui-scrollbar-thumb-active: var(--tui-accent-4);\n    --tui-scrollbar-corner: var(--tui-bg-5);\n  }\n}\n\n@layer base {\n  * {\n    scrollbar-color: var(--tui-scrollbar-thumb) var(--tui-scrollbar-track);\n    scrollbar-width: thin;\n  }\n\n  *::-webkit-scrollbar {\n    height: var(--tui-scrollbar-size);\n    width: var(--tui-scrollbar-size);\n  }\n\n  *::-webkit-scrollbar-track { background: var(--tui-scrollbar-track); }\n  *::-webkit-scrollbar-thumb {\n    background: var(--tui-scrollbar-thumb);\n    border: 2px solid var(--tui-scrollbar-track);\n  }\n  *::-webkit-scrollbar-thumb:hover { background: var(--tui-scrollbar-thumb-hover); }\n  *::-webkit-scrollbar-thumb:active { background: var(--tui-scrollbar-thumb-active); }\n  *::-webkit-scrollbar-corner { background: var(--tui-scrollbar-corner); }\n}\n\n@layer components {\n  .tui-badge--info { background: color-mix(in srgb, var(--tui-info) 16%, transparent); border-color: var(--tui-info); color: var(--tui-info-text); }\n  .tui-badge--muted { background: var(--tui-hover); border-color: var(--tui-border); color: var(--tui-text-4); }\n\n  .tui-status-pill {\n    align-items: center;\n    background: var(--tui-input-bg);\n    border: var(--tui-border-width) solid var(--tui-border);\n    color: var(--tui-text-4);\n    display: inline-flex;\n    font-size: var(--tui-font-size-xs);\n    font-weight: var(--tui-font-weight-medium);\n    gap: var(--tui-space-2);\n    min-height: var(--tui-control-height-sm);\n    padding: 0 var(--tui-space-3);\n    text-transform: uppercase;\n  }\n  .tui-status-pill--success { background: color-mix(in srgb, var(--tui-success) 12%, transparent); border-color: var(--tui-success); color: var(--tui-success-text); }\n  .tui-status-pill--warning { background: color-mix(in srgb, var(--tui-warning) 12%, transparent); border-color: var(--tui-warning); color: var(--tui-warning-text); }\n  .tui-status-pill--danger { background: color-mix(in srgb, var(--tui-danger) 12%, transparent); border-color: var(--tui-danger); color: var(--tui-danger-text); }\n\n  .tui-table--compact th,\n  .tui-table--compact td { padding: var(--tui-space-2) var(--tui-space-3); }\n  .tui-table--fixed { table-layout: fixed; }\n  .tui-cell--mono { font-family: var(--tui-code-font); font-variant-numeric: tabular-nums; }\n  .tui-cell--accent { color: var(--tui-accent-1); }\n  .tui-cell--info { color: var(--tui-info-text); }\n  .tui-cell--danger { color: var(--tui-danger-text); }\n  .tui-cell--truncate { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n  .tui-cell--wrap { white-space: normal; word-break: break-word; }\n\n  .tui-theme-toggle { white-space: nowrap; }\n  .tui-theme-toggle__icon { color: var(--tui-accent-1); }\n  .tui-accent-select { min-width: 8rem; }\n}\n\n@layer utilities {\n  .tui-overflow-hidden { overflow: hidden; }\n  .tui-hide-lt-xl,\n  .tui-hide-lt-lg,\n  .tui-hide-lt-md,\n  .tui-hide-lt-sm { display: initial; }\n  @media (max-width: 80rem) { .tui-hide-lt-xl { display: none !important; } }\n  @media (max-width: 64rem) { .tui-hide-lt-lg { display: none !important; } }\n  @media (max-width: 48rem) { .tui-hide-lt-md { display: none !important; } }\n  @media (max-width: 36rem) { .tui-hide-lt-sm { display: none !important; } }\n}\n\n/* ========================================================================== */\n/* COMPONENT LIBRARY 1.0                                                      */\n/* ========================================================================== */\n\n@layer tokens {\n  :root {\n    --tui-overlay: rgb(0 0 0 / 0.62);\n    --tui-z-dropdown: 60;\n    --tui-z-popover: 70;\n    --tui-z-dialog: 100;\n    --tui-z-toast: 120;\n    --tui-avatar-size: 2.25rem;\n    --tui-calendar-cell: 2.25rem;\n  }\n}\n\n@layer components {\n  /* Accordion */\n  .tui-accordion {\n    border: var(--tui-border-width) solid var(--tui-border);\n    background: var(--tui-panel-bg);\n  }\n\n  .tui-accordion__item + .tui-accordion__item {\n    border-top: var(--tui-border-width) solid var(--tui-border);\n  }\n\n  .tui-accordion__trigger {\n    align-items: center;\n    background: transparent;\n    border: 0;\n    color: var(--tui-text-2);\n    display: flex;\n    font-weight: var(--tui-font-weight-medium);\n    gap: var(--tui-space-3);\n    justify-content: space-between;\n    min-height: var(--tui-control-height);\n    padding: var(--tui-space-3) var(--tui-space-4);\n    text-align: left;\n    width: 100%;\n  }\n\n  .tui-accordion__trigger:hover,\n  .tui-accordion__trigger[aria-expanded='true'] {\n    background: var(--tui-hover);\n    color: var(--tui-accent-1);\n  }\n\n  .tui-accordion__trigger::after {\n    content: '+';\n    font-weight: var(--tui-font-weight-bold);\n  }\n\n  .tui-accordion__trigger[aria-expanded='true']::after {\n    content: '−';\n  }\n\n  .tui-accordion__content {\n    border-top: 1px solid var(--tui-border-soft);\n    color: var(--tui-text-3);\n    padding: var(--tui-space-4);\n  }\n\n  /* Alert */\n  .tui-alert {\n    position: relative;\n  }\n\n  .tui-alert__description {\n    color: var(--tui-text-3);\n    font-size: var(--tui-font-size-sm);\n  }\n\n  .tui-alert__close {\n    background: transparent;\n    border: 0;\n    color: currentColor;\n    line-height: 1;\n    opacity: 0.7;\n    padding: var(--tui-space-2);\n    position: absolute;\n    right: var(--tui-space-2);\n    top: var(--tui-space-2);\n  }\n\n  .tui-alert__close:hover { opacity: 1; }\n\n  /* Dialog, alert dialog, drawer and sheet */\n  .tui-dialog,\n  .tui-alert-dialog,\n  .tui-drawer,\n  .tui-sheet {\n    background: transparent;\n    border: 0;\n    color: inherit;\n    margin: auto;\n    max-height: calc(100vh - 2rem);\n    max-width: min(42rem, calc(100vw - 2rem));\n    padding: 0;\n    width: 100%;\n  }\n\n  .tui-dialog::backdrop,\n  .tui-alert-dialog::backdrop,\n  .tui-drawer::backdrop,\n  .tui-sheet::backdrop {\n    background: var(--tui-overlay);\n    backdrop-filter: blur(2px);\n  }\n\n  .tui-dialog__surface {\n    background: var(--tui-floating-bg);\n    border: var(--tui-border-width) solid var(--tui-border-hover);\n    box-shadow: var(--tui-shadow-lg);\n    max-height: calc(100vh - 2rem);\n    overflow: auto;\n  }\n\n  .tui-dialog__header,\n  .tui-dialog__footer {\n    align-items: center;\n    display: flex;\n    gap: var(--tui-space-3);\n    justify-content: space-between;\n    padding: var(--tui-space-4);\n  }\n\n  .tui-dialog__header { border-bottom: var(--tui-border-width) solid var(--tui-border); }\n  .tui-dialog__footer { border-top: var(--tui-border-width) solid var(--tui-border); justify-content: flex-end; }\n  .tui-dialog__body { padding: var(--tui-space-4); }\n  .tui-dialog__title { color: var(--tui-text-1); font-size: var(--tui-font-size-lg); }\n  .tui-dialog__description { color: var(--tui-text-4); font-size: var(--tui-font-size-sm); }\n\n  .tui-alert-dialog .tui-dialog__surface {\n    border-color: var(--tui-danger);\n    max-width: 31rem;\n  }\n\n  .tui-drawer {\n    height: 100vh;\n    margin: 0 0 0 auto;\n    max-height: 100vh;\n    max-width: min(28rem, 92vw);\n  }\n\n  .tui-drawer .tui-dialog__surface,\n  .tui-sheet .tui-dialog__surface {\n    height: 100%;\n    max-height: 100vh;\n  }\n\n  .tui-sheet {\n    height: min(38rem, 88vh);\n    margin: auto 0 0;\n    max-height: 88vh;\n    max-width: 100vw;\n    width: 100vw;\n  }\n\n  /* Aspect ratio */\n  .tui-aspect-ratio {\n    aspect-ratio: var(--tui-aspect-ratio, 16 / 9);\n    background: var(--tui-bg-4);\n    border: var(--tui-border-width) solid var(--tui-border);\n    overflow: hidden;\n    position: relative;\n  }\n\n  .tui-aspect-ratio > * {\n    height: 100%;\n    object-fit: cover;\n    width: 100%;\n  }\n\n  /* Attachment */\n  .tui-attachment {\n    align-items: center;\n    background: var(--tui-hover);\n    border: var(--tui-border-width) solid var(--tui-border);\n    display: flex;\n    gap: var(--tui-space-3);\n    min-width: 0;\n    padding: var(--tui-space-3);\n  }\n\n  .tui-attachment__icon {\n    align-items: center;\n    background: var(--tui-bg-2);\n    color: var(--tui-accent-1);\n    display: inline-flex;\n    flex: 0 0 2.5rem;\n    height: 2.5rem;\n    justify-content: center;\n  }\n\n  .tui-attachment__content { flex: 1 1 auto; min-width: 0; }\n  .tui-attachment__name { color: var(--tui-text-2); font-weight: var(--tui-font-weight-medium); }\n  .tui-attachment__meta { color: var(--tui-text-5); font-size: var(--tui-font-size-xs); }\n\n  /* Avatar */\n  .tui-avatar {\n    align-items: center;\n    background: var(--tui-accent-3);\n    border: 2px solid var(--tui-panel-bg);\n    color: var(--tui-accent-contrast);\n    display: inline-flex;\n    flex: 0 0 var(--tui-avatar-size);\n    font-size: var(--tui-font-size-sm);\n    font-weight: var(--tui-font-weight-bold);\n    height: var(--tui-avatar-size);\n    justify-content: center;\n    overflow: hidden;\n    position: relative;\n    width: var(--tui-avatar-size);\n  }\n\n  .tui-avatar img { height: 100%; object-fit: cover; width: 100%; }\n  .tui-avatar--sm { --tui-avatar-size: 1.75rem; }\n  .tui-avatar--lg { --tui-avatar-size: 3.5rem; }\n  .tui-avatar--xl { --tui-avatar-size: 5rem; }\n  .tui-avatar-group { display: flex; }\n  .tui-avatar-group .tui-avatar + .tui-avatar { margin-left: -0.65rem; }\n\n  /* Badge extensions */\n  .tui-badge--outline { background: transparent; border-color: var(--tui-border-hover); color: var(--tui-accent-1); }\n  .tui-badge--dot::before { background: currentColor; content: ''; height: 0.45rem; width: 0.45rem; }\n\n  /* Breadcrumb */\n  .tui-breadcrumb { flex-wrap: wrap; }\n  .tui-breadcrumb__item { align-items: center; display: inline-flex; gap: var(--tui-space-2); }\n  .tui-breadcrumb__item:not(:last-child)::after { color: var(--tui-text-5); content: '/'; }\n  .tui-breadcrumb a { color: var(--tui-text-4); text-decoration: none; }\n  .tui-breadcrumb a:hover { color: var(--tui-accent-1); }\n  .tui-breadcrumb [aria-current='page'] { color: var(--tui-text-2); }\n\n  /* Bubble */\n  .tui-bubble {\n    background: var(--tui-bg-2);\n    border: var(--tui-border-width) solid var(--tui-border);\n    color: var(--tui-text-3);\n    max-width: min(36rem, 86%);\n    padding: var(--tui-space-3) var(--tui-space-4);\n    position: relative;\n  }\n\n  .tui-bubble--accent { border-color: var(--tui-accent-3); margin-left: auto; }\n  .tui-bubble__meta { color: var(--tui-text-5); display: block; font-size: var(--tui-font-size-xs); margin-top: var(--tui-space-2); }\n\n  /* Button group */\n  .tui-btn-group { display: inline-flex; }\n  .tui-btn-group > .tui-btn { margin-left: calc(var(--tui-border-width) * -1); }\n  .tui-btn-group > .tui-btn:first-child { margin-left: 0; }\n  .tui-btn-group > .tui-btn[aria-pressed='true'] { background: var(--tui-accent-3); border-color: var(--tui-accent-3); color: var(--tui-accent-contrast); z-index: 1; }\n\n  /* Calendar and date picker */\n  .tui-calendar {\n    background: var(--tui-panel-bg);\n    border: var(--tui-border-width) solid var(--tui-border);\n    padding: var(--tui-space-3);\n    width: min(100%, 21rem);\n  }\n\n  .tui-calendar__header { align-items: center; display: flex; justify-content: space-between; margin-bottom: var(--tui-space-3); }\n  .tui-calendar__grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: var(--tui-space-1); }\n  .tui-calendar__weekday { color: var(--tui-text-5); font-size: var(--tui-font-size-xs); padding: var(--tui-space-2) 0; text-align: center; text-transform: uppercase; }\n  .tui-calendar__day {\n    align-items: center;\n    background: transparent;\n    border: 1px solid transparent;\n    color: var(--tui-text-3);\n    display: inline-flex;\n    height: var(--tui-calendar-cell);\n    justify-content: center;\n    padding: 0;\n  }\n  .tui-calendar__day:hover { background: var(--tui-hover); border-color: var(--tui-border-hover); }\n  .tui-calendar__day[aria-selected='true'] { background: var(--tui-accent-3); color: var(--tui-accent-contrast); }\n  .tui-calendar__day--outside { color: var(--tui-text-5); opacity: 0.6; }\n  .tui-calendar__day--today { border-color: var(--tui-accent-2); color: var(--tui-accent-1); }\n  .tui-date-picker { position: relative; }\n\n  /* Carousel */\n  .tui-carousel { border: var(--tui-border-width) solid var(--tui-border); overflow: hidden; position: relative; }\n  .tui-carousel__viewport { overflow: hidden; }\n  .tui-carousel__track { display: flex; transition: transform var(--tui-duration-slow) var(--tui-ease); }\n  .tui-carousel__slide { flex: 0 0 100%; min-width: 0; padding: var(--tui-space-6); }\n  .tui-carousel__controls { align-items: center; bottom: var(--tui-space-3); display: flex; gap: var(--tui-space-2); justify-content: space-between; left: var(--tui-space-3); position: absolute; right: var(--tui-space-3); }\n  .tui-carousel__dots { display: flex; gap: var(--tui-space-1); }\n  .tui-carousel__dot { background: var(--tui-text-5); border: 0; height: 0.35rem; padding: 0; width: 1rem; }\n  .tui-carousel__dot[aria-current='true'] { background: var(--tui-accent-2); }\n\n  /* Chart */\n  .tui-chart { background: var(--tui-bg-4); border: var(--tui-border-width) solid var(--tui-border); min-height: 14rem; padding: var(--tui-space-4); }\n  .tui-chart__plot { align-items: end; background-image: linear-gradient(var(--tui-border-soft) 1px, transparent 1px); background-size: 100% 25%; display: flex; gap: var(--tui-space-3); height: 10rem; padding-top: var(--tui-space-3); }\n  .tui-chart__bar { background: var(--tui-accent-3); flex: 1 1 0; height: var(--tui-chart-value, 50%); min-width: 0.75rem; position: relative; }\n  .tui-chart__bar:hover { background: var(--tui-accent-1); }\n  .tui-chart__bar::after { bottom: calc(100% + 0.25rem); color: var(--tui-text-4); content: attr(data-value); font-size: var(--tui-font-size-xs); left: 50%; position: absolute; transform: translateX(-50%); }\n  .tui-chart__legend { color: var(--tui-text-5); display: flex; font-size: var(--tui-font-size-xs); gap: var(--tui-space-4); margin-top: var(--tui-space-3); }\n  .tui-chart__key { align-items: center; display: inline-flex; gap: var(--tui-space-2); }\n  .tui-chart__key::before { background: var(--tui-accent-3); content: ''; height: 0.6rem; width: 0.6rem; }\n\n  /* Checkbox, radio and switch */\n  .tui-checkbox,\n  .tui-radio-option,\n  .tui-switch {\n    align-items: center;\n    color: var(--tui-text-3);\n    display: inline-flex;\n    gap: var(--tui-space-2);\n    min-height: var(--tui-control-height-sm);\n  }\n\n  .tui-checkbox input,\n  .tui-radio-option input,\n  .tui-switch input { accent-color: var(--tui-accent-3); }\n\n  .tui-checkbox__control,\n  .tui-radio-option__control {\n    align-items: center;\n    background: var(--tui-input-bg);\n    border: var(--tui-border-width) solid var(--tui-border);\n    display: inline-flex;\n    flex: 0 0 1.15rem;\n    height: 1.15rem;\n    justify-content: center;\n    width: 1.15rem;\n  }\n\n  .tui-checkbox input:checked + .tui-checkbox__control,\n  .tui-radio-option input:checked + .tui-radio-option__control { background: var(--tui-accent-3); border-color: var(--tui-accent-3); color: var(--tui-accent-contrast); }\n  .tui-checkbox input:checked + .tui-checkbox__control::after { content: '✓'; font-size: 0.8rem; font-weight: 700; }\n  .tui-radio-option__control { border-radius: 50%; }\n  .tui-radio-option input:checked + .tui-radio-option__control::after { background: currentColor; border-radius: 50%; content: ''; height: 0.4rem; width: 0.4rem; }\n  .tui-checkbox input,\n  .tui-radio-option input,\n  .tui-switch input { height: 1px; opacity: 0; position: absolute; width: 1px; }\n  .tui-radio-group { display: grid; gap: var(--tui-space-2); }\n\n  .tui-switch__track { background: var(--tui-bg-1); border: var(--tui-border-width) solid var(--tui-border); display: inline-flex; flex: 0 0 2.4rem; height: 1.25rem; padding: 0.15rem; transition: var(--tui-transition); width: 2.4rem; }\n  .tui-switch__thumb { background: var(--tui-text-3); height: 0.7rem; transform: translateX(0); transition: var(--tui-transition); width: 0.7rem; }\n  .tui-switch input:checked + .tui-switch__track { background: var(--tui-accent-3); border-color: var(--tui-accent-3); }\n  .tui-switch input:checked + .tui-switch__track .tui-switch__thumb { background: var(--tui-accent-contrast); transform: translateX(1rem); }\n\n  /* Collapsible */\n  .tui-collapsible { border: var(--tui-border-width) solid var(--tui-border); }\n  .tui-collapsible__trigger { align-items: center; background: var(--tui-panel-bg); border: 0; color: var(--tui-text-2); display: flex; justify-content: space-between; min-height: var(--tui-control-height); padding: var(--tui-space-3) var(--tui-space-4); width: 100%; }\n  .tui-collapsible__content { border-top: 1px solid var(--tui-border-soft); padding: var(--tui-space-4); }\n\n  /* Combobox and custom select */\n  .tui-combobox,\n  .tui-custom-select,\n  .tui-dropdown,\n  .tui-popover,\n  .tui-navigation-menu__item,\n  .tui-menubar__item { position: relative; }\n\n  .tui-combobox__menu,\n  .tui-custom-select__menu,\n  .tui-dropdown__menu,\n  .tui-popover__content,\n  .tui-navigation-menu__content,\n  .tui-menubar__menu {\n    background: var(--tui-floating-bg);\n    border: var(--tui-border-width) solid var(--tui-border-hover);\n    box-shadow: var(--tui-shadow);\n    left: 0;\n    margin-top: var(--tui-space-1);\n    max-height: 18rem;\n    min-width: 100%;\n    overflow: auto;\n    padding: var(--tui-space-1);\n    position: absolute;\n    top: 100%;\n    z-index: var(--tui-z-dropdown);\n  }\n\n  .tui-combobox__option,\n  .tui-custom-select__option,\n  .tui-dropdown__item,\n  .tui-navigation-menu__link,\n  .tui-menubar__menu-item {\n    align-items: center;\n    background: transparent;\n    border: 0;\n    color: var(--tui-text-3);\n    display: flex;\n    gap: var(--tui-space-2);\n    min-height: var(--tui-control-height-sm);\n    padding: var(--tui-space-2) var(--tui-space-3);\n    text-align: left;\n    text-decoration: none;\n    width: 100%;\n  }\n\n  .tui-combobox__option:hover,\n  .tui-combobox__option[aria-selected='true'],\n  .tui-custom-select__option:hover,\n  .tui-custom-select__option[aria-selected='true'],\n  .tui-dropdown__item:hover,\n  .tui-navigation-menu__link:hover,\n  .tui-menubar__menu-item:hover { background: var(--tui-active); color: var(--tui-accent-1); }\n\n  /* Command */\n  .tui-command-palette { background: var(--tui-floating-bg); border: var(--tui-border-width) solid var(--tui-border-hover); box-shadow: var(--tui-shadow-lg); overflow: hidden; }\n  .tui-command-palette__input { border-width: 0 0 var(--tui-border-width); width: 100%; }\n  .tui-command-palette__list { max-height: 18rem; overflow: auto; padding: var(--tui-space-2); }\n  .tui-command-palette__group-label { color: var(--tui-text-5); font-size: var(--tui-font-size-xs); padding: var(--tui-space-2); text-transform: uppercase; }\n  .tui-command-palette__item { align-items: center; display: flex; gap: var(--tui-space-3); justify-content: space-between; min-height: var(--tui-control-height); padding: var(--tui-space-2) var(--tui-space-3); }\n  .tui-command-palette__item:hover { background: var(--tui-hover); color: var(--tui-accent-1); }\n\n  /* Context menu */\n  .tui-context-menu { background: var(--tui-floating-bg); border: var(--tui-border-width) solid var(--tui-border-hover); box-shadow: var(--tui-shadow); min-width: 13rem; padding: var(--tui-space-1); position: fixed; z-index: var(--tui-z-popover); }\n  .tui-context-target { align-items: center; border: var(--tui-border-width) dashed var(--tui-border); color: var(--tui-text-4); display: flex; justify-content: center; min-height: 7rem; padding: var(--tui-space-4); text-align: center; }\n\n  /* Data table */\n  .tui-data-table__toolbar { align-items: center; border-bottom: var(--tui-border-width) solid var(--tui-border); display: flex; flex-wrap: wrap; gap: var(--tui-space-3); justify-content: space-between; padding: var(--tui-space-3); }\n  .tui-data-table tbody tr[data-selected='true'] { background: color-mix(in srgb, var(--tui-accent-3) 15%, transparent); }\n  .tui-data-table th[aria-sort] { cursor: pointer; user-select: none; }\n  .tui-data-table th[aria-sort='ascending']::after { content: ' ↑'; color: var(--tui-accent-1); }\n  .tui-data-table th[aria-sort='descending']::after { content: ' ↓'; color: var(--tui-accent-1); }\n\n  /* Direction */\n  .tui-direction { border: var(--tui-border-width) solid var(--tui-border); padding: var(--tui-space-4); }\n\n  /* Dropdown menu */\n  .tui-dropdown__separator,\n  .tui-menubar__separator { border: 0; border-top: 1px solid var(--tui-border); margin: var(--tui-space-1) 0; }\n  .tui-dropdown__label { color: var(--tui-text-5); font-size: var(--tui-font-size-xs); padding: var(--tui-space-2) var(--tui-space-3); text-transform: uppercase; }\n\n  /* Empty */\n  .tui-empty { border-style: dashed; }\n  .tui-empty__actions { display: flex; flex-wrap: wrap; gap: var(--tui-space-2); justify-content: center; margin-top: var(--tui-space-4); }\n\n  /* Field */\n  .tui-fieldset { border: var(--tui-border-width) solid var(--tui-border); display: grid; gap: var(--tui-space-4); margin: 0; padding: var(--tui-space-4); }\n  .tui-fieldset__legend { color: var(--tui-accent-1); font-size: var(--tui-font-size-sm); padding: 0 var(--tui-space-2); text-transform: uppercase; }\n\n  /* Hover card */\n  .tui-hover-card { display: inline-block; position: relative; }\n  .tui-hover-card__content { background: var(--tui-floating-bg); border: var(--tui-border-width) solid var(--tui-border-hover); box-shadow: var(--tui-shadow); left: 50%; min-width: 18rem; opacity: 0; padding: var(--tui-space-4); pointer-events: none; position: absolute; top: calc(100% + var(--tui-space-2)); transform: translate(-50%, -0.25rem); transition: var(--tui-transition); visibility: hidden; z-index: var(--tui-z-popover); }\n  .tui-hover-card:hover .tui-hover-card__content,\n  .tui-hover-card:focus-within .tui-hover-card__content { opacity: 1; pointer-events: auto; transform: translate(-50%, 0); visibility: visible; }\n\n  /* Input group */\n  .tui-input-group { align-items: stretch; display: flex; }\n  .tui-input-group > * { margin-left: calc(var(--tui-border-width) * -1); }\n  .tui-input-group > :first-child { margin-left: 0; }\n  .tui-input-group__addon { align-items: center; background: var(--tui-bg-2); border: var(--tui-border-width) solid var(--tui-border); color: var(--tui-text-4); display: inline-flex; padding: 0 var(--tui-space-3); white-space: nowrap; }\n  .tui-input-group .tui-input { flex: 1 1 auto; min-width: 0; }\n\n  /* OTP */\n  .tui-input-otp { display: flex; flex-wrap: wrap; gap: var(--tui-space-2); }\n  .tui-input-otp__slot { background: var(--tui-input-bg); border: var(--tui-border-width) solid var(--tui-border); color: var(--tui-text-1); font-size: var(--tui-font-size-lg); height: 3rem; text-align: center; width: 2.5rem; }\n  .tui-input-otp__slot:focus { border-color: var(--tui-border-hover); box-shadow: var(--tui-ring); outline: 0; }\n\n  /* Item */\n  .tui-item { align-items: center; border: var(--tui-border-width) solid var(--tui-border); display: flex; gap: var(--tui-space-3); min-width: 0; padding: var(--tui-space-3); }\n  .tui-item:hover { background: var(--tui-hover); border-color: var(--tui-border-hover); }\n  .tui-item__media { flex: 0 0 auto; }\n  .tui-item__content { flex: 1 1 auto; min-width: 0; }\n  .tui-item__title { color: var(--tui-text-2); font-weight: var(--tui-font-weight-medium); }\n  .tui-item__description { color: var(--tui-text-5); font-size: var(--tui-font-size-sm); }\n  .tui-item__actions { flex: 0 0 auto; }\n\n  /* Kbd */\n  .tui-kbd { background: var(--tui-bg-2); border: 1px solid var(--tui-border-strong); box-shadow: 0 2px 0 var(--tui-bg-5); color: var(--tui-text-2); display: inline-flex; font-family: var(--tui-code-font); font-size: var(--tui-font-size-xs); min-height: 1.35rem; min-width: 1.35rem; padding: 0.1rem 0.35rem; }\n\n  /* Label */\n  .tui-label { color: var(--tui-text-2); display: inline-block; font-size: var(--tui-font-size-sm); font-weight: var(--tui-font-weight-medium); }\n  .tui-label--required::after { color: var(--tui-danger); content: ' *'; }\n\n  /* Marker */\n  .tui-marker { align-items: center; color: var(--tui-text-3); display: inline-flex; gap: var(--tui-space-2); }\n  .tui-marker::before { background: var(--tui-marker-color, var(--tui-accent-3)); content: ''; height: 0.7rem; width: 0.7rem; }\n  .tui-marker--success { --tui-marker-color: var(--tui-success); }\n  .tui-marker--warning { --tui-marker-color: var(--tui-warning); }\n  .tui-marker--danger { --tui-marker-color: var(--tui-danger); }\n\n  /* Menubar */\n  .tui-menubar { align-items: center; background: var(--tui-panel-bg); border: var(--tui-border-width) solid var(--tui-border); display: flex; flex-wrap: wrap; padding: var(--tui-space-1); }\n  .tui-menubar__trigger { background: transparent; border: 0; color: var(--tui-text-3); min-height: var(--tui-control-height-sm); padding: var(--tui-space-2) var(--tui-space-3); }\n  .tui-menubar__trigger:hover,\n  .tui-menubar__trigger[aria-expanded='true'] { background: var(--tui-active); color: var(--tui-accent-1); }\n\n  /* Message and message scroller */\n  .tui-chat-message { align-items: flex-start; display: flex; gap: var(--tui-space-3); padding: var(--tui-space-3); }\n  .tui-chat-message:hover { background: var(--tui-hover); }\n  .tui-chat-message__body { flex: 1 1 auto; min-width: 0; }\n  .tui-chat-message__header { align-items: baseline; display: flex; flex-wrap: wrap; gap: var(--tui-space-2); }\n  .tui-chat-message__author { color: var(--tui-text-2); font-weight: var(--tui-font-weight-medium); }\n  .tui-chat-message__time { color: var(--tui-text-5); font-size: var(--tui-font-size-xs); }\n  .tui-chat-message__content { color: var(--tui-text-3); margin-top: var(--tui-space-1); }\n  .tui-message-scroller { border: var(--tui-border-width) solid var(--tui-border); max-height: 19rem; overflow: auto; scroll-behavior: smooth; }\n  .tui-message-scroller__jump { bottom: var(--tui-space-3); position: sticky; text-align: center; z-index: 2; }\n\n  /* Native select */\n  .tui-native-select { appearance: none; background-image: linear-gradient(45deg, transparent 50%, var(--tui-text-4) 50%), linear-gradient(135deg, var(--tui-text-4) 50%, transparent 50%); background-position: calc(100% - 0.9rem) 50%, calc(100% - 0.6rem) 50%; background-repeat: no-repeat; background-size: 0.3rem 0.3rem, 0.3rem 0.3rem; padding-right: 2rem; }\n\n  /* Navigation menu */\n  .tui-navigation-menu { align-items: center; display: flex; flex-wrap: wrap; gap: var(--tui-space-1); }\n  .tui-navigation-menu__trigger { background: transparent; border: 1px solid transparent; color: var(--tui-text-3); min-height: var(--tui-control-height-sm); padding: var(--tui-space-2) var(--tui-space-3); }\n  .tui-navigation-menu__trigger:hover,\n  .tui-navigation-menu__trigger[aria-expanded='true'] { background: var(--tui-hover); border-color: var(--tui-border); color: var(--tui-accent-1); }\n  .tui-navigation-menu__content { display: grid; gap: var(--tui-space-1); min-width: 20rem; }\n\n  /* Pagination */\n  .tui-pagination { flex-wrap: wrap; }\n  .tui-pagination__item { align-items: center; background: var(--tui-panel-bg); border: var(--tui-border-width) solid var(--tui-border); color: var(--tui-text-3); display: inline-flex; height: var(--tui-control-height-sm); justify-content: center; min-width: var(--tui-control-height-sm); padding: 0 var(--tui-space-2); text-decoration: none; }\n  .tui-pagination__item:hover { border-color: var(--tui-border-hover); color: var(--tui-accent-1); }\n  .tui-pagination__item[aria-current='page'] { background: var(--tui-accent-3); border-color: var(--tui-accent-3); color: var(--tui-accent-contrast); }\n\n  /* Popover */\n  .tui-popover__content { min-width: 18rem; padding: var(--tui-space-4); z-index: var(--tui-z-popover); }\n\n  /* Progress */\n  .tui-progress { position: relative; }\n  .tui-progress__label { align-items: center; color: var(--tui-text-4); display: flex; font-size: var(--tui-font-size-xs); justify-content: space-between; margin-bottom: var(--tui-space-1); }\n  .tui-progress--indeterminate .tui-progress__bar { animation: tui-progress-indeterminate 1.2s linear infinite; width: 35%; }\n  @keyframes tui-progress-indeterminate { from { transform: translateX(-120%); } to { transform: translateX(320%); } }\n\n  /* Resizable */\n  .tui-resizable { border: var(--tui-border-width) solid var(--tui-border); min-height: 8rem; min-width: 12rem; overflow: auto; padding: var(--tui-space-4); resize: both; }\n  .tui-resizable::after { color: var(--tui-text-5); content: '↘'; float: right; }\n\n  /* Scroll area */\n  .tui-scroll-area--fade { mask-image: linear-gradient(to bottom, transparent, black 1rem, black calc(100% - 1rem), transparent); padding-block: 1rem; }\n\n  /* Separator */\n  .tui-separator { background: var(--tui-border); border: 0; height: var(--tui-border-width); margin: var(--tui-space-4) 0; width: 100%; }\n  .tui-separator--vertical { align-self: stretch; height: auto; margin: 0 var(--tui-space-3); min-height: 1.5rem; width: var(--tui-border-width); }\n  .tui-separator--label { align-items: center; background: transparent; color: var(--tui-text-5); display: flex; gap: var(--tui-space-3); height: auto; }\n  .tui-separator--label::before,\n  .tui-separator--label::after { background: var(--tui-border); content: ''; flex: 1 1 auto; height: var(--tui-border-width); }\n\n  /* Sidebar additions */\n  .tui-sidebar-layout { display: grid; grid-template-columns: minmax(13rem, var(--tui-sidebar-width)) minmax(0, 1fr); min-height: 24rem; }\n  .tui-sidebar-layout .tui-sidebar { border-right: var(--tui-border-width) solid var(--tui-border); }\n\n  /* Skeleton */\n  .tui-skeleton { background: linear-gradient(90deg, var(--tui-bg-2), var(--tui-bg-1), var(--tui-bg-2)); background-size: 200% 100%; min-height: 1rem; }\n  .tui-skeleton--circle { aspect-ratio: 1; border-radius: 50%; width: 3rem; }\n\n  /* Slider */\n  .tui-slider { accent-color: var(--tui-accent-3); background: transparent; width: 100%; }\n  .tui-slider::-webkit-slider-runnable-track { background: var(--tui-bg-1); height: 0.35rem; }\n  .tui-slider::-webkit-slider-thumb { appearance: none; background: var(--tui-accent-2); border: 2px solid var(--tui-bg-4); height: 1rem; margin-top: -0.325rem; width: 1rem; }\n  .tui-slider::-moz-range-track { background: var(--tui-bg-1); height: 0.35rem; }\n  .tui-slider::-moz-range-thumb { background: var(--tui-accent-2); border: 2px solid var(--tui-bg-4); border-radius: 0; height: 0.8rem; width: 0.8rem; }\n\n  /* Sonner, toast and spinner */\n  .tui-sonner { bottom: var(--tui-space-4); display: grid; gap: var(--tui-space-2); max-width: min(26rem, calc(100vw - 2rem)); position: fixed; right: var(--tui-space-4); width: 100%; z-index: var(--tui-z-toast); }\n  .tui-toast { align-items: flex-start; animation: tui-toast-in var(--tui-duration-slow) var(--tui-ease); background: var(--tui-floating-bg); border: var(--tui-border-width) solid var(--tui-border-hover); box-shadow: var(--tui-shadow); display: flex; gap: var(--tui-space-3); padding: var(--tui-space-3); }\n  .tui-toast--success { border-color: var(--tui-success); }\n  .tui-toast--danger { border-color: var(--tui-danger); }\n  .tui-toast--warning { border-color: var(--tui-warning); }\n  .tui-toast__content { flex: 1 1 auto; }\n  .tui-toast__title { color: var(--tui-text-1); font-weight: var(--tui-font-weight-medium); }\n  .tui-toast__description { color: var(--tui-text-4); font-size: var(--tui-font-size-sm); }\n  .tui-toast__close { background: transparent; border: 0; color: var(--tui-text-4); padding: 0; }\n  @keyframes tui-toast-in { from { opacity: 0; transform: translateX(1rem); } to { opacity: 1; transform: translateX(0); } }\n  .tui-spinner { animation: tui-spin 0.8s steps(8, end) infinite; border: 2px solid var(--tui-border); border-top-color: var(--tui-accent-2); display: inline-block; height: 1.25rem; width: 1.25rem; }\n  .tui-spinner--sm { height: 0.9rem; width: 0.9rem; }\n  .tui-spinner--lg { height: 2rem; width: 2rem; }\n  @keyframes tui-spin { to { transform: rotate(360deg); } }\n\n  /* Toggle */\n  .tui-toggle { align-items: center; background: transparent; border: var(--tui-border-width) solid var(--tui-border); color: var(--tui-text-3); display: inline-flex; gap: var(--tui-space-2); min-height: var(--tui-control-height-sm); padding: 0 var(--tui-space-3); }\n  .tui-toggle:hover { border-color: var(--tui-border-hover); color: var(--tui-accent-1); }\n  .tui-toggle[aria-pressed='true'] { background: var(--tui-accent-3); border-color: var(--tui-accent-3); color: var(--tui-accent-contrast); }\n  .tui-toggle-group { display: inline-flex; }\n  .tui-toggle-group .tui-toggle + .tui-toggle { margin-left: calc(var(--tui-border-width) * -1); }\n\n  /* Tooltip upgrade */\n  .tui-tooltip[data-side='bottom']::after { bottom: auto; top: calc(100% + 0.5rem); }\n  .tui-tooltip[data-side='right']::after { bottom: auto; left: calc(100% + 0.5rem); top: 50%; transform: translate(0.25rem, -50%); }\n  .tui-tooltip[data-side='right']:hover::after,\n  .tui-tooltip[data-side='right']:focus-visible::after { transform: translate(0, -50%); }\n\n  /* Typography */\n  .tui-typography-display { color: var(--tui-text-1); font-size: clamp(2rem, 5vw, 4.25rem); font-weight: var(--tui-font-weight-bold); letter-spacing: -0.08ch; line-height: 0.95; }\n  .tui-typography-h1 { color: var(--tui-text-1); font-size: clamp(1.75rem, 3vw, 2.5rem); line-height: 1.1; }\n  .tui-typography-h2 { color: var(--tui-text-2); font-size: clamp(1.35rem, 2vw, 1.85rem); line-height: 1.2; }\n  .tui-typography-h3 { color: var(--tui-text-2); font-size: var(--tui-font-size-lg); line-height: 1.3; }\n  .tui-typography-lead { color: var(--tui-text-3); font-size: var(--tui-font-size-lg); }\n  .tui-typography-muted { color: var(--tui-text-5); font-size: var(--tui-font-size-sm); }\n  .tui-typography-code { background: var(--tui-bg-2); border: 1px solid var(--tui-border); color: var(--tui-accent-1); padding: 0.1rem 0.35rem; }\n  .tui-typography-quote { border-left: var(--tui-divider-width) solid var(--tui-accent-3); color: var(--tui-text-3); padding-left: var(--tui-space-4); }\n\n  @media (max-width: 48rem) {\n    .tui-sidebar-layout { grid-template-columns: 1fr; }\n    .tui-sidebar-layout .tui-sidebar { border-bottom: var(--tui-border-width) solid var(--tui-border); border-right: 0; }\n    .tui-navigation-menu__content { min-width: min(20rem, calc(100vw - 2rem)); }\n    .tui-dialog__footer { align-items: stretch; flex-direction: column-reverse; }\n    .tui-dialog__footer .tui-btn { width: 100%; }\n  }\n}\n\n@layer reset {\n  [hidden] { display: none !important; }\n}\n\n@layer components {\n  .tui-btn--link {\n    background: transparent;\n    border-color: transparent;\n    color: var(--tui-accent-1);\n    min-height: auto;\n    padding-inline: 0;\n    text-decoration: underline;\n    text-underline-offset: 0.2em;\n  }\n  .tui-btn--link:hover { background: transparent; color: var(--tui-accent-2); }\n  .tui-empty__title { color: var(--tui-text-2); font-size: var(--tui-font-size-lg); }\n}\n\n/* ========================================================================== */\n/* OPERATIONAL TOOL COMPATIBILITY                                             */\n/* ========================================================================== */\n@layer components {\n  .tui-grid--5 { --tui-grid-columns: 5; grid-template-columns: repeat(5, minmax(0, 1fr)); }\n  .tui-grid--6 { --tui-grid-columns: 6; grid-template-columns: repeat(6, minmax(0, 1fr)); }\n\n  .tui-metric__value--success { color: var(--tui-success); }\n  .tui-metric__value--warning { color: var(--tui-warning); }\n  .tui-metric__value--danger { color: var(--tui-danger); }\n  .tui-metric__value--info { color: var(--tui-info); }\n\n  .tui-chip-group { display: flex; flex-wrap: wrap; gap: var(--tui-space-2); }\n  .tui-chip {\n    align-items: center;\n    background: var(--tui-input-bg);\n    border: var(--tui-border-width) solid var(--tui-border);\n    color: var(--tui-text-4);\n    display: inline-flex;\n    font-size: var(--tui-font-size-xs);\n    font-weight: var(--tui-font-weight-medium);\n    justify-content: center;\n    min-height: var(--tui-control-height-sm);\n    padding: 0 var(--tui-space-3);\n    text-transform: uppercase;\n  }\n  .tui-chip:hover,\n  .tui-chip.is-active,\n  .tui-chip[aria-pressed='true'] { background: var(--tui-accent-3); border-color: var(--tui-accent-3); color: var(--tui-accent-contrast); }\n\n  .tui-toolbar { align-items: center; display: flex; flex-wrap: wrap; gap: var(--tui-space-3); justify-content: space-between; }\n  .tui-toolbar__actions { align-items: center; display: flex; flex-wrap: wrap; gap: var(--tui-space-2); }\n\n  .tui-table-wrap--flush { margin: 0; }\n  .tui-table-wrap--viewport { max-height: 67vh; overflow: auto; }\n  .tui-cell--expandable { cursor: pointer; }\n  .tui-cell--expandable.tui-cell--expanded { white-space: normal; word-break: break-all; }\n\n  .tui-details { border-left: var(--tui-divider-width) solid var(--tui-accent-3); padding: var(--tui-space-4); }\n  .tui-details__title { color: var(--tui-accent-1); font-size: var(--tui-font-size-sm); font-weight: var(--tui-font-weight-bold); margin-bottom: var(--tui-space-3); text-transform: uppercase; }\n  .tui-details__grid { display: grid; gap: var(--tui-space-2); grid-template-columns: repeat(4, minmax(0, 1fr)); margin-bottom: var(--tui-space-3); }\n  .tui-details__item { background: var(--tui-hover); border: var(--tui-border-width) solid var(--tui-border-soft); min-width: 0; padding: var(--tui-space-3); }\n  .tui-details__item b { color: var(--tui-text-5); display: block; font-size: var(--tui-font-size-xs); margin-bottom: var(--tui-space-1); text-transform: uppercase; }\n  .tui-details__item span { font-family: var(--tui-code-font); font-size: var(--tui-font-size-sm); overflow-wrap: anywhere; }\n  .tui-details__pre { background: var(--tui-bg-5); border: var(--tui-border-width) solid var(--tui-border); color: var(--tui-text-3); font-family: var(--tui-code-font); max-height: 22rem; overflow: auto; padding: var(--tui-space-3); white-space: pre-wrap; word-break: break-word; }\n\n  @media (max-width: 75rem) {\n    .tui-grid--5, .tui-grid--6 { grid-template-columns: repeat(3, minmax(0, 1fr)); }\n  }\n  @media (max-width: 50rem) {\n    .tui-grid--5, .tui-grid--6 { grid-template-columns: repeat(2, minmax(0, 1fr)); }\n    .tui-details__grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }\n  }\n  @media (max-width: 36rem) {\n    .tui-grid--5, .tui-grid--6, .tui-details__grid { grid-template-columns: 1fr; }\n  }\n}\n\n\n/* ========================================================================== */\n/* VERSION 1.1 STATE HELPERS                                                  */\n/* ========================================================================== */\n@layer components {\n  .tui-status-pill::before {\n    background: currentColor;\n    content: '';\n    flex: 0 0 auto;\n    height: 0.5rem;\n    opacity: 0.72;\n    width: 0.5rem;\n  }\n\n  .tui-status-pill--info {\n    background: color-mix(in srgb, var(--tui-info) 12%, transparent);\n    border-color: var(--tui-info);\n    color: var(--tui-info-text);\n  }\n\n  .tui-status-pill.is-pulsing::before {\n    animation: tui-status-pulse 1.4s steps(2, end) infinite;\n    box-shadow: 0 0 0 0.25rem color-mix(in srgb, currentColor 18%, transparent);\n  }\n\n  @keyframes tui-status-pulse {\n    0%, 100% { opacity: 1; }\n    50% { opacity: 0.28; }\n  }\n\n  .tui-row--new {\n    animation: tui-row-new 4s ease forwards;\n    background: color-mix(in srgb, var(--tui-accent-3) 16%, transparent);\n  }\n\n  .tui-row--new > :first-child {\n    box-shadow: inset 3px 0 0 var(--tui-accent-3);\n  }\n\n  @keyframes tui-row-new {\n    0%, 65% { background: color-mix(in srgb, var(--tui-accent-3) 16%, transparent); }\n    100% { background: transparent; }\n  }\n\n  [data-tui-toggle][aria-pressed='true'].tui-btn--link {\n    color: var(--tui-success-text);\n    text-decoration-color: currentColor;\n  }\n}\n";
  const script = document.currentScript;

  function mountStyles() {
    const existing = document.getElementById(STYLE_ID);
    if (existing) return existing;

    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.dataset.tuiVersion = VERSION;
    style.textContent = CSS_TEXT;

    if (script && script.nonce) style.nonce = script.nonce;

    const target = document.head || document.documentElement;
    target.appendChild(style);
    return style;
  }

  function removeStyles() {
    const style = document.getElementById(STYLE_ID);
    if (style) style.remove();
  }

  function shouldAutoloadStyles() {
    return !script || script.dataset.tuiAutoload !== 'false';
  }

  if (shouldAutoloadStyles()) mountStyles();

  const root = document.documentElement;
  const storageKey = root.dataset.themeStorageKey || 'tui-theme';
  const allowedThemes = new Set(['dark', 'light', 'system']);
  const cycleOrder = ['system', 'dark', 'light'];
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  function normalizeTheme(value) {
    return allowedThemes.has(value) ? value : 'system';
  }

  function readStoredTheme() {
    try {
      return window.localStorage.getItem(storageKey);
    } catch (error) {
      return null;
    }
  }

  function writeStoredTheme(theme) {
    try {
      window.localStorage.setItem(storageKey, theme);
    } catch (error) {
      // Storage can be unavailable in private or embedded contexts.
    }
  }

  function resolveTheme(preference) {
    return preference === 'system'
      ? (mediaQuery.matches ? 'dark' : 'light')
      : preference;
  }

  function getInitialPreference() {
    const stored = readStoredTheme();
    if (allowedThemes.has(stored)) return stored;

    const declared = root.dataset.themePreference || root.dataset.theme;
    return normalizeTheme(declared);
  }

  function updateThemeColor() {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) return;

    window.requestAnimationFrame(() => {
      const color = window.getComputedStyle(root)
        .getPropertyValue('--tui-body-bg')
        .trim();
      if (color) meta.setAttribute('content', color);
    });
  }

  function getControlText(control, preference) {
    const labels = {
      dark: control.dataset.labelDark || 'dark',
      light: control.dataset.labelLight || 'light',
      system: control.dataset.labelSystem || 'system'
    };
    const prefix = control.dataset.labelPrefix ?? 'theme: ';
    return `${prefix}${labels[preference]}`;
  }

  function getControlIcon(control, preference) {
    const icons = {
      dark: control.dataset.iconDark || '[D]',
      light: control.dataset.iconLight || '[L]',
      system: control.dataset.iconSystem || '[A]'
    };
    return icons[preference];
  }

  function updateControls(preference, resolvedTheme) {
    document.querySelectorAll('[data-tui-theme-toggle]').forEach((control) => {
      const label = getControlText(control, preference);
      const labelTarget = control.querySelector('[data-tui-theme-label]');
      const iconTarget = control.querySelector('[data-tui-theme-icon]');

      if (labelTarget) labelTarget.textContent = label;
      else if (!iconTarget) control.textContent = label;

      if (iconTarget) iconTarget.textContent = getControlIcon(control, preference);

      control.dataset.themePreference = preference;
      control.dataset.themeResolved = resolvedTheme;
      control.setAttribute('aria-label', `${label}. resolved: ${resolvedTheme}`);
      control.setAttribute('title', `${label} (${resolvedTheme})`);
    });

    document.querySelectorAll('[data-tui-theme-select]').forEach((control) => {
      control.value = preference;
      control.dataset.themeResolved = resolvedTheme;
    });
  }

  function dispatchThemeChange(preference, resolvedTheme) {
    window.dispatchEvent(new CustomEvent('tui:themechange', {
      detail: { preference, resolvedTheme }
    }));
  }

  function applyTheme(preference, options = {}) {
    const normalized = normalizeTheme(preference);
    const resolvedTheme = resolveTheme(normalized);

    root.dataset.themePreference = normalized;
    root.dataset.theme = resolvedTheme;
    root.style.colorScheme = resolvedTheme;

    if (options.persist !== false) writeStoredTheme(normalized);
    updateControls(normalized, resolvedTheme);
    updateThemeColor();
    dispatchThemeChange(normalized, resolvedTheme);

    return { preference: normalized, resolvedTheme };
  }

  function cycleTheme() {
    const current = normalizeTheme(root.dataset.themePreference);
    const nextIndex = (cycleOrder.indexOf(current) + 1) % cycleOrder.length;
    return applyTheme(cycleOrder[nextIndex]);
  }

  function bindControls(scope = document) {
    scope.querySelectorAll('[data-tui-theme-toggle]').forEach((control) => {
      if (control.dataset.tuiThemeBound === 'true') return;
      control.dataset.tuiThemeBound = 'true';
      control.addEventListener('click', cycleTheme);
    });

    scope.querySelectorAll('[data-tui-theme-select]').forEach((control) => {
      if (control.dataset.tuiThemeBound === 'true') return;
      control.dataset.tuiThemeBound = 'true';
      control.addEventListener('change', (event) => applyTheme(event.currentTarget.value));
    });

    const preference = normalizeTheme(root.dataset.themePreference);
    updateControls(preference, root.dataset.theme || resolveTheme(preference));
    updateThemeColor();
  }

  function handleSystemThemeChange() {
    if (root.dataset.themePreference === 'system') {
      applyTheme('system', { persist: false });
    }
  }

  const accentStorageKey = root.dataset.accentStorageKey || 'tui-accent';
  const allowedAccents = new Set(['purple', 'blue', 'green', 'yellow', 'red']);

  function normalizeAccent(value) {
    return allowedAccents.has(value) ? value : 'purple';
  }

  function readStoredAccent() {
    try { return window.localStorage.getItem(accentStorageKey); }
    catch (error) { return null; }
  }

  function writeStoredAccent(accent) {
    try { window.localStorage.setItem(accentStorageKey, accent); }
    catch (error) { /* Storage may be unavailable. */ }
  }

  function updateAccentControls(accent) {
    document.querySelectorAll('[data-tui-accent-select]').forEach((control) => {
      control.value = accent;
      control.dataset.accent = accent;
    });
  }

  function applyAccent(accent, options = {}) {
    const normalized = normalizeAccent(accent);
    root.dataset.accent = normalized;
    if (options.persist !== false) writeStoredAccent(normalized);
    updateAccentControls(normalized);
    window.dispatchEvent(new CustomEvent('tui:accentchange', { detail: { accent: normalized } }));
    return normalized;
  }

  function bindAccentControls(scope = document) {
    scope.querySelectorAll('[data-tui-accent-select]').forEach((control) => {
      if (control.dataset.tuiAccentBound === 'true') return;
      control.dataset.tuiAccentBound = 'true';
      control.addEventListener('change', (event) => applyAccent(event.currentTarget.value));
    });
    updateAccentControls(normalizeAccent(root.dataset.accent));
  }

  const initialAccent = normalizeAccent(readStoredAccent() || root.dataset.accent);
  applyAccent(initialAccent, { persist: false });

  const componentState = {
    bound: false,
    contextMenu: null
  };

  function getById(id) {
    return id ? document.getElementById(id) : null;
  }

  function resolveElement(target) {
    if (!target) return null;
    if (target instanceof Element) return target;
    if (typeof target !== 'string') return null;
    const byId = getById(target);
    if (byId) return byId;
    try { return document.querySelector(target); }
    catch (error) { return null; }
  }

  function emitComponentEvent(target, name, detail) {
    if (!target) return;
    target.dispatchEvent(new CustomEvent(name, {
      bubbles: true,
      detail
    }));
  }

  function setExpanded(trigger, expanded) {
    trigger.setAttribute('aria-expanded', String(expanded));
  }

  function toggleHiddenTarget(trigger, target, force) {
    if (!target) return false;
    const shouldOpen = typeof force === 'boolean' ? force : target.hidden;
    target.hidden = !shouldOpen;
    target.dataset.open = String(shouldOpen);
    if (trigger) setExpanded(trigger, shouldOpen);
    return shouldOpen;
  }

  function updateCollapsibleLabel(trigger, expanded) {
    if (!trigger) return;
    const label = expanded
      ? trigger.dataset.labelOpen
      : trigger.dataset.labelClosed;
    if (!label) return;
    const labelTarget = trigger.querySelector('[data-tui-collapsible-label]');
    if (labelTarget) labelTarget.textContent = label;
    else if (trigger.childElementCount === 0) trigger.textContent = label;
  }

  function setCollapsible(triggerTarget, panelTarget, force, options = {}) {
    const trigger = resolveElement(triggerTarget);
    const panel = resolveElement(panelTarget)
      || getById(trigger?.getAttribute('aria-controls'));
    if (!trigger || !panel) return false;
    const open = toggleHiddenTarget(trigger, panel, force);
    updateCollapsibleLabel(trigger, open);
    if (options.emit !== false) {
      emitComponentEvent(trigger, 'tui:collapsiblechange', {
        open,
        target: panel,
        targetId: panel.id || null
      });
    }
    return open;
  }

  function syncToggleState(toggle, pressed) {
    toggle.setAttribute('aria-pressed', String(pressed));
    toggle.classList.toggle('is-active', pressed);
  }

  function setToggle(toggleTarget, force, options = {}) {
    const toggle = resolveElement(toggleTarget);
    if (!toggle) return false;
    const group = toggle.closest('[data-tui-toggle-group]');
    const multiple = group?.dataset.tuiToggleGroup === 'multiple';
    const required = group?.dataset.tuiToggleRequired === 'true';
    const current = toggle.getAttribute('aria-pressed') === 'true';
    let pressed = typeof force === 'boolean' ? force : !current;

    if (group && !multiple) {
      if (required && current && !pressed) pressed = true;
      if (pressed) {
        group.querySelectorAll('[data-tui-toggle]').forEach((item) => {
          if (item !== toggle) syncToggleState(item, false);
        });
      }
    }

    syncToggleState(toggle, pressed);
    const value = toggle.dataset.value
      ?? toggle.dataset.range
      ?? toggle.value
      ?? toggle.textContent.trim();

    if (options.emit !== false) {
      emitComponentEvent(toggle, 'tui:togglechange', {
        pressed,
        value,
        group: group || null
      });
    }
    return pressed;
  }

  function setStatus(statusTarget, state = 'neutral', message = '', options = {}) {
    const status = resolveElement(statusTarget);
    if (!status) return null;
    const allowed = new Set(['neutral', 'success', 'warning', 'danger', 'info']);
    const normalized = allowed.has(state) ? state : 'neutral';
    ['success', 'warning', 'danger', 'info'].forEach((name) => {
      status.classList.remove(`tui-status-pill--${name}`);
    });
    status.classList.toggle('is-pulsing', Boolean(options.pulse));
    if (normalized !== 'neutral') status.classList.add(`tui-status-pill--${normalized}`);
    status.dataset.state = normalized;

    const textTarget = status.querySelector('[data-tui-status-text]');
    if (textTarget) textTarget.textContent = message;
    else if (status.childElementCount === 0) status.textContent = message;

    status.setAttribute('role', options.role || (normalized === 'danger' ? 'alert' : 'status'));
    status.setAttribute('aria-live', options.live || (normalized === 'danger' ? 'assertive' : 'polite'));
    if (options.emit !== false) {
      emitComponentEvent(status, 'tui:statuschange', {
        state: normalized,
        message
      });
    }
    return status;
  }

  function closeTransientMenus(except = null) {
    document.querySelectorAll('[data-tui-transient][data-open="true"]').forEach((menu) => {
      if (menu === except) return;
      menu.hidden = true;
      menu.dataset.open = 'false';
      const triggerId = menu.dataset.tuiTriggerId;
      const trigger = triggerId ? getById(triggerId) : null;
      if (trigger) setExpanded(trigger, false);
    });
  }

  function openDialog(target) {
    if (!target) return;
    if (typeof target.showModal === 'function') {
      if (!target.open) target.showModal();
    } else {
      target.hidden = false;
      target.dataset.open = 'true';
    }
  }

  function closeDialog(target) {
    if (!target) return;
    if (typeof target.close === 'function' && target.open) target.close();
    else {
      target.hidden = true;
      target.dataset.open = 'false';
    }
  }

  function getSonnerHost() {
    let host = document.querySelector('[data-tui-sonner]');
    if (!host) {
      host = document.createElement('div');
      host.className = 'tui-sonner';
      host.dataset.tuiSonner = '';
      host.setAttribute('aria-live', 'polite');
      host.setAttribute('aria-atomic', 'false');
      document.body.appendChild(host);
    }
    return host;
  }

  function showToast(options = {}) {
    const settings = typeof options === 'string' ? { title: options } : options;
    const toast = document.createElement('div');
    const variant = ['success', 'danger', 'warning'].includes(settings.variant)
      ? ` tui-toast--${settings.variant}`
      : '';
    toast.className = `tui-toast${variant}`;
    toast.setAttribute('role', settings.variant === 'danger' ? 'alert' : 'status');

    const icon = document.createElement('span');
    icon.textContent = settings.icon || (settings.variant === 'success' ? '✓' : settings.variant === 'danger' ? '!' : settings.variant === 'warning' ? '△' : '◆');
    icon.setAttribute('aria-hidden', 'true');

    const content = document.createElement('div');
    content.className = 'tui-toast__content';
    const title = document.createElement('div');
    title.className = 'tui-toast__title';
    title.textContent = settings.title || 'Notificação';
    content.appendChild(title);
    if (settings.description) {
      const description = document.createElement('div');
      description.className = 'tui-toast__description';
      description.textContent = settings.description;
      content.appendChild(description);
    }

    const close = document.createElement('button');
    close.className = 'tui-toast__close';
    close.type = 'button';
    close.textContent = '×';
    close.setAttribute('aria-label', 'Fechar notificação');
    close.addEventListener('click', () => toast.remove());

    toast.append(icon, content, close);
    getSonnerHost().appendChild(toast);
    const duration = Number(settings.duration ?? 4200);
    if (duration > 0) window.setTimeout(() => toast.remove(), duration);
    return toast;
  }

  function activateTab(trigger) {
    const tabs = trigger.closest('[data-tui-tabs]');
    if (!tabs) return;
    const target = getById(trigger.getAttribute('aria-controls') || trigger.dataset.tuiTab);
    tabs.querySelectorAll('[role="tab"]').forEach((tab) => {
      const selected = tab === trigger;
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
    });
    tabs.querySelectorAll('[role="tabpanel"]').forEach((panel) => {
      panel.hidden = panel !== target;
    });
  }

  function updateCarousel(carousel, nextIndex) {
    const track = carousel.querySelector('.tui-carousel__track');
    const slides = [...carousel.querySelectorAll('.tui-carousel__slide')];
    if (!track || !slides.length) return;
    const normalized = (nextIndex + slides.length) % slides.length;
    carousel.dataset.tuiCarouselIndex = String(normalized);
    track.style.transform = `translateX(-${normalized * 100}%)`;
    carousel.querySelectorAll('.tui-carousel__dot').forEach((dot, index) => {
      dot.setAttribute('aria-current', String(index === normalized));
    });
  }

  function selectCalendarDay(button) {
    const calendar = button.closest('[data-tui-calendar]');
    if (!calendar) return;
    calendar.querySelectorAll('.tui-calendar__day[aria-selected="true"]').forEach((day) => day.setAttribute('aria-selected', 'false'));
    button.setAttribute('aria-selected', 'true');
    calendar.dataset.value = button.dataset.value || button.textContent.trim();
    calendar.dispatchEvent(new CustomEvent('tui:calendarchange', {
      bubbles: true,
      detail: { value: calendar.dataset.value }
    }));
  }

  function handleCustomSelect(option) {
    const select = option.closest('[data-tui-select]');
    if (!select) return;
    const trigger = select.querySelector('[data-tui-select-trigger]');
    const menu = select.querySelector('[data-tui-select-menu]');
    select.querySelectorAll('[role="option"]').forEach((item) => item.setAttribute('aria-selected', String(item === option)));
    select.dataset.value = option.dataset.value ?? option.textContent.trim();
    if (trigger) {
      const label = trigger.querySelector('[data-tui-select-value]') || trigger;
      label.textContent = option.textContent.trim();
      setExpanded(trigger, false);
    }
    if (menu) {
      menu.hidden = true;
      menu.dataset.open = 'false';
    }
    select.dispatchEvent(new CustomEvent('tui:selectchange', {
      bubbles: true,
      detail: { value: select.dataset.value, label: option.textContent.trim() }
    }));
  }

  function handleComboboxInput(input) {
    const box = input.closest('[data-tui-combobox]');
    if (!box) return;
    const query = input.value.trim().toLocaleLowerCase();
    const menu = box.querySelector('[data-tui-combobox-menu]');
    if (menu) {
      menu.hidden = false;
      menu.dataset.open = 'true';
      menu.querySelectorAll('[role="option"]').forEach((option) => {
        option.hidden = !option.textContent.toLocaleLowerCase().includes(query);
      });
    }
  }

  function handleCommandInput(input) {
    const command = input.closest('[data-tui-command]');
    if (!command) return;
    const query = input.value.trim().toLocaleLowerCase();
    command.querySelectorAll('[data-tui-command-item]').forEach((item) => {
      item.hidden = !item.textContent.toLocaleLowerCase().includes(query);
    });
  }

  function sortDataTable(header) {
    const table = header.closest('table');
    const body = table?.tBodies?.[0];
    if (!body) return;
    const headers = [...header.parentElement.children];
    const column = headers.indexOf(header);
    const direction = header.getAttribute('aria-sort') === 'ascending' ? 'descending' : 'ascending';
    headers.forEach((item) => item.hasAttribute('aria-sort') && item.setAttribute('aria-sort', 'none'));
    header.setAttribute('aria-sort', direction);
    const rows = [...body.rows];
    rows.sort((a, b) => {
      const left = a.cells[column]?.textContent.trim() || '';
      const right = b.cells[column]?.textContent.trim() || '';
      const numericLeft = Number(left.replace(',', '.'));
      const numericRight = Number(right.replace(',', '.'));
      const comparison = Number.isFinite(numericLeft) && Number.isFinite(numericRight)
        ? numericLeft - numericRight
        : left.localeCompare(right, 'pt-BR', { numeric: true, sensitivity: 'base' });
      return direction === 'ascending' ? comparison : -comparison;
    });
    rows.forEach((row) => body.appendChild(row));
  }

  function openContextMenu(target, event) {
    const id = target.dataset.tuiContextTarget;
    const menu = getById(id);
    if (!menu) return;
    event.preventDefault();
    closeTransientMenus(menu);
    menu.hidden = false;
    menu.dataset.open = 'true';
    menu.style.left = `${Math.min(event.clientX, window.innerWidth - 230)}px`;
    menu.style.top = `${Math.min(event.clientY, window.innerHeight - 220)}px`;
    componentState.contextMenu = menu;
  }

  function bindComponents(scope = document) {
    if (!componentState.bound) {
      componentState.bound = true;

      document.addEventListener('click', (event) => {
        const target = event.target instanceof Element ? event.target : null;
        if (!target) return;

        const dialogOpen = target.closest('[data-tui-dialog-open]');
        if (dialogOpen) {
          openDialog(getById(dialogOpen.dataset.tuiDialogOpen));
          return;
        }

        const dialogClose = target.closest('[data-tui-dialog-close]');
        if (dialogClose) {
          closeDialog(dialogClose.closest('dialog, [data-tui-dialog]'));
          return;
        }

        const alertClose = target.closest('[data-tui-alert-close]');
        if (alertClose) {
          alertClose.closest('.tui-alert')?.remove();
          return;
        }

        const accordionTrigger = target.closest('[data-tui-accordion-trigger]');
        if (accordionTrigger) {
          const accordion = accordionTrigger.closest('[data-tui-accordion]');
          const panel = getById(accordionTrigger.getAttribute('aria-controls'));
          const willOpen = panel?.hidden ?? false;
          if (accordion?.dataset.tuiAccordion === 'single' && willOpen) {
            accordion.querySelectorAll('[data-tui-accordion-trigger][aria-expanded="true"]').forEach((other) => {
              if (other === accordionTrigger) return;
              const otherPanel = getById(other.getAttribute('aria-controls'));
              toggleHiddenTarget(other, otherPanel, false);
            });
          }
          toggleHiddenTarget(accordionTrigger, panel);
          return;
        }

        const collapsibleTrigger = target.closest('[data-tui-collapsible-trigger]');
        if (collapsibleTrigger) {
          setCollapsible(collapsibleTrigger);
          return;
        }

        const menuTrigger = target.closest('[data-tui-menu-trigger], [data-tui-popover-trigger], [data-tui-select-trigger]');
        if (menuTrigger) {
          const id = menuTrigger.getAttribute('aria-controls') || menuTrigger.dataset.tuiMenuTrigger || menuTrigger.dataset.tuiPopoverTrigger;
          const menu = getById(id);
          const opening = menu?.hidden ?? false;
          closeTransientMenus(opening ? menu : null);
          if (menu) {
            if (!menuTrigger.id) menuTrigger.id = `tui-trigger-${Math.random().toString(36).slice(2, 9)}`;
            menu.dataset.tuiTriggerId = menuTrigger.id;
            menu.dataset.tuiTransient = '';
            toggleHiddenTarget(menuTrigger, menu, opening);
          }
          return;
        }

        const selectOption = target.closest('[data-tui-select-option]');
        if (selectOption) {
          handleCustomSelect(selectOption);
          return;
        }

        const comboboxOption = target.closest('[data-tui-combobox-option]');
        if (comboboxOption) {
          const box = comboboxOption.closest('[data-tui-combobox]');
          const input = box?.querySelector('[data-tui-combobox-input]');
          if (input) input.value = comboboxOption.textContent.trim();
          box?.querySelectorAll('[role="option"]').forEach((item) => item.setAttribute('aria-selected', String(item === comboboxOption)));
          const menu = box?.querySelector('[data-tui-combobox-menu]');
          if (menu) menu.hidden = true;
          return;
        }

        const tab = target.closest('[role="tab"]');
        if (tab && tab.closest('[data-tui-tabs]')) {
          activateTab(tab);
          return;
        }

        const carouselButton = target.closest('[data-tui-carousel-action]');
        if (carouselButton) {
          const carousel = carouselButton.closest('[data-tui-carousel]');
          const current = Number(carousel?.dataset.tuiCarouselIndex || 0);
          const action = carouselButton.dataset.tuiCarouselAction;
          const desired = action === 'next' ? current + 1 : action === 'prev' ? current - 1 : Number(action);
          if (carousel) updateCarousel(carousel, desired);
          return;
        }

        const calendarDay = target.closest('[data-tui-calendar-day]');
        if (calendarDay) {
          selectCalendarDay(calendarDay);
          return;
        }

        const toggle = target.closest('[data-tui-toggle]');
        if (toggle) {
          setToggle(toggle);
          return;
        }

        const toastTrigger = target.closest('[data-tui-toast]');
        if (toastTrigger) {
          showToast({
            title: toastTrigger.dataset.title || 'Operação concluída',
            description: toastTrigger.dataset.description || '',
            variant: toastTrigger.dataset.variant || ''
          });
          return;
        }

        const toastClose = target.closest('.tui-toast__close');
        if (toastClose) {
          toastClose.closest('.tui-toast')?.remove();
          return;
        }

        const sortableHeader = target.closest('[data-tui-sort]');
        if (sortableHeader) {
          sortDataTable(sortableHeader);
          return;
        }

        const rowCheckbox = target.closest('[data-tui-row-select]');
        if (rowCheckbox) {
          const row = rowCheckbox.closest('tr');
          if (row) row.dataset.selected = String(rowCheckbox.checked);
          return;
        }

        if (!target.closest('[data-tui-transient]') && !target.closest('[data-tui-menu-trigger], [data-tui-popover-trigger], [data-tui-select-trigger]')) {
          closeTransientMenus();
        }
      });

      document.addEventListener('input', (event) => {
        const target = event.target;
        if (!(target instanceof HTMLInputElement)) return;
        if (target.matches('[data-tui-combobox-input]')) handleComboboxInput(target);
        if (target.matches('[data-tui-command-input]')) handleCommandInput(target);
        if (target.matches('[data-tui-slider]')) {
          const output = getById(target.getAttribute('aria-describedby') || target.dataset.tuiSliderOutput);
          if (output) output.textContent = target.value;
        }
        if (target.matches('[data-tui-otp-slot]')) {
          target.value = target.value.replace(/\D/g, '').slice(0, 1);
          if (target.value) {
            const slots = [...target.closest('[data-tui-otp]')?.querySelectorAll('[data-tui-otp-slot]') || []];
            const next = slots[slots.indexOf(target) + 1];
            next?.focus();
          }
        }
      });

      document.addEventListener('keydown', (event) => {
        const target = event.target instanceof Element ? event.target : null;
        if (!target) return;
        if (event.key === 'Escape') {
          closeTransientMenus();
          document.querySelectorAll('dialog[open]').forEach((dialog) => closeDialog(dialog));
        }
        if (target.matches('[data-tui-otp-slot]') && event.key === 'Backspace' && !target.value) {
          const slots = [...target.closest('[data-tui-otp]')?.querySelectorAll('[data-tui-otp-slot]') || []];
          slots[slots.indexOf(target) - 1]?.focus();
        }
        if (target.matches('[role="tab"]') && target.closest('[data-tui-tabs]') && ['ArrowLeft', 'ArrowRight'].includes(event.key)) {
          event.preventDefault();
          const tabs = [...target.closest('[role="tablist"]')?.querySelectorAll('[role="tab"]') || []];
          const offset = event.key === 'ArrowRight' ? 1 : -1;
          const next = tabs[(tabs.indexOf(target) + offset + tabs.length) % tabs.length];
          next?.focus();
          if (next) activateTab(next);
        }
      });

      document.addEventListener('contextmenu', (event) => {
        const target = event.target instanceof Element ? event.target.closest('[data-tui-context-target]') : null;
        if (target) openContextMenu(target, event);
      });

      window.addEventListener('resize', () => closeTransientMenus());
    }

    scope.querySelectorAll('[data-tui-accordion-trigger], [data-tui-collapsible-trigger], [data-tui-menu-trigger], [data-tui-popover-trigger], [data-tui-select-trigger]').forEach((trigger) => {
      if (!trigger.hasAttribute('aria-expanded')) trigger.setAttribute('aria-expanded', 'false');
      if (trigger.matches('[data-tui-collapsible-trigger]')) {
        const panel = getById(trigger.getAttribute('aria-controls'));
        updateCollapsibleLabel(trigger, panel ? !panel.hidden : false);
      }
    });
    scope.querySelectorAll('[data-tui-toggle]').forEach((toggle) => {
      syncToggleState(toggle, toggle.getAttribute('aria-pressed') === 'true');
    });
    scope.querySelectorAll('[data-tui-carousel]').forEach((carousel) => updateCarousel(carousel, Number(carousel.dataset.tuiCarouselIndex || 0)));
    scope.querySelectorAll('[data-tui-slider]').forEach((slider) => {
      const output = getById(slider.getAttribute('aria-describedby') || slider.dataset.tuiSliderOutput);
      if (output) output.textContent = slider.value;
    });
    return scope;
  }

  const toastApi = Object.freeze({ show: showToast, dismissAll: () => getSonnerHost().replaceChildren() });
  const componentApi = Object.freeze({
    bind: bindComponents,
    open: (target) => openDialog(resolveElement(target)),
    close: (target) => closeDialog(resolveElement(target)),
    status: setStatus,
    setToggle,
    setCollapsible,
    toast: toastApi
  });

  const initialPreference = getInitialPreference();
  applyTheme(initialPreference, { persist: false });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => { bindControls(); bindAccentControls(); bindComponents(); }, { once: true });
  } else {
    bindControls();
    bindAccentControls();
    bindComponents();
  }

  if (typeof mediaQuery.addEventListener === 'function') {
    mediaQuery.addEventListener('change', handleSystemThemeChange);
  } else {
    mediaQuery.addListener(handleSystemThemeChange);
  }

  const themeApi = Object.freeze({
    set: applyTheme,
    cycle: cycleTheme,
    bind: bindControls,
    getPreference: () => normalizeTheme(root.dataset.themePreference),
    getResolvedTheme: () => root.dataset.theme || resolveTheme(getInitialPreference())
  });

  const accentApi = Object.freeze({
    set: applyAccent,
    bind: bindAccentControls,
    get: () => normalizeAccent(root.dataset.accent)
  });

  const frameworkApi = Object.freeze({
    version: VERSION,
    mountStyles,
    removeStyles,
    css: CSS_TEXT,
    theme: themeApi,
    accent: accentApi,
    components: componentApi,
    toast: toastApi
  });

  window.TUITheme = themeApi;
  window.TUIAccent = accentApi;
  window.TUIComponents = componentApi;
  window.TUIToast = toastApi;
  window.TUIFramework = frameworkApi;
})(window, document);
