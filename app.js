const projects = [
 {repo:'sonic-route', title:'Sonic Route', category:'ÁUDIO / MACOS', icon:'▥', description:'Controle de volume e roteamento de áudio por aplicação no macOS.', tags:['Swift','Core Audio'], status:'PROTÓTIPO'},
 {repo:'episodic-app-web', title:'Episodic', category:'PRODUTO / CLOUD', icon:'▣', description:'Uma biblioteca pessoal para acompanhar séries, episódios e próximos lançamentos.', tags:['Next.js','Rust','AWS'], extra:[['Backend','episodic-app-backend'],['Infra','episodic-app-infra-cloud']]},
 {repo:'alpaca-extfs-for-mac', title:'Alpaca ExtFS', category:'SISTEMAS / FILESYSTEM', icon:'▤', description:'Driver Ext4 para leitura e escrita no macOS, com integração ao Finder.', tags:['Rust','macFUSE']},
 {repo:'SaabAudioMixingConsoleStreaming', title:'Saab Audio Console', category:'ÁUDIO / TEMPO REAL', icon:'≋', description:'Console distribuído para streaming e controle de áudio entre macOS e Android.', tags:['Rust','UDP','Android']},
 {repo:'dota-collection-tool', title:'Dota Collection Tool', category:'DADOS / GAMES', icon:'⌖', description:'Coleta e organiza eventos de partidas com CLI, interface desktop e SQLite.', tags:['Rust','SQLite']},
 {repo:'memory-for-agents-llm', title:'Agent Memory', category:'FERRAMENTAS / IA', icon:'✳', description:'Arquitetura de memória versionada para agentes de programação e seus fluxos de trabalho.', tags:['MCP','Rust','Python']}
];
const grid=document.querySelector('#project-grid');
function render(data={}) { grid.innerHTML=projects.map((p,i)=>{const d=data.repositories?.[p.repo]; const links=(p.extra||[]).map(([name,repo])=>`<a href="https://github.com/maxsonferovante/${repo}">${name} ↗</a>`).join('');return `<article class="card"><div class="card-top"><span class="card-number">0${i+1} / ${p.category}</span><span class="project-icon icon-${i}">${p.icon}</span></div><h3>${p.title}</h3><p>${p.description}</p><div class="tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}${p.status?`<span class="status">${p.status}</span>`:''}</div><div class="card-bottom"><a href="${d?.html_url||`https://github.com/maxsonferovante/${p.repo}`}">VER REPOSITÓRIO ↗</a><span>${d?`★ ${d.stargazers_count}`:'↗'}</span></div>${links?`<div class="extra">${links}</div>`:''}</article>`}).join(''); if(data.updated_at) document.querySelector('#updated').textContent=`Dados do GitHub atualizados em ${new Date(data.updated_at).toLocaleDateString('pt-BR', {timeZone:'America/Sao_Paulo'})}.`; }
render(); fetch('data/repositories.json').then(r=>r.ok?r.json():{}).then(render).catch(()=>{});
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
