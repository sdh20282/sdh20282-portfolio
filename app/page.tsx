import {
  Transition,
  Navbar,
  Header,
} from "@/layouts";

export default function Page() {
  return (
    <Transition>
      <Navbar />
      <Header />
      <div className="h-screen"></div>
    </Transition>
  );
}
