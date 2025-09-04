import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function GatesLoadingSkeleton() {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      aria-label="Loading gates"
    >
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <Card
          key={i}
          className="h-full hover:shadow-lg transition-shadow duration-200 border border-gray-200"
        >
          <CardHeader className="pb-4">
            {/* Icon skeleton */}
            <div
              className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mb-4 animate-pulse"
              aria-hidden="true"
            ></div>

            {/* Title and Badge skeleton */}
            <CardTitle className="flex items-center justify-between text-xl text-gray-900">
              <div className="w-24 h-6 bg-gray-200 rounded animate-pulse"></div>
              <div className="w-16 h-5 bg-gray-200 rounded-full animate-pulse ml-2"></div>
            </CardTitle>

            {/* Description skeleton */}
            <CardDescription className="text-gray-600 leading-relaxed">
              <div className="w-32 h-4 bg-gray-200 rounded animate-pulse"></div>
            </CardDescription>
          </CardHeader>

          <CardContent className="pt-0">
            {/* Button skeleton */}
            <div className="w-full h-10 bg-gray-200 rounded animate-pulse"></div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
