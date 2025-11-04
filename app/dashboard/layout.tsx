import { Sidebar } from "../shared/components";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="overflow-y-scroll w-screen h-screen antialiased selection:bg-blue-600 selection:text-white">
      <div className="flex flex-col">
        <Sidebar />
        <div className="p-2 ms-64">
          {children}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet enim quisquam architecto repudiandae, blanditiis placeat voluptate reprehenderit. Corporis facilis harum vitae maiores tempore, repudiandae nam, optio, deleniti saepe minus id.
        </div>
      </div>
    </section>
  )
}