import { Octokit } from '@octokit/core';

const octokit = new Octokit({ 
   auth: '' 
 }); 
  
 export const githubPut = async ({ buffer, width, height, username, email, filename, path }) => { 
   const response = await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', { 
     owner: 'OWNER', 
     repo: 'REPO', 
     path: path, 
     message: `uploaded ${filename}`, 
     committer: { 
       name: username, 
       email: email 
     }, 
     content: `{ 
       data: ${buffer}, 
       width: ${width}, 
       height: ${height} 
     }`, 
   }); 
   return `https://wygin.me/${response.content.path}`; 
 } 
  
 export const githubGet = async ({ path }) => { 
   const response = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', { 
     owner: 'OWNER', 
     repo: 'REPO', 
     path: path, 
     headers: { 
       'X-GitHub-Api-Version': '2022-11-28', 
       'Accept': 'application/vnd.github.raw' 
     } 
   }); 
   return response; 
 } 
