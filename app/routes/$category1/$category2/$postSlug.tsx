import { prisma } from '@utils/prisma';
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ params }: LoaderArgs) => {
  const data = prisma.post.findUnique({
    where: {
      taxonomy: {
        category: {
          category1: params.category1,
          category2: params.category2,
        },
      },
      slug: params.postSlug,
    },
  });

  return data;
}

export default function Post() {
  const data = useLoaderData<typeof loader>();
  return();
}
