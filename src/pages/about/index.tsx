import {
  AboutHeader,
  AboutTransitionContainer,
  AboutExperience,
} from "@/layouts";

export default function AboutPage() {
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