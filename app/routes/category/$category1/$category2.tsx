import { prisma } from '@utils/prisma';
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ params }: LoaderArgs) => {
  const data = prisma.taxonomy.findUnique({
    where: {
      category1: parama.category1,
      category1: params.category2,
    }
  });
  
  return data;
}

export default function Page() {
  const data = useLoaderData<typeof loader>();
  return();
}

