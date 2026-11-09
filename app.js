const projects = [
 {repo:'euterpe-local-transcription', title:'Euterpe', category:'FERRAMENTAS / IA', icon:'♫', description:'Servidor MCP em Rust para conversão de vídeo e transcrição local de áudio com whisper.cpp.', tags:['Rust','MCP','whisper.cpp']},
 {repo:'sonic-route', title:'Sonic Route', category:'ÁUDIO / MACOS', icon:'▥', description:'Controle de volume e roteamento de áudio por aplicação no macOS.', tags:['Swift','Core Audio'], status:'PROTÓTIPO'},
 {repo:'episodic-app-web', title:'Episodic', category:'PRODUTO / CLOUD', icon:'▣', description:'Uma biblioteca pessoal para acompanhar séries, episódios e próximos lançamentos.', tags:['Next.js','Rust','AWS'], extra:[['Backend','episodic-app-backend'],['Infra','episodic-app-infra-cloud']]},
 {repo:'alpaca-extfs-for-mac', title:'Alpaca ExtFS', category:'SISTEMAS / FILESYSTEM', icon:'▤', description:'Driver Ext4 para leitura e escrita no macOS, com integração ao Finder.', tags:['Rust','macFUSE']},
 {repo:'SaabAudioMixingConsoleStreaming', title:'Saab Audio Console', category:'ÁUDIO / TEMPO REAL', icon:'≋', description:'Console distribuído para streaming e controle de áudio entre macOS e Android.', tags:['Rust','UDP','Android']},
 {repo:'dota-collection-tool', title:'Dota Collection Tool', category:'DADOS / GAMES', icon:'⌖', description:'Coleta e organiza eventos de partidas com CLI, interface desktop e SQLite.', tags:['Rust','SQLite']},
 {repo:'memory-for-agents-llm', title:'Agent Memory', category:'FERRAMENTAS / IA', icon:'✳', description:'Arquitetura de memória versionada para agentes de programação e seus fluxos de trabalho.', tags:['MCP','Rust','Python']}
];
const grid=document.querySelector('#project-grid');
function render(data={}) { grid.innerHTML=projects.map((p,i)=>{const d=data.repositories?.[p.repo]; const links=(p.extra||[]).map(([name,repo])=>`<a href="https://github.com/maxsonferovante/${repo}">${name} ↗</a>`).join('');return `<article class="card"><div class="card-top"><span class="card-number">0${i+1} / ${p.category}</span><span class="project-icon icon-${i}">${p.icon}</span></div><h3>${p.title}</h3><p>${p.description}</p><div class="tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}${p.status?`<span class="status">${p.status}</span>`:''}</div><div class="card-bottom"><a href="${d?.html_url||`https://github.com/maxsonferovante/${p.repo}`}">VER REPOSITÓRIO ↗</a><span>${d?`★ ${d.stargazers_count}`:'↗'}</span></div>${links?`<div class="extra">${links}</div>`:''}</article>`}).join(''); if(data.updated_at) document.querySelector('#updated').textContent=`Dados do GitHub atualizados em ${new Date(data.updated_at).toLocaleDateString('pt-BR', {timeZone:'America/Sao_Paulo'})}.`; }
render(); fetch('data/repositories.json').then(r=>r.ok?r.json():{}).then(data=>{render(data); if (typeof applyLanguage === 'function') applyLanguage();}).catch(()=>{});
const heroActions = document.querySelector('.hero .actions');
const linkedin = document.createElement('a');
linkedin.className = 'btn secondary';
linkedin.href = 'https://www.linkedin.com/in/maxson-almeida/';
linkedin.textContent = 'LINKEDIN ↗';
heroActions.append(linkedin);
const portrait = document.createElement('div');
portrait.className = 'profile-pixel';
portrait.innerHTML = '<img src="https://avatars.githubusercontent.com/u/10967077?v=4" alt="Foto de perfil de Maxson Ferovante no GitHub"><span>MAXSON / PLAYER 01</span>';
document.querySelector('.hero-copy').prepend(portrait);
const caseLinks = document.createElement('a');
caseLinks.href = '#cases'; caseLinks.className = 'text-link case-jump';
caseLinks.textContent = 'CONHECER OS ESTUDOS DE CASO ↓';
document.querySelector('#project-grid').after(caseLinks);
const translations = {
 'Ir para projetos':'Skip to projects','Projetos':'Projects','Sobre':'About','Contato ↗':'Contact ↗',
 ' ENGENHARIA DE SOFTWARE ':' SOFTWARE ENGINEERING ',' PORTFÓLIO':' PORTFOLIO','Construindo':'Building','sistemas':'systems',' que':' that','fazem acontecer':'make things happen',
 'Olá, sou Maxson. Desenvolvo APIs, aplicações e ferramentas que conectam dados, áudio e infraestrutura cloud.':'Hi, I’m Maxson. I build APIs, applications and tools connecting data, audio and cloud infrastructure.',
 'EXPLORAR PROJETOS ':'EXPLORE PROJECTS ','VER GITHUB ↗':'VIEW GITHUB ↗','FIG. 01 / UM LUGAR PARA CONSTRUIR':'FIG. 01 / A PLACE TO BUILD',
 '01 / TRABALHOS SELECIONADOS':'01 / SELECTED WORK','Projetos em ':'Featured ','destaque':'projects',
 'Uma seleção de sistemas, produtos e experimentos. Cada projeto abre uma porta para o código e suas decisões.':'A selection of systems, products and experiments. Explore the code and the decisions behind each project.',
 'CONHECER OS ESTUDOS DE CASO ↓':'EXPLORE THE CASE STUDIES ↓','EXPLORAR TODOS OS REPOSITÓRIOS ↗':'EXPLORE ALL REPOSITORIES ↗',
 '02 / ESTUDOS DE CASO':'02 / CASE STUDIES','Por dentro dos ':'Inside the ','projetos':'projects',
 'Problemas, escolhas e limites documentados nos repositórios. Abra cada estudo para conhecer os detalhes.':'Problems, choices and limitations documented in the repositories. Open each study for details.',
 '01 / SOFTWARE NATIVO':'01 / NATIVE SOFTWARE','02 / PRODUTO E CLOUD':'02 / PRODUCT AND CLOUD','03 / INGESTÃO DE DADOS':'03 / DATA INGESTION','EXPANDIR +':'EXPAND +',
 'Problema':'Problem','Restrições':'Constraints','Arquitetura e decisões':'Architecture and decisions','Resultado e aprendizado':'Results and lessons',
 'Controlar volume, silêncio e saída de áudio por aplicação no macOS.':'Control volume, mute and audio output per application on macOS.',
 'Protótipo para macOS 26 ou posterior; captura de áudio exige consentimento. Compatibilidade e latência ainda precisam de testes adicionais.':'A prototype for macOS 26 or later; audio capture requires consent. Compatibility and latency still need further testing.',
 'Process taps do Core Audio alimentam um buffer e um mixer; serviços isolados da interface permitem testar regras sem dispositivos físicos.':'Core Audio process taps feed a buffer and mixer; services separated from the interface allow rules to be tested without physical devices.',
 'O repositório documenta descoberta de processos, controles e preferências. O projeto evidencia a importância de validar áudio real e permissões além dos testes unitários.':'The repository documents process discovery, controls and preferences. It highlights the importance of testing real audio and permissions beyond unit tests.',
 'Acompanhar séries, episódios assistidos e próximos lançamentos em uma biblioteca pessoal.':'Track series, watched episodes and upcoming releases in a personal library.',
 'O produto depende de autenticação, catálogo externo e persistência do progresso.':'The product depends on authentication, an external catalog and persistent progress.',
 'Interface Next.js conversa com funções Rust no AWS Lambda, API Gateway e DynamoDB; a infraestrutura está em Terraform.':'A Next.js interface communicates with Rust functions on AWS Lambda, API Gateway and DynamoDB; infrastructure is managed with Terraform.',
 'A interface reúne catálogo, biblioteca e histórico. O projeto demonstra como dividir responsabilidades entre produto, API e infraestrutura.':'The interface brings together a catalog, library and history. The project illustrates how to divide responsibilities across product, API and infrastructure.',
 'Capturar e consultar o estado enviado pelo jogo durante partidas.':'Capture and query game state sent during matches.',
 'A coleta depende da configuração de Game State Integration e de receber eventos locais do jogo.':'Collection requires Game State Integration configuration and local game events.',
 'Um serviço HTTP recebe os dados; módulos Rust separam domínio, rede, persistência SQLite e CLI. Há também interface desktop.':'An HTTP service receives data; Rust modules separate domain, networking, SQLite persistence and CLI. A desktop interface is also available.',
 'O projeto oferece coleta, logs e exportação. A separação entre ingestão e armazenamento facilita compreender e evoluir o processamento dos eventos.':'The project provides collection, logs and exports. Separating ingestion from storage makes event processing easier to understand and evolve.',
 'LER DOCUMENTAÇÃO ↗':'READ DOCUMENTATION ↗','LER BACKEND ↗':'READ BACKEND ↗','VER INTERFACE ↗':'VIEW INTERFACE ↗',
 '03 / SOBRE MIM':'03 / ABOUT ME','Curiosidade':'Curiosity','em ':'in ','produção':'production',
 'Sou engenheiro de software backend. Gosto de transformar problemas complexos em sistemas claros, confiáveis e úteis.':'I’m a backend software engineer. I enjoy turning complex problems into clear, reliable and useful systems.',
 'Gosto de explorar tecnologias e compartilhar o que aprendo. Cada novo conhecimento amplia minha visão, revela caminhos para resolver problemas e mostra que sempre há diferentes formas de ensinar e construir.':'I enjoy exploring technologies and sharing what I learn. Every new insight broadens my perspective, reveals ways to solve problems and shows there are always different ways to teach and build.',
 '04 / INVENTÁRIO':'04 / INVENTORY','Ferramentas para ':'Tools to ','criar':'build','Tecnologias organizadas pelo tipo de problema que ajudam a resolver.':'Technologies grouped by the kinds of problems they help solve.',
 'APIs e serviços':'APIs and services','Infraestrutura':'Infrastructure','Persistência e eventos':'Persistence and events','04 / EXPLORAÇÃO':'04 / EXPLORATION','Sistemas e produtos':'Systems and products',
 '05 / OPEN SOURCE & COMUNIDADE':'05 / OPEN SOURCE & COMMUNITY','Aprender é melhor ':'Learning is better ','em conjunto':'together','Projetos e comunidades também são espaços para trocar ideias, estudar decisões e construir conhecimento de forma aberta.':'Projects and communities are spaces to exchange ideas, explore decisions and build knowledge openly.',
 'COMUNIDADE / AWS + TERRAFORM':'COMMUNITY / AWS + TERRAFORM','Infraestrutura aberta para geração de certificados ↗':'Open infrastructure for certificate generation ↗','Explore o fork do gerador de certificados ↗':'Explore the certificate generator fork ↗','Ferramenta de qualidade de código da dmux ↗':'Code quality tooling by dmux ↗','Contribuições para o launcher e uma simulação de pássaros ↗':'Contributions to the launcher and a bird flocking simulation ↗',
 'Notas de ':'Exploration ','exploração':'notes','Leituras curtas a partir das decisões e limitações registradas nos projetos.':'Short notes based on decisions and limitations documented in the projects.',
 'O que existe entre um app e o áudio?':'What lies between an app and its audio?','O Sonic Route usa process taps e um mixer para construir controles por aplicação. O protótipo também documenta permissões e validações pendentes.':'Sonic Route uses process taps and a mixer to build per-app controls. The prototype also documents permissions and pending validation.',
 'EXPLORAR A ARQUITETURA ↗':'EXPLORE THE ARCHITECTURE ↗','Um produto, vários limites':'One product, multiple boundaries','No Episodic, interface, funções serverless e infraestrutura têm responsabilidades distintas. O backend descreve seus módulos e padrões de acesso.':'In Episodic, the interface, serverless functions and infrastructure have distinct responsibilities. The backend describes its modules and access patterns.','LER SOBRE A API ↗':'READ ABOUT THE API ↗',
 'Memória que atravessa sessões':'Memory across sessions','O Agent Memory explora como preservar conhecimento versionado e disponibilizá-lo a diferentes agentes de programação.':'Agent Memory explores how to preserve versioned knowledge and make it available to different coding agents.','CONHECER O PROJETO ↗':'EXPLORE THE PROJECT ↗',
 '03 / PRÓXIMO PASSO':'07 / NEXT STEP','Vamos construir':'Let’s build','algo ':'something ','interessante':'interesting','Ideias, projetos ou uma boa conversa sobre tecnologia.':'Ideas, projects or a good conversation about technology.','ENTRAR EM CONTATO ↗':'GET IN TOUCH ↗','FEITO COM CÓDIGO & CURIOSIDADE ✳':'BUILT WITH CODE & CURIOSITY ✳','VOLTAR AO TOPO ↑':'BACK TO TOP ↑',
 'Servidor MCP em Rust para conversão de vídeo e transcrição local de áudio com whisper.cpp.':'A Rust MCP server for video conversion and local audio transcription with whisper.cpp.','Controle de volume e roteamento de áudio por aplicação no macOS.':'Per-app volume control and audio routing on macOS.','Uma biblioteca pessoal para acompanhar séries, episódios e próximos lançamentos.':'A personal library for tracking series, episodes and upcoming releases.','Driver Ext4 para leitura e escrita no macOS, com integração ao Finder.':'An Ext4 read/write driver for macOS with Finder integration.','Console distribuído para streaming e controle de áudio entre macOS e Android.':'A distributed console for audio streaming and control between macOS and Android.','Coleta e organiza eventos de partidas com CLI, interface desktop e SQLite.':'Collects and organizes game events with a CLI, desktop interface and SQLite.','Arquitetura de memória versionada para agentes de programação e seus fluxos de trabalho.':'Versioned memory architecture for coding agents and their workflows.',
 'ÁUDIO / MACOS':'AUDIO / MACOS','PRODUTO / CLOUD':'PRODUCT / CLOUD','SISTEMAS / FILESYSTEM':'SYSTEMS / FILESYSTEM','ÁUDIO / TEMPO REAL':'AUDIO / REAL TIME','DADOS / GAMES':'DATA / GAMES','FERRAMENTAS / IA':'TOOLS / AI','PROTÓTIPO':'PROTOTYPE','VER REPOSITÓRIO ↗':'VIEW REPOSITORY ↗',
 ' SISTEMAS':' SYSTEMS','03 / DADOS':'03 / DATA','01 / SISTEMAS':'01 / SYSTEMS','03 / CONHECIMENTO':'03 / KNOWLEDGE'
};
const originalText = new WeakMap();
let language = 'en';
try { language = localStorage.getItem('portfolio-language') || 'en'; } catch {}
const languageSwitch = document.createElement('div');
languageSwitch.className = 'language-switch';
languageSwitch.setAttribute('role','group');
languageSwitch.setAttribute('aria-label','Language / Idioma');
languageSwitch.innerHTML = '<button type="button" data-lang="en">EN</button><button type="button" data-lang="pt">PT</button>';
document.querySelector('.nav').append(languageSwitch);
function applyLanguage() {
 document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
 const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
 while (walker.nextNode()) {
  const node = walker.currentNode;
  if (!originalText.has(node)) originalText.set(node, node.nodeValue);
  const original = originalText.get(node);
  let translated = translations[original] || original;
  if (language === 'en') {
   translated = translated.replace('VER REPOSITÓRIO ↗','VIEW REPOSITORY ↗').replace('ÁUDIO / MACOS','AUDIO / MACOS').replace('PRODUTO / CLOUD','PRODUCT / CLOUD').replace('SISTEMAS / FILESYSTEM','SYSTEMS / FILESYSTEM').replace('ÁUDIO / TEMPO REAL','AUDIO / REAL TIME').replace('DADOS / GAMES','DATA / GAMES').replace('FERRAMENTAS / IA','TOOLS / AI').replace('PROTÓTIPO','PROTOTYPE');
   if (node.parentElement?.closest('.ticker')) translated = translated.replace('ÁUDIO','AUDIO');
   translated = translated.replace(/^Dados do GitHub atualizados em (.+)\.$/, 'GitHub data updated on $1.');
   node.nodeValue = translated;
  } else node.nodeValue = original;
 }
 document.querySelectorAll('[data-lang]').forEach(button=>button.setAttribute('aria-pressed', String(button.dataset.lang === language)));
 document.querySelector('.profile-pixel img').alt = language === 'en' ? 'Maxson Ferovante’s GitHub profile photo' : 'Foto de perfil de Maxson Ferovante no GitHub';
 document.querySelector('.scene').setAttribute('aria-label', language === 'en' ? 'Pixel art illustration of a technology lab' : 'Ilustração pixel art de um laboratório de tecnologia');
 document.querySelector('.nav nav').setAttribute('aria-label', language === 'en' ? 'Main navigation' : 'Principal');
}
languageSwitch.addEventListener('click', event => {
 const button = event.target.closest('button[data-lang]'); if (!button) return;
 language = button.dataset.lang;
 try { localStorage.setItem('portfolio-language', language); } catch {}
 applyLanguage();
});
applyLanguage();
