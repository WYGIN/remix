import { useLoaderData } from "@remix-run/react";
import { getAuthorByUsername } from '~/utils/user.server';

export const loader = async ({ params }: LoaderArgs) => {
  const data = await getAuthorByUsername (params.username);
  
  return data;
}

export default function Author() {
  const data = useLoaderData<typeof loader>();
  return();
}


