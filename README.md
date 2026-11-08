# Maxson Systems Lab

Portfólio estático para GitHub Pages. A vitrine é editada em `app.js`; a Action busca dados públicos dos repositórios e publica o site em cada push para `main`, diariamente e por execução manual. A atualização ocorre no artefato de publicação, sem criar commits automáticos. Se a API falhar, o deploy falha e a versão anterior continua publicada.

## Executar localmente

Execute `python3 -m http.server 8000` nesta pasta e acesse `http://localhost:8000`. Para atualizar os dados localmente, execute `node scripts/update-repositories.mjs` (opcionalmente com `GITHUB_TOKEN` no ambiente).

## Publicação

Envie o repositório ao GitHub, configure **Settings → Pages → Build and deployment → Source: GitHub Actions**, e execute o workflow ou faça push para `main`. Um repositório chamado `maxsonferovante.github.io` publica na raiz do domínio; outro nome publica em um caminho correspondente ao nome do repositório. Todos os recursos usam caminhos relativos.
