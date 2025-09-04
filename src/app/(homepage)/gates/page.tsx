import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import GatesLoadingSkeleton from "./_components/gate-skeleton";
import GatesList from "./_components/gate-list";

export default async function Page() {
  return (
    <main className="max-w-6xl mx-auto py-12 px-6 min-h-screen">
      {/** Page Header */}
      <header className="flex items-center gap-4 mb-8">
        <Link href="/">
          <Button variant="outline" size="sm" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
        </Link>
        <h1 className="text-3xl font-bold text-gray-900">Select Gate</h1>
      </header>

      {/** Main content with loading */}
      <Suspense fallback={<GatesLoadingSkeleton />}>
        <GatesList />
      </Suspense>
    </main>
  );
}
