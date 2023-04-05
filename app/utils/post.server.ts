import { Role, Status } from '~/utils/schema';
import { prisma } from '~/utils/prisma.server';

export const getPostBySlugWithAuth = async ({ category1, category2, postSlug, publication }) => {
     const data = await prisma.post.findUnique({ 
       where: { 
         taxonomy: { 
           category1: category1, 
           category2: category2 
         }, 
         slug: postSlug, 
         postOnPublication: { 
           publication: publication, 
         }, 
       } 
     });   
     if(data.postOnPublication.publication.roles.roles.find(e => e.profile.username === user.username)) { 
       return { 
         ...data, 
         authorised: true 
       } 
     } else { 
       return { 
         authorised: false 
       } 
     }

  return data;
}

export const getPostBySlug = async ({ category1, category2, postSlug }) => {
   const data = prisma.post.findUnique({ 
     where: { 
       taxonomy: { 
         category: { 
           category1: category1, 
           category2: category2, 
         }, 
       }, 
       slug: postSlug, 
     }, 
   }); 
  
   return data;
}

export upsertPost = async ({ body, featuredImage, description, category1, category2, tags, slug, schema, status, authorId }) => {
   const prisma = await prisma.post.upsert({ 
     where: { 
       category1: category1, 
       category2: category2, 
       slug: slug 
     }, 
     create: { 
       body: body, 
       featuredImage: featuredImage, 
       description: description, 
       category: { 
         connectOrCreate: { 
           where: { 
             category: { 
               category1: category1, 
               category2: category2, 
             }, 
           }, 
           create: { 
             category1: category1, 
             category2: category2, 
           }, 
         }, 
       }, 
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
       category: { 
         connectOrCreate: { 
           where: { 
             category: { 
               category1: category1, 
               category2: category2 
             }, 
           }, 
           create: { 
             category1: category1, 
             category2: category2 
           } 
         }, 
       }, 
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

export const getPostsByTag = async ({ tagSlug }) => {
  const data = await prisma.tag.findUniue({
    where: {
      slug: tagSlug
    }
  });

  return data.postsOnTag.posts;
}

export const getPostsByTaxonomy = async ({ category1, category2 }) => {
  const data = prisma.taxonomy.findUnique({
    where: {
      category: {
        category1: category1,
        category2: category2
      }
    }
  });

  return data.postsOnTaxonomy.posts;

}
