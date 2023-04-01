import { prisma } from '@utils/prisma';
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ params }: LoaderArgs) => {
  const data = prisma.user.findUnique({
    where: {
      username: params.username,
    }
  });
  
  return data;
}

export default function Author() {
  const data = useLoaderData<typeof loader>();
  return();
}


