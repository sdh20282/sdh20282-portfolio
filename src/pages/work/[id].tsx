import { projectDetail, projectList } from "@/data";

import { DetailFramerWrapper } from "@/layouts";

interface ProjectProps {
  title: string,
  introduce: string,
  members: string,
  period: {
    from: string,
    to: string,
  },
  skills: string[],
  images: {
    name: string,
    src: string,
  }[],
  hilight: {
    type: string,
    src: string,
  },
  links: {
    live?: string,
    github: string,
  },
  role: {
    category: string,
    detail: string[],
  }[],
  learns: {
    main: string,
    sub: string[],
  }[]
}

export default function WorkDetail({ project }: { project: ProjectProps }) {
  return (
    <DetailFramerWrapper
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
  )
}

export const getStaticPaths = async () => {
  const paths = projectList.map((project) => ({
    params: { id: project },
  }));

  return { paths, fallback: false }
}

export const getStaticProps = async ({ params: { id } }: { params: { id: typeof projectList[number] } }) => {
  return {
    props: {
      project: projectDetail[id],
    }
  }
}