import { writeFile } from 'node:fs/promises';
const names=['euterpe-local-transcription','sonic-route','episodic-app-web','episodic-app-backend','episodic-app-infra-cloud','alpaca-extfs-for-mac','SaabAudioMixingConsoleStreaming','dota-collection-tool','memory-for-agents-llm'];
const headers={'Accept':'application/vnd.github+json','User-Agent':'maxson-portfolio','X-GitHub-Api-Version':'2022-11-28'};
if(process.env.GITHUB_TOKEN) headers.Authorization=`Bearer ${process.env.GITHUB_TOKEN}`;
const results=await Promise.all(names.map(async name=>{const response=await fetch(`https://api.github.com/repos/maxsonferovante/${name}`,{headers});if(!response.ok) throw new Error(`${name}: GitHub returned ${response.status}`);const r=await response.json();return [name,{html_url:r.html_url,description:r.description,language:r.language,stargazers_count:r.stargazers_count,updated_at:r.updated_at}]}));
await writeFile(new URL('../data/repositories.json',import.meta.url),JSON.stringify({updated_at:new Date().toISOString(),repositories:Object.fromEntries(results)},null,2)+'\n');
