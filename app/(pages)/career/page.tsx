import { CareerContent, CareerHeader } from "@/layouts";

export const metadata = {
  title: "Career",
}

export default function Career() {
  return (
    <div>
      <CareerHeader />
      <main>
        <CareerContent />
      </main>
    </div>
  )
}