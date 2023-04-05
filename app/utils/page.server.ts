import { Role, Status } from './schema';
import { prisma } from '~/utils/prisma.server';

export const getPageBySlug = async ({ pageSlug }) => {
   const data = prisma.page.findUnique({ 
     where: { 
       slug: pageSlug, 
     } 
   });

  return data;
}

export const getPageBySlugWithAuth = async ({ pageSlug }) => {
     const data = await prisma.page.findUnique({ 
       where: { 
         slug: pageSlug,
       } 
     }); 
     if(data.author.role === (Role.ADMIN || Role.OWNER)) 
       return {
         authorised: true,
         ...data
       }
     else 
       return { 
         authorised: false 
       }
}

export const upsertPage = async ({ body, featuredImage, description, tags, slug, schema, status, authorId }) => {
   const prisma = await prisma.page.upsert({ 
     where: { 
       slug: slug, 
     }, 
     create: { 
       body: body, 
       featuredImage: featuredImage, 
       description: description, 
       tags: tags, 
       slug: slug, 
       schema: schema, 
       status: status, 
       author: { 
         connect: { 
           id: authorId 
         } 
       } 
     }, 
     update: { 
       body: body, 
       featuredImage: featuredImage, 
       description: description, 
       tags: tags, 
       slug: slug, 
       schema: schema, 
       status: status, 
       author: { 
         connect: { 
           id: authorId 
         } 
       } 
     } 
   });
}
