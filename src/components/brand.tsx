import Image from "next/image";
import { useId } from "react";
import type { ReactNode } from "react";

// React ports of the Koh Yam design system primitives this page uses.
// They render the design system's own `ky-*` classes.

const LOGO_RATIO = 773.708 / 286.677;

export function Logo({
  tagline = false,
  ink,
  height,
}: {
  tagline?: boolean;
  ink: "brown" | "gold";
  height: number;
}) {
  return (
    <Image
      src={`/assets/logos/kohyam-logo-horizontal${tagline ? "-tagline" : ""}-${ink}.svg`}
      alt="Koh Yam"
      width={Math.round(height * LOGO_RATIO)}
      height={height}
      style={{ display: "block" }}
    />
  );
}

export function CTAButton({
  label,
  href,
  size = "md",
  variant = "primary",
}: {
  label: string;
  href: string;
  size?: "sm" | "md";
  variant?: "primary" | "outline";
}) {
  const classes = [
    "ky-cta",
    variant === "outline" && "ky-cta--outline",
    size === "sm" && "ky-cta--sm",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a className={classes} href={href}>
      {label}
    </a>
  );
}

export function PromoTag({
  size = "md",
  children,
}: {
  size?: "sm" | "md";
  children: ReactNode;
}) {
  return (
    <span className={`ky-promo${size === "sm" ? " ky-promo--sm" : ""}`}>
      {children}
    </span>
  );
}

export function LocationTag({
  island,
  children,
}: {
  island: string;
  children: ReactNode;
}) {
  return (
    <span className="ky-location" data-island={island}>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
      </svg>
      {children}
    </span>
  );
}

export function IslandStamp({
  island,
  kicker,
  name,
  sub,
  date,
}: {
  island: string;
  kicker: string;
  name: string;
  sub: string;
  date: string;
}) {
  return (
    <div className="ky-island-stamp" data-island={island}>
      <div className="ky-island-stamp__body">
        <span className="ky-island-stamp__kicker">{kicker}</span>
        <span className="ky-island-stamp__name">{name}</span>
        <span className="ky-island-stamp__sub">{sub}</span>
        <span className="ky-island-stamp__date">{date}</span>
      </div>
    </div>
  );
}

export function Postmark({
  top,
  bottom,
  center,
  color,
  size,
}: {
  top: string;
  bottom: string;
  center: string;
  color: string;
  size: number;
}) {
  const id = `pm${useId().replace(/[^a-zA-Z0-9]/g, "")}`;

  return (
    <svg
      className="ky-postmark"
      viewBox="0 0 120 120"
      role="img"
      aria-label={`${top} ${center} ${bottom}`}
      style={{ width: size, height: size, color, display: "block" }}
    >
      <defs>
        <path id={`${id}-t`} d="M 18 60 A 42 42 0 0 1 102 60" />
        <path id={`${id}-b`} d="M 14 60 A 46 46 0 0 0 106 60" />
      </defs>
      <circle cx="60" cy="60" r="56" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="60" cy="60" r="31" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text>
        <textPath href={`#${id}-t`} startOffset="50%" textAnchor="middle">
          {top}
        </textPath>
      </text>
      <text>
        <textPath
          href={`#${id}-b`}
          startOffset="50%"
          textAnchor="middle"
          dominantBaseline="hanging"
        >
          {bottom}
        </textPath>
      </text>
      <text x="60" y="66" textAnchor="middle" style={{ fontSize: 16, letterSpacing: "0.04em" }}>
        {center}
      </text>
    </svg>
  );
}

export function PatternBand({
  height,
  opacity,
}: {
  height: number;
  opacity: number;
}) {
  return (
    <div
      className="ky-pattern-band"
      aria-hidden="true"
      style={{
        height,
        opacity,
        backgroundImage: "url(/assets/patterns/kohyam_graphic_pattern-03.png)",
        backgroundPosition: "center",
      }}
    />
  );
}
