import { projectDetail } from "@/data";

import { FramerWrapper } from "./components";

export function generateMetadata({
  params
}: {
  params: { id: string }
}) {
  return {
    title: `${params.id}`
  }
}

export default function WorkDetail({
  params
}: {
  params: { id: string }
}) {
  const project = projectDetail[params.id as keyof typeof projectDetail];

  return (
    <FramerWrapper {...project} />
  )
}

export const dynamicParams = true;

export async function generateStaticParams() {
  const works = ['tsx-craft', 'just-swim', 'portfolio', 'vanilla-js-spa', 'jetty-chart', 'nashda', 'talkids'];

  return works.map(work => ({ id: work }));
}