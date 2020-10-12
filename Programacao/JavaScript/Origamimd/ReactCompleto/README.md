# Curso de React Completo - [Origamid](https://www.origamid.com/curso/react-completo/) - Em andamento

**Modulos**

- [Ferramentas](#ferramentas)

**React para Iniciantes**

- [Adicionar React (sem NPM - Prototipagem)](/React-para-Iniciantes)

---

## Ferramentas

**Ambiente**

- [Node.js / NPM](https://nodejs.org/en/download/)
- [Git](https://git-scm.com/downloads)
- [Visual Studio Code](https://code.visualstudio.com/)
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) - Chrome
- [React Developer Tools](https://addons.mozilla.org/pt-BR/firefox/addon/react-devtools/) - Firefox

**Fontes**

- [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono?query=ibm+plex+mono)

**VS Code Extençôes**

- **Origamid Next Theme**: Tema para Visual Studio Code da Origamid (Não funciona no 32bits)
- **Live Server**: Emula um Servidor com LiveReload
- **Color Highlight**: Ajuda na identificação de cores no código (#fff) ficará branco
- **Prettier**: Formata a sintaxe do código para ficar mais legível e organizado
- **ES7 React/Redux/GraphQL snippets**: Snippets para React (Sugestôes, autocomplete etc...)

**VS Code Configuração**

> CTRL/CMD + SHIFT + P > Open Settings (JSON)

```
{
  "editor.fontFamily": "IBM Plex Mono, Monaco, Courier New, monospace",
  "editor.fontSize": 15,
  "editor.lineHeight": 26,
  "editor.tabSize": 2,
  "editor.tabCompletion": "on",
  "editor.wordWrap": "on",
  "workbench.activityBar.visible": true,
  "liveServer.settings.donotShowInfoMsg": true,
  "liveServer.settings.donotVerifyTags": true,
  "explorer.confirmDragAndDrop": false,
  "diffEditor.renderSideBySide": true,
  "editor.formatOnSave": true,
  "html.autoClosingTags": false,
  "editor.colorDecorators": false,
  "editor.autoClosingBrackets": "always",
  "editor.autoClosingQuotes": "always",
  "prettier.singleQuote": true,
  "files.associations": {
    "*.js": "javascriptreact"
  },
  "editor.minimap.renderCharacters": false,
  "breadcrumbs.enabled": false,
  "telemetry.enableCrashReporter": false,
  "telemetry.enableTelemetry": false,
  "color-highlight.markerType": "dot-before",
  "editor.renderWhitespace": "selection",
  "workbench.statusBar.visible": true,
  "prettier.trailingComma": "all",
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "explorer.sortOrder": "default",
  "window.title": "${activeEditorMedium}${separator}${rootName}",
  "window.newWindowDimensions": "inherit",
  "workbench.colorTheme": "Origamid Next",
  "workbench.iconTheme": "origamid-next-icons",
  "html.format.wrapAttributes": "auto",
  "html.format.wrapLineLength": 0,
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features"
  },
}
```
