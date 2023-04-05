import { prisma } from '~/utils/prisma.server';

export const upsertPublication = async ({ slug, name, logo, description }) => {
   const prisma = await prisma.publication.upsert({ 
     where: { 
       slug: data.get('slug') 
     }, 
     create: { 
       slug: data.get('slug'), 
       name: data.get('name'), 
       logo: data.get('logo'), 
       description: data.get('description') 
     }, 
     update: { 
       slug: data.get('slug'), 
       name: data.get('name'), 
       logo: data.get('logo'), 
       description: data.get('description') 
     } 
   });
  return data;
}
