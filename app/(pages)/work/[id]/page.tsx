import { 
  Navbar,
} from "@/layouts";
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
  // @ts-ignore
  const project = projectDetail[params.id];

  return (
    <>
      <Navbar />
      <FramerWrapper
        title={project.title}
        introduce={project.introduce}
        period={project.period}
        members={project.members}
        skills={project.skills}
        links={project.links}
        images={project.images}
        hilight={project.hilight}
        role={project.role}
        learns={project.learns}
      />
    </>
  )
}

export const dynamicParams = true;

export async function generateStaticParams() {
  const works = ['jetty-chart', 'nashda', 'talkids'];

  return works.map(work => ({ id: work }));
}