import { 
  WorkContent,
  WorkHeader,
} from "@/layouts";

export const metadata = {
  title: "Work",
}

export default function Work() {
  return (
    <div>
      <WorkHeader />
      <main>
        <WorkContent />
      </main>
    </div>
  )
}