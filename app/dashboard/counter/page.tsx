import { SimpleCounter } from "@/shared/components/SimpleCounter"

export const metadata = {
  title: 'Contador',
  description: 'Un simple contador'
}

export default function CounterPage() {
  return (
    <section>
      <h2 className="text-center">Contador</h2>
      <SimpleCounter initialCount={20} />
    </section>
  )
}