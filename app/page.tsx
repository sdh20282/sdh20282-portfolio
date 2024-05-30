import {
  Transition,
  Navbar,
  Header,
  Introduce,
  TeamProjects
} from "@/layouts";

export default function Page() {
  return (
    <Transition>
      <Navbar />
      <Header />
      <main>
        {/* <Introduce /> */}
        <TeamProjects />
      </main>
    </Transition>
  );
}
