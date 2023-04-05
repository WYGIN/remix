import { gitPut, gitGet } from '~/utils/github.server';
  
 export const githubPut = async ({ buffer, width, height, username, email, filename, path }) => { 
   const response = await gitPut(buffer, width, height, username, email, filename, path);
   return `https://wygin.me/${response.content.path}`; 
 } 
  
 export const githubGet = async ({ path }) => { 
   const response = await gitGet(path);
   return response; 
 } 
