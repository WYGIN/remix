import { prisma } from '~/utils/prisma';
import { useLoaderData } from "@remix-run/react";

export async function action({ request }: ActionArgs) {
  const data = await request.formData();
  const prisma = await prisma.publication.upsert({
    where: {
      slug: data.get('slug')
    },
    create: {
      slug: data.get('slug'),
      name: data.get('name'),
      logo: data.get('logo'),
      description: data.get('description')
    },
    update: {
      slug: data.get('slug'),
      name: data.get('name'),
      logo: data.get('logo'),
      description: data.get('description')
    }
  });
}
export default function Page() {
  
  return();
}


