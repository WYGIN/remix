import { useLoaderData } from "@remix-run/react";
import { getPostsByTaxonomy } from '~/utils/post.server';

export const loader = async ({ params }: LoaderArgs) => {
  const data = await getPostsByTaxonomy(params.category1, params.category2);
  
  return data;
}

export default function Category() {
  const data = useLoaderData<typeof loader>();
  return();
}

