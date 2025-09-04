"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw, Home, Wifi, Server } from "lucide-react";
import Link from "next/link";

export default function GatesError({ message }: { message: string }) {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="text-center max-w-lg">
        {/* Error icon with subtle animation */}
        <div className="w-24 h-24 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
          <AlertTriangle className="h-12 w-12 text-orange-500" />
        </div>

        {/* Main error message */}
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          Something went wrong
        </h2>

        {/* Error description */}
        <p className="text-gray-600 mb-2 leading-relaxed">
          We&lsquo;re having trouble loading the parking gates right now.
        </p>

        {/* Technical error message */}
        <div className="bg-gray-100 rounded-lg p-4 mb-8">
          <p className="text-sm text-gray-700 font-mono break-words">
            {message}
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <Button
            onClick={handleRetry}
            className="bg-blue-600 hover:bg-blue-700 text-white gap-2"
          >
            <RefreshCw className="h-4 w-4" />
            Try Again
          </Button>

          <Link href="/">
            <Button variant="outline" className="gap-2">
              <Home className="h-4 w-4" />
              Go Home
            </Button>
          </Link>
        </div>

        {/* Troubleshooting suggestions */}
        <Card className="bg-blue-50 border-blue-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-semibold text-blue-900 flex items-center gap-2">
              <Server className="h-4 w-4" />
              Common Solutions
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <ul className="text-sm text-blue-800 space-y-2 text-left">
              <li className="flex items-start gap-2">
                <Wifi className="h-4 w-4 mt-0.5 text-blue-600" />
                Check your internet connection
              </li>
              <li className="flex items-start gap-2">
                <RefreshCw className="h-4 w-4 mt-0.5 text-blue-600" />
                Refresh the page or try again in a few minutes
              </li>
              <li className="flex items-start gap-2">
                <Server className="h-4 w-4 mt-0.5 text-blue-600" />
                Contact support if the problem continues
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Support info */}
        <p className="text-sm text-gray-500 mt-6">
          If this problem persists, please contact your system administrator.
        </p>
      </div>
    </div>
  );
}
