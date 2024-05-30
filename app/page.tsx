import {
  Transition,
  Navbar,
  Header,
  Introduce,
  PersonalProjects,
  TeamProjects,
  Contact,
} from "@/layouts";

export default function Page() {
  return (
    <Transition>
      <Navbar />
      <Header />
      <main>
        <TeamProjects />
        <PersonalProjects />
      </main>
      <Contact />
    </Transition>
  );
}
