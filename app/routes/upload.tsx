import Jimp from "jimp";
import { githubPut } from '~/scripts/Github';

export const action = async ({request}: ActionArgs) => {
   const data = await request.formData(); 
   let difUrl = ''; 
   let gitUrls = []; 
   const file = data.upload; 
   const filename = file.value.split(/(\\|\/)/g).pop(); 
   const username = data.username; 
   const email = data.email; 
   const category = data.category; 
   const sizes = [225, 300, 350, 400, 450, 600, 675, 700, 800, 900, 1025, 1200]; 
   let difImage = Jimp.read(file); 
   const defWidth = Jimp.bitmap.width; 
   const defHeight = Jimp.bitmap.height; 
   const defBuffer = await difImage.getBufferAsync(Jimp.MIME_PNG); 
   difUrl = githubPut(defBuffer, defWidth, defHeight, username, email, filename, category); 
   sizes.map(async (size) => { 
     let image = Jimp.read(file); 
     await image.resize(size, Jimp.AUTO); 
     const width = image.bitmap.width; 
     const height = image.bitmap.height; 
     const buffer = await image.getBufferAsync(Jimp.MIME_PNG); 
     gitUrls.push(githubPut(buffer, width, height, username, email, filename, category)); 
   }); 
  
   const getResponse = () => { 
     let response = {}; 
     response['default'] = difUrl; 
     sizes.map((size, index) => { 
       response[size] = gitUrls[index]; 
     }); 
     return response; 
   } 
  
   return new Response(getResponse());
}
