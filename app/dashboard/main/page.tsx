import { WidgetsGrid } from "@/shared/components";

export default function MainPage() {
  return (
    <section>
      <header className="p-4">
        <h1>Dashboard</h1>
        <h2>Main page to dashboard</h2>
      </header>
      <div className="flex gap-2 p-2">
        <WidgetsGrid />
      </div>
    </section>
  )
}