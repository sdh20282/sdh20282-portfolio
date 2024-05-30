import {
  Transition,
  Navbar,
  Header,
  Introduce,
  PersonalProjects,
  TeamProjects
} from "@/layouts";

export default function Page() {
  return (
    <Transition>
      <Navbar />
      <Header />
      <main>
        {/* <Introduce /> */}
        <PersonalProjects />
        <TeamProjects />
      </main>
    </Transition>
  );
}
