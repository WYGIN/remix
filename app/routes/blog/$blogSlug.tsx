import { useLoaderData } from "@remix-run/react";
import { getBlogBySlug } from '~/utils/blog.server';

export const loader = async ({ params }: LoaderArgs) => {
  const data = getBlogBySlug(params.blogSlug);
  
  return data;
}

export default function Blog() {
  const data = useLoaderData<typeof loader>();
  return();
}


