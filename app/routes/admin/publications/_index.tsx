import { useLoaderData } from "@remix-run/react";
import { upsertPublication } from '~/utils/publication.server';

export async function action({ request }: ActionArgs) {
  const form = request.formData();
  const data = await upsertPublication(form.slug, form.name, form.logo, form.description);
  return data;
}
export default function Page() {
  
  return();
}


