import { prisma } from '~/utils/prisma.server';
import { useLoaderData } from "@remix-run/react";
import { getPostsBySlug } from '~/utils/post.server';

export const loader = async ({ params }: LoaderArgs) => {
  const data = await getPostsBySlug(params.category1, params.category2, params.postSlug);
  return data;
}

export default function Post() {
  const data = useLoaderData<typeof loader>();
  return();
}
