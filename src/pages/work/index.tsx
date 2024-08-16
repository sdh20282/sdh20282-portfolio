import { 
  WorkContent,
  WorkHeader,
} from "@/layouts";

export default function WorkPage() {
  return (
    <div>
      <WorkHeader />
      <main>
        <WorkContent />
      </main>
    </div>
  )
}