import { Curve } from "@/components";
import { 
  PageTransition,
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
    <PageTransition>
      <Navbar />
      <AboutHeader />
      <main className="">
        <AboutTransitionContainer />
        <AboutExperience />
      </main>
    </PageTransition>
  )
}