"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps {
  to: string;
  className?: string;
  activeClassName?: string;
  pendingClassName?: string; // API bozulmasın diye tutuluyor
  children?: React.ReactNode;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ to, className, activeClassName, pendingClassName, children }, ref) => {
    const pathname = usePathname();

    // react-router-dom'un active mantığı korunuyor
    const isActive = pathname === to;

    // Next.js'te pending yok — API bozulmaması için false veriyoruz
    const isPending = false;

    return (
      <Link
        ref={ref}
        href={to}
        className={cn(
          className,
          isActive && activeClassName,
          isPending && pendingClassName
        )}
      >
        {children}
      </Link>
    );
  }
);

NavLink.displayName = "NavLink";

export { NavLink };
