import { prisma } from '@utils/prisma';
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ params }: LoaderArgs) => {
  const data = prisma.tag.findUnique({
    where: {
      slug: parama.tagSlug,
    }
  });
  
  return data;
}

export default function Tag() {
  const data = useLoaderData<typeof loader>();
  return();
}

