import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function EnterCompetitionPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <div className="container py-8">
          <h1 className="text-3xl font-bold mb-6">Enter a Competition</h1>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Competition Entry Portal
            </h2>

            <p className="text-lg mb-6">
              Enter Bowls New Zealand competitions through our official
              competition management system.
            </p>

            <Button
              className="bg-green-600 hover:bg-green-700 flex items-center gap-2"
              asChild
            >
              <a
                href="https://www.bowlshub.co.nz/authenticate/login?redirect=%2Fmembership%2Fmembers"
                target="_blank"
                rel="noopener noreferrer"
              >
                Go to Competition Entry Portal{" "}
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="prose max-w-none">
            <h3 className="text-xl font-semibold mb-3">
              How to Enter Competitions
            </h3>

            <ol className="list-decimal pl-5 space-y-2">
              <li>Log in to your BowlsHub account</li>
              <li>Navigate to the "Competitions" section</li>
              <li>Browse available competitions</li>
              <li>Select the competition you wish to enter</li>
              <li>Complete the entry form and submit</li>
              <li>Pay any applicable entry fees</li>
              <li>Receive confirmation of your entry</li>
            </ol>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              Don't Have an Account?
            </h3>

            <p>
              You'll need a BowlsHub account to enter competitions. If you don't
              have one yet, you can register through the competition portal.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              Need Assistance?
            </h3>

            <p>
              If you need help with entering a competition or have questions
              about the process, please contact our support team at{" "}
              <a
                href="mailto:support@bowlsnz.co.nz"
                className="text-green-600 hover:text-green-700"
              >
                support@bowlsnz.co.nz
              </a>
              .
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
