import {
  AboutHeader,
  AboutTransitionContainer,
  AboutExperience,
} from "@/layouts";

export const metadata = {
  title: "About",
}

export default function About() {
  return (
    <>
      <AboutHeader />
      <main className="">
        <AboutTransitionContainer />
        <AboutExperience />
      </main>
    </>
  )
}