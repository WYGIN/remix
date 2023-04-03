import { prisma } from '@utils/prisma';

export const getAuthorByUsername = async({ id }) => {
  const data = prisma.user.findUnique({ 
     where: { 
       username: id 
     } 
   });

  return data;
}
