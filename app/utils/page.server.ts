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

export const upsertPageBySlug = async ({ pageSlug }) => {
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
