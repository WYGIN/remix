import { useLoaderData } from "@remix-run/react";
import { getPostsByTag } from '~/utils/post.server';

export const loader = async ({ params }: LoaderArgs) => {
  const data = await getPostsByTag(params.tagSlug);
  
  return data;
}

export default function Tag() {
  const data = useLoaderData<typeof loader>();
  return();
}

