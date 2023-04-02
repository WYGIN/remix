import { prisma } from '@utils/prisma';
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ params }: LoaderArgs) => {
  const data = prisma.page.findUnique({
    where: {
      slug: parama.pageSlug,
    }
  });
  
  return data;
}

export default function Page() {
  const data = useLoaderData<typeof loader>();
  return(
    <></>
  )
}
