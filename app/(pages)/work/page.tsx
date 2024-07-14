import { 
  Navbar,
  WorkContent,
  WorkHeader,
} from "@/layouts";

export const metadata = {
  title: "Work",
}

export default function Work() {
  return (
    <div>
      <Navbar />
      <WorkHeader />
      <main>
        <WorkContent />
      </main>
    </div>
  )
}