import { prisma } from '@utils/prisma';
import { useLoaderData } from "@remix-run/react";




export default function Page() {
  const data = useLoaderData<typeof loader>();
  return();
}


