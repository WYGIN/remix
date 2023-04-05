import { prisma } from '~/utils/prisma.server';

export const getAuthorByUsername = async () => {
   const data = prisma.user.findUnique({ 
     where: { 
       username: params.username, 
     } 
   });

  return data;
}
