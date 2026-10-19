# Github Pages

Este é o repositório do meu site pessoal e portfólio, desenvolvido com **React** + **Vite** e hospedado gratuitamente no **GitHub Pages**.

**Acesse o site:** [joaovlara.github.io](https://joaovlara.github.io)

---

## Tecnologias Utilizadas

- **[React](https://react.dev/):** Biblioteca para construção de interfaces.
- **[Vite](https://vitejs.dev/):** Bundler e ambiente de desenvolvimento ultrarrápido.
- **[gh-pages](https://www.npmjs.com/package/gh-pages):** Automação de deploy dos arquivos estáticos para o GitHub Pages.

---

## Como Atualizar o Site no Ar (Deploy)

Sempre que fizer alterações no código e quiser publicar a versão nova:

1. Salve todos os arquivos modificados.
2. Execute o comando:
```bash
npm run deploy

```

> **Nota:** Esse comando executa o `vite build` e envia a pasta `dist` gerada para a branch `gh-pages` do seu repositório.

---

## O que este projeto suporta?

### Design e Interface

*  **Tailwind CSS:** Para estilizar a aplicação com rapidez e utilitários modernos.
*  **Lucide React:** Para adicionar ícones (`npm install lucide-react`).
*  **Framer Motion:** Para animações suaves nos cards e títulos.

### Funcionalidades

*  **Integração com API do GitHub:** Buscar e exibir automaticamente os seus projetos públicos a partir de `https://api.github.com/users/joaovlara/repos`.
*  **Formulário de Contato:** Usar **Web3Forms** ou **Formspree** para receber mensagens diretamente no e-mail sem precisar de um servidor backend.
*  **Dark / Light Mode:** Alternância de tema escuro e claro.
*  **Roteamento:** Adicionar páginas de detalhes usando `react-router-dom` (com `HashRouter`).
