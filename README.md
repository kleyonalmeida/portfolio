# Kleyon Almeida — Portfólio

Abra `index.html` ou `Abrir.cmd`. Não é necessário executar um build nem ter acesso à internet.

## Estrutura

- `index.html`: cabeçalho, apresentação e integração da rolagem.
- `assets/sections/index.html`: conteúdo de Projetos, Tecnologias, Experiências e Contatos.
- `assets/sections/portfolio.css`: estilos usados por essas seções.
- `assets/hero/index.html`: retrato, robô e textura de ruído usados no efeito.
- `src/hero-runtime.js`, `src/project-scene.js`: efeitos do retrato e dos dois prints.
- `src/section-runtime.js`: enquadramento, transições e comunicação com a rolagem principal.
- `src/portifolio.js`, `src/scroll-timeline.js`, `src/smooth-scroll.js`: rolagem suave e etapas de leitura.
- `src/robot-contours.js`, `src/skull-wireframe.js`: contornos e holograma do rosto robótico.
- `assets/shared/visuals.js`: dependências gráficas e efeitos utilizados, isolados dos sites de referência.
- `assets/fonts/`: somente as duas fontes utilizadas.
- `assets/Kleyon-Almeida.pdf`: currículo vinculado em Contatos.

As cinco imagens raster utilizadas estão incorporadas nos documentos das respectivas cenas, uma vez cada: retrato, robô, ruído, CorpCore e Sendium. Os ícones são SVGs incorporados. Não há mais registro de recursos por blobs nem arquivos dos sites completos.

O conteúdo agora está diretamente no HTML; não existe código montando um site antigo para depois esconder ou substituir suas seções. Os projetos originais e os backups ficam fora desta pasta. Não reutilize o antigo build.py, que copiava os catálogos completos.

## Idiomas

O botão EN/PT alterna os textos da página e guarda a preferência no navegador. As traduções locais ficam em `src/i18n.js`; ao editar um texto em português no HTML, atualize também sua entrada em inglês. Não há dependência de um serviço externo de tradução. O currículo PDF permanece em português, identificado no link em inglês.
