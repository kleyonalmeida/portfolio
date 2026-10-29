/* Local PT/EN translations. No external service, navigation or animation restart. */
(function(){
'use strict';
const channel='portfolio-portifolio-v1',isTop=window===window.parent;
const english={
 "Ir para os projetos": "Skip to projects",
 "Carregando portfólio para apresentação": "Loading portfolio for presentation",
 "Engenheiro de Software": "Software Engineer",
 "EXPLORAR": "EXPLORE",
 "Sou Engenheiro de Software com mais de 2 anos de experiência no desenvolvimento de sistemas, APIs e integrações, atuando desde a definição arquitetural até a implementação e evolução de soluções.": "I am a Software Engineer with over 2 years of experience developing systems, APIs and integrations, working from architectural design through implementation and the ongoing evolution of solutions.",
 "Minha atuação combina fundamentos de Engenharia de Software — arquitetura, modelagem, testes e qualidade — com a aplicação de Inteligência Artificial para otimizar processos de desenvolvimento e construir novas funcionalidades.": "My work combines Software Engineering fundamentals — architecture, modeling, testing and quality — with Artificial Intelligence to improve development processes and build new features.",
 "Tenho experiência com C#/.NET, ASP.NET Core, sistemas em tempo real, integrações com serviços externos e padrões como Clean Architecture, DDD e CQRS.": "I have experience with C#/.NET, ASP.NET Core, real-time systems, external service integrations and patterns such as Clean Architecture, DDD and CQRS.",
 "Também exploro soluções baseadas em LLMs, RAG e automações, buscando aplicar essas tecnologias a problemas reais.": "I also explore solutions based on LLMs, RAG and automation, applying these technologies to real-world problems.",
 "MOVA O CURSOR.": "MOVE YOUR CURSOR.",
 "DESCUBRA OUTRA CAMADA.": "REVEAL ANOTHER LAYER.",
 "ROLE PARA EXPLORAR": "SCROLL TO EXPLORE",
 "Ative o JavaScript para visualizar as cenas interativas.": "Enable JavaScript to view the interactive scenes.",
 "Carregamento do portfólio": "Portfolio loading",
 "Voltar ao início": "Back to the top",
 "Engenheiro de Software — início": "Software Engineer — home",
 "Retrato interativo. Mova o cursor sobre a foto para revelar outra camada.": "Interactive portrait. Move your cursor over the photo to reveal another layer.",
 "Retrato 3D com revelação pelo cursor e linhas cinzas": "3D portrait with cursor reveal and gray lines",
 "Exploração visual com cards 3D e transições na rolagem": "Visual exploration with 3D cards and scroll transitions",
 "Galeria experimental de cards, imagens e composições em movimento": "Project gallery with animated images and compositions",
 "Projetos": "Projects",
 "PROJETOS": "PROJECTS",
 "Do domínio à entrega": "From domain to delivery",
 "Ao lado estão alguns dos meus projetos e ferramentas que refletem meu trabalho com backend, arquitetura e segurança.": "Here are some of my projects and tools that reflect my work in backend development, architecture and security.",
 "Não se trata de apenas fazer o código funcionar, e sim de resolver uma dor.": "The goal is to solve a real problem, beyond simply making the code work.",
 "01 / Gestão empresarial": "01 / Business management",
 "Gestão de ponta a ponta para fábricas e microempreendedores: insumos, fichas técnicas, produção, estoque, orçamentos, pedidos e financeiro. API em .NET 10 com Clean Architecture, CQRS e testes, com frontend Flutter em evolução.": "End-to-end management for factories and small businesses: supplies, production recipes, manufacturing, inventory, quotes, orders and finances. A .NET 10 API with Clean Architecture, CQRS and tests, with a Flutter frontend under development.",
 "Conhecer plataforma ↗": "Explore platform ↗",
 "02 / OSINT e análise de segurança": "02 / OSINT and security analysis",
 "Ferramenta CLI para OSINT, reconhecimento e análise de segurança. Reúne descoberta de subdomínios, varredura TCP, identificação de tecnologias e consulta de CVEs, com execução concorrente e distribuição em Native AOT.": "A CLI tool for OSINT, reconnaissance and security analysis. It combines subdomain discovery, TCP scanning, technology fingerprinting and CVE lookups, with concurrent execution and Native AOT distribution.",
 ".NET 10 · Concorrência · Native AOT": ".NET 10 · Concurrency · Native AOT",
 "Ver repositório ↗": "View repository ↗",
 "03 / Auditoria defensiva Linux": "03 / Defensive Linux auditing",
 "Auditor defensivo para Linux que identifica componentes e correlaciona versões com CVEs, severidade CVSS e probabilidade EPSS. Gera relatórios de risco priorizados no terminal ou em JSON, em um executável Native AOT.": "A defensive Linux auditor that detects components and correlates versions with CVEs, CVSS severity and EPSS probability. It produces prioritized risk reports in the terminal or JSON, delivered as a Native AOT executable.",
 "TECNOLOGIAS": "TECHNOLOGIES",
 "APIs e sistemas com C# e .NET.": "APIs and systems with C# and .NET.",
 "Engenharia de Software para construir, integrar e evoluir sistemas.": "Software Engineering to build, integrate and evolve systems.",
 "Minha base é C#/.NET e ASP.NET Core: APIs REST, Entity Framework Core e dados relacionais com SQL Server e MySQL. Uso SignalR e WebSockets em integrações em tempo real, com Docker, Git e Linux no fluxo de desenvolvimento.": "My core stack is C#/.NET and ASP.NET Core: REST APIs, Entity Framework Core and relational data with SQL Server and MySQL. I use SignalR and WebSockets for real-time integrations, with Docker, Git and Linux in my development workflow.",
 "Organizo minhas soluções aplicando Clean Architecture, Domain-Driven Design (DDD) e padrões como CQRS (MediatR) e SOLID. A qualidade e a resiliência das entregas são garantidas por testes automatizados (TDD com xUnit), revisões de código rigorosas e a aplicação de práticas de AppSec (Security-by-design).": "I organize my solutions using Clean Architecture, Domain-Driven Design (DDD), CQRS (MediatR) and SOLID. I build quality and resilience into deliveries through automated tests (TDD with xUnit), thorough code reviews and AppSec practices (security by design).",
 "Utilizo Inteligência Artificial de forma estratégica para aprofundar a compreensão do domínio, explorar alternativas de arquitetura e acelerar a implementação. Eu defino o contexto, os critérios técnicos e a lógica de negócio, sempre revisando o código produzido e validando com testes. A IA acelera o caminho até o objetivo, mas as decisões e a aplicação dos fundamentos de engenharia continuam sendo estritamente minhas.": "I use Artificial Intelligence strategically to deepen my understanding of the domain, explore architectural alternatives and accelerate implementation. I define the context, technical criteria and business logic, always reviewing the generated code and validating it with tests. AI speeds up progress toward the goal, while the decisions and application of engineering fundamentals remain my responsibility.",
 "Também desenvolvo automações e integrações com Python, Ollama e LLMs, explorando RAG para conectar modelos a informações relevantes ao negócio.": "I also develop automation and integrations with Python, Ollama and LLMs, exploring RAG to connect models with information relevant to the business.",
 "Trajetória profissional": "Professional journey",
 "EXPERIÊNCIAS": "EXPERIENCE",
 "Fev 2026 — atual": "Feb 2026 — present",
 "Promoção interna a partir de Software Engineer.": "Internal promotion from Software Engineer.",
 "Soluções corporativas e APIs RESTful com C# e ASP.NET Core, regras de negócio e integrações entre serviços.": "Corporate solutions and RESTful APIs with C# and ASP.NET Core, business rules and service integrations.",
 "Integrações com Meta Conversions API, Telegram e landing pages para acompanhar leads e conversões.": "Integrations with Meta Conversions API, Telegram and landing pages to track leads and conversions.",
 "Comunicação em tempo real com SignalR e WebSockets, gerenciamento de salas e isolamento de contexto.": "Real-time communication with SignalR and WebSockets, room management and context isolation.",
 "Plataforma de governança para comunicação interna, operação e gestão de projetos.": "A governance platform for internal communication, operations and project management.",
 "Estruturo contexto para agentes de IA com Markdown e AGENTS.md, defino etapas e critérios técnicos, reviso código e valido as entregas. Na atuação anterior como Software Engineer no grupo, desenvolvi e mantive APIs, automatizei processos, organizei componentes com SOLID e contribuí para a evolução arquitetural, resolvendo problemas de confiabilidade, desempenho e consistência de dados.": "I structure context for AI agents using Markdown and AGENTS.md, define stages and technical criteria, review code and validate deliveries. In my previous Software Engineer role within the group, I developed and maintained APIs, automated processes, organized components with SOLID and contributed to architectural improvements, addressing reliability, performance and data consistency.",
 "Ago 2024 — Fev 2026": "Aug 2024 — Feb 2026",
 "Mercantil e Serviços": "Trade and Services",
 "Arquitetura e desenvolvimento de solução de IA local com Python, Ollama e LLMs.": "Architecture and development of a local AI solution using Python, Ollama and LLMs.",
 "Desenvolvimento de pipelines de extração, transformação e edição de arquivos em grande escala, reduzindo operações manuais e automatizando tarefas repetitivas.": "Development of large-scale file extraction, transformation and editing pipelines, reducing manual work and automating repetitive tasks.",
 "Integração de modelos locais aos fluxos internos, sem APIs externas de inferência.": "Integration of local models into internal workflows, without external inference APIs.",
 "Administração e manutenção de SQL Server, com persistência de metadados, registros de processamento, logs de auditoria e controle dos arquivos processados. Otimização de consultas SQL, modelagem de dados e integridade referencial, conectando processamento, IA local e persistência.": "SQL Server administration and maintenance, including metadata persistence, processing records, audit logs and tracking of processed files. SQL query optimization, data modeling and referential integrity, connecting processing, local AI and persistence.",
 "Python · Ollama · LLMs · SQL Server · SQL · Pipelines de dados": "Python · Ollama · LLMs · SQL Server · SQL · Data pipelines",
 "FORMAÇÃO": "EDUCATION",
 "Bacharelado em Engenharia de Software": "Bachelor’s degree in Software Engineering",
 "IDIOMAS": "LANGUAGES",
 "Português nativo": "Native Portuguese",
 "Inglês intermediário": "Intermediate English",
 "Vamos conversar": "Let’s talk",
 "CONTATOS": "CONTACT",
 "Sou Engenheiro de Software com foco em backend, APIs e integrações. Transformo necessidades em soluções com arquitetura clara, código testado e evolução contínua. Busco excelência por meio de decisões fundamentadas, revisão cuidadosa e atenção à confiabilidade, ao desempenho e à segurança. Utilizo a Inteligência Artificial como motor de produção, com a orquestração, o direcionamento técnico e a validação sob minha responsabilidade.": "I am a Software Engineer focused on backend development, APIs and integrations. I turn needs into solutions with clear architecture, tested code and continuous improvement. I pursue excellence through informed decisions, careful reviews and attention to reliability, performance and security. I use Artificial Intelligence as a production engine, with orchestration, technical direction and validation under my responsibility.",
 "Currículo PDF": "Résumé PDF (Portuguese)",
 "Tel: (75) 99180-1820": "Phone: +55 (75) 99180-1820",
 "Conhecer plataforma: CorpCore": "Explore platform: CorpCore",
 "Ver repositório: Anubis": "View repository: Anubis",
 "Ver repositório: Heimdall": "View repository: Heimdall",
 "Contato e currículo": "Contact and résumé",
 "Kleyon Almeida, Software Engineer. Backend C#/.NET, arquitetura, APIs, integrações e inteligência artificial aplicada.": "Kleyon Almeida, Software Engineer. C#/.NET backend development, architecture, APIs, integrations and applied artificial intelligence."
};
const originalText=new WeakMap(),originalAttributes=new WeakMap();
let language='pt';
function translate(value){return language==='en'?(english[value]??value):value}
function apply(){
 document.documentElement.lang=language==='en'?'en':'pt-BR';
 const walk=document.createTreeWalker(document.body||document.documentElement,NodeFilter.SHOW_TEXT);
 while(walk.nextNode()){
  const node=walk.currentNode;if(node.parentElement?.closest('script,style,#language-toggle'))continue;
  if(!originalText.has(node))originalText.set(node,node.nodeValue);
  const original=originalText.get(node),key=original.trim();
  if(key&&english[key])node.nodeValue=original.replace(key,translate(key));
 }
 for(const node of document.querySelectorAll('[aria-label],[title],[alt],meta[name="description"]')){
  if(node.id==='language-toggle')continue;
  let saved=originalAttributes.get(node);if(!saved){saved={};for(const attribute of ['aria-label','title','alt','content'])if(node.hasAttribute(attribute))saved[attribute]=node.getAttribute(attribute);originalAttributes.set(node,saved)}
  for(const [attribute,value]of Object.entries(saved))node.setAttribute(attribute,translate(value));
 }
 const button=document.getElementById('language-toggle');if(button){button.textContent=language==='en'?'PT':'EN';button.setAttribute('aria-label',language==='en'?'Switch to Portuguese':'Mudar para inglês');button.setAttribute('title',language==='en'?'Português':'English');button.setAttribute('aria-pressed',String(language==='en'))}
 window.dispatchEvent(new CustomEvent('portifolio-language',{detail:language}));
}
function send(frame){frame.contentWindow?.postMessage({channel,type:'language',language},'*')}
function setLanguage(value){language=value==='en'?'en':'pt';apply();if(isTop){try{localStorage.setItem('portfolio-language',language)}catch{}for(const frame of document.querySelectorAll('iframe'))send(frame)}}
window.PortifolioI18n={setLanguage,get language(){return language}};
if(isTop){
 try{language=localStorage.getItem('portfolio-language')==='en'?'en':'pt'}catch{}
 document.getElementById('language-toggle')?.addEventListener('click',()=>setLanguage(language==='pt'?'en':'pt'));
 for(const frame of document.querySelectorAll('iframe'))frame.addEventListener('load',()=>send(frame));
 setLanguage(language);
}else window.addEventListener('message',event=>{if(event.source===parent&&event.data?.channel===channel&&event.data.type==='language')setLanguage(event.data.language)});
})();
