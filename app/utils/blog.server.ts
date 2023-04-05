import { prisma } from '~/utils/schema';
import { prisma } from '~/utils/prisma.server';

export const getBlogBySlugWithAuth = async = ({ blogSlug }) => {
     data = await prisma.blog.findUnique({ 
       where: { 
         slug: blogSlug, 
       } 
     }); 
     if(data.author.role === (Role.ADMIN || Role.OWNER)) 
       return { 
         ...data, 
         authorised: true 
       }; 
     return {authorised: false}
}

export const getBlogBySlug = async ({ blogSlug }) => {
     data = await prisma.blog.findUnique({ 
       where: { 
         slug: blogSlug, 
       } 
     }); 
     if(data.author.role === (Role.ADMIN || Role.OWNER)) 
       return { 
         ...data, 
         authorised: true 
       }; 
     return {authorised: false}
}

export const upsertBlog = async ({ body, featuredImage, description, tags, slug, schema, status, authorId }) => {
   const prisma = await prisma.blog.upsert({ 
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
           id: authorId, 
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

  return prisma;
}
