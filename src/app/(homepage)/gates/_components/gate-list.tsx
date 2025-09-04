import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2 } from "lucide-react";
import Link from "next/link";
import GatesError from "./gate-error";
import { getAllGates } from "@/lib/api/gate.api";
import catchError from "@/lib/utils/catch-error";
import GatesEmpty from "./gate-empty";

export default async function GatesList() {
  // Getting all gates
  const [data, error] = await catchError(getAllGates);

  // Error State
  if (error) {
    return <GatesError message={error} />;
  }

  //Empty State
  if (!data) {
    return <GatesEmpty />;
  }

  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      aria-label="Available gates"
    >
      {data.map((gate) => (
        <Card
          key={gate.id}
          className="h-full hover:shadow-lg transition-shadow duration-200 border border-gray-200"
        >
          <CardHeader className="pb-4">
            <div
              className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
              aria-hidden="true"
            >
              <Building2 className="h-6 w-6 text-blue-600" />
            </div>
            <CardTitle className="flex items-center justify-between text-xl text-gray-900">
              {gate.name}
              <Badge variant="secondary" className="ml-2">
                {gate.location}
              </Badge>
            </CardTitle>
            <CardDescription className="text-gray-600 leading-relaxed">
              {gate.zoneIds.length} zone
              {gate.zoneIds.length !== 1 ? "s" : ""} available for access
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <Link href={`/gates/${gate.id}`}>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Access Gate
              </Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
