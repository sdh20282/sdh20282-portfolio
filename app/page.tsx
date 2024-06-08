"use client"

import {
  Transition,
  Navbar,
  Header,
  Introduce,
  PersonalProjects,
  TeamProjects,
  Education,
  Contact,
} from "@/layouts";

export default function Page() {
  return (
    <Transition>
      <Navbar />
      <Header />
      <main className="bg-[#1c1c1c]">
        <Introduce />
        <TeamProjects />
        <PersonalProjects />
        <Education />
      </main>
      <Contact />
    </Transition>
  );
}
