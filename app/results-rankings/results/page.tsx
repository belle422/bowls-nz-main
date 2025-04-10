import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function ResultsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <div className="container py-8">
          <h1 className="text-3xl font-bold mb-6">Results</h1>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              View Competition Results
            </h2>

            <p className="text-lg mb-6">
              Access comprehensive results from all Bowls New Zealand
              competitions through our results portal.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-green-600 hover:bg-green-700 flex items-center gap-2"
                asChild
              >
                <a
                  href="https://results.bowlshub.co.nz/club-group/CLUB_GROUP_ROOT#competitions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Results Portal <ExternalLink className="h-4 w-4" />
                </a>
              </Button>

              <Button variant="outline" asChild>
                <Link href="/results-rankings/quick-results">
                  Quick Results
                </Link>
              </Button>
            </div>
          </div>

          <div className="prose max-w-none">
            <h3 className="text-xl font-semibold mb-3">
              About Our Results System
            </h3>

            <p>
              Our results portal provides comprehensive information about all
              Bowls New Zealand competitions, including national championships,
              regional tournaments, and local events.
            </p>

            <p className="mt-4">
              You can find detailed match results, player statistics, and
              tournament standings. The system is regularly updated to ensure
              you have access to the most current information.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Need Help?</h3>

            <p>
              If you need assistance with accessing or understanding the
              results, please
              <Link
                href="/contact"
                className="text-green-600 hover:text-green-700"
              >
                {" "}
                contact our support team
              </Link>
              .
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
