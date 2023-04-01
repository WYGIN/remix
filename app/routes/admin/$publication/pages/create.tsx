import { prisma } from '@utils/prisma';
import { useLoaderData } from "@remix-run/react";

export async function action({ request }: ActionArgs) {
  const data = await request.formData();
  const prisma = await prisma.publication.upsert({
    where: {
      category1: data.get('category1'),
      category2: data.get('category2'),
      slug: data.get('slug')
    },
    create: {
      title: data.get('title'),
      body: data.get('body'),
      featuredImage: data.get('featuredImage'),
      description: data.get('description'),
      tags: data.get('tags'),
      slug: data.get('slug'),
      schema: data.get('schema'),
      status: data.get('status'),
      author: {
        connect: {
          id: data.get('authorId')
        }
      }
    },
    update: {
      title: data.get('title'),
      body: data.get('body'),
      featuredImage: data.get('featuredImage'),
      description: data.get('description'),
      tags: data.get('tags'),
      slug: data.get('slug'),
      schema: data.get('schema'),
      status: data.get('status'),
      author: {
        connect: {
          id: data.get('authorId')
        }
      }
    }
  });
}
export default function Page() {
  
  return();
}




