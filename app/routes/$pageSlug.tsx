import { useLoaderData } from "@remix-run/react";
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Drawer from '~/components/Drawer';
import Sidebar from '~/components/Sidebar';
import Main from '~/components/Main';
import { getPageBySlug } from '~/utils/page.server';

export const loader = async ({ params }: LoaderArgs) => {
  const data = getPageBySlug(parama.pageSlug);
  return data;
}

export default function Page() {
  const data = useLoaderData<typeof loader>();
  return(
    <>
    <Header />
    <div>
      <Drawer></Drawer>
      <Main></Main>
      <Sidebar></Sidebar>
    </div>
    <Footer></Footer>
    </>
  )
}
