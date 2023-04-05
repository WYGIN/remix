import { prisma } from '~/utils/prisma.server';
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ params }: LoaderArgs) => {
  const data = prisma.taxonomy.findUnique({
    where: {
      category: {
        category1: parama.category1,
        category2: params.category2,
      }
    }
  });
  
  return data;
}

export default function Category() {
  const data = useLoaderData<typeof loader>();
  return();
}

