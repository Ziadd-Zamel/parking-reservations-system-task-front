import { Building2 } from "lucide-react";

export default function GatesEmpty() {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="text-center max-w-md">
        {/* Large icon with gradient background */}
        <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
          <Building2 className="h-12 w-12 text-blue-500" />
        </div>

        {/* Main heading */}
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          No Gates Found
        </h2>

        {/* Description */}
        <p className="text-gray-600 mb-8 leading-relaxed">
          It looks like there are no parking gates configured in the system yet.
          Gates need to be set up before you can manage parking operations.
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Need help? Contact your system administrator to set up parking gates.
        </p>
      </div>
    </div>
  );
}
