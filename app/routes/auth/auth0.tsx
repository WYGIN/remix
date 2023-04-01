// app/routes/auth/auth0.tsx
import type { ActionArgs } from "@remix-run/cloudflare";

import { authenticator } from "~/utils/auth.server";

export let loader = () => redirect("/login");

export let action = ({ request }: ActionArgs) => {
  return authenticator.authenticate("auth0", request);
};
