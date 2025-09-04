import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Settings, Clock } from "lucide-react";
import Link from "next/link";

export default async function HomePage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto py-12 px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              Parking Management System
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Streamlined parking operations with real-time monitoring and
              automated processing
            </p>
          </div>

          {/* Main Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Gate Operations */}
            <Link href="/gates">
              <Card className="h-full hover:shadow-lg transition-shadow duration-200 border border-gray-200 hover:border-blue-300 group cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                    <Car className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                    Gate Operations
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    Check-in visitors and subscribers at parking gates with
                    real-time availability tracking
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Access Gates
                  </Button>
                </CardContent>
              </Card>
            </Link>

            {/* Checkpoint */}
            <Link href="/checkpoint">
              <Card className="h-full hover:shadow-lg transition-shadow duration-200 border border-gray-200 hover:border-green-300 group cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                    <Clock className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-green-600 transition-colors">
                    Checkpoint
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    Process vehicle checkout with automated payment calculation
                    and receipt generation
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Open Checkpoint
                  </Button>
                </CardContent>
              </Card>
            </Link>

            {/* Admin Dashboard */}
            <Link href="/admin">
              <Card className="h-full hover:shadow-lg transition-shadow duration-200 border border-gray-200 hover:border-orange-300 group cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors">
                    <Settings className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-orange-600 transition-colors">
                    Admin Dashboard
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    Comprehensive system management with live monitoring and
                    configuration controls
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                    Admin Panel
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>

          {/* Status Bar */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">
                  System Online
                </span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Last updated:</span>
                <span className="text-sm font-medium text-gray-700">
                  Just now
                </span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Support:</span>
                <span className="text-sm font-medium text-gray-700">
                  24/7 Available
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
