"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps {
  to: string;
  className?: string;
  activeClassName?: string;
  pendingClassName?: string; // Next.js'te pending yok ama bozmuyorum
  children?: React.ReactNode;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ to, className, activeClassName, pendingClassName, children }, ref) => {
    const pathname = usePathname();

    const isActive = pathname === to;
    const isPending = false; // Next.js desteklemez ama prop'u bozmuyorum

    return (
      <Link
        ref={ref}
        href={to}
        className={cn(
          className,
          isActive && activeClassName,
          isPending && pendingClassName,
        )}
      >
        {children}
      </Link>
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
