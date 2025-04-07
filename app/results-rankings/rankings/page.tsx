import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function BowlsPlusPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <div className="container py-8">
          <h1 className="text-3xl font-bold mb-6">Bowls+ Rankings</h1>

          <div className="bg-white rounded-lg shadow-lg p-4 mb-8 h-[800px]">
            <iframe
              src="https://bowlsnewzealand.co.nz/bowls-plus/"
              title="Bowls+ Rankings System"
              className="w-full h-full border-0"
            ></iframe>
          </div>

          <div className="prose max-w-none">
            <p className="text-lg">
              Bowls+ is Bowls New Zealand's official ranking, grading and points system. Track your progress and see
              where you stand among other players across the country.
            </p>

            <div className="mt-6">
              <a
                href="https://bowlsnewzealand.co.nz/bowls-plus/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
              >
                Open Bowls+ in New Window
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

