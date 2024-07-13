import { 
  Navbar,
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
      <Navbar />
      <AboutHeader />
      <main className="">
        <AboutTransitionContainer />
        <AboutExperience />
      </main>
    </>
  )
}