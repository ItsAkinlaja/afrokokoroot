"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { Fragment } from "react";

export function Breadcrumbs() {
  const pathname = usePathname();

  // Don't show breadcrumbs on the home page
  if (pathname === "/") {
    return null;
  }

  const segments = pathname.split("/").filter((segment) => segment !== "");

  return (
    <div className="bg-indigo-50/50 border-b border-indigo-100">
      <div className="container py-3">
        <nav aria-label="Breadcrumb" className="flex items-center text-sm font-medium text-muted-foreground">
          <Link
            href="/"
            className="flex items-center hover:text-primary transition-colors"
            title="Home"
          >
            <Home className="h-4 w-4 mr-1" />
            <span className="sr-only">Home</span>
          </Link>

          {segments.map((segment, index) => {
            const path = `/${segments.slice(0, index + 1).join("/")}`;
            const isLast = index === segments.length - 1;

            // Format segment text: replace hyphens with spaces and capitalize
            const label = segment
              .replace(/-/g, " ")
              .replace(/\b\w/g, (char) => char.toUpperCase());

            return (
              <Fragment key={path}>
                <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground/50" />
                {isLast ? (
                  <span className="text-primary font-semibold" aria-current="page">
                    {label}
                  </span>
                ) : (
                  <Link
                    href={path}
                    className="hover:text-primary transition-colors"
                  >
                    {label}
                  </Link>
                )}
              </Fragment>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
