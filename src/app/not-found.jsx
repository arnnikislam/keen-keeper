"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="fixed inset-0 z-[9999] overflow-y-auto bg-[#F8FAFC]">
      {/* Soft background blobs */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#244d3f]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#244d3f]/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-full max-w-xl flex-col items-center justify-center px-6 py-12 text-center">
        {/* Logo */}
        <Link href="/" aria-label="KeenKeeper home">
          <Image
            src="/images/logo.png"
            alt="KeenKeeper"
            width={150}
            height={40}
            className="h-auto w-32 sm:w-36"
          />
        </Link>

        {/* 4 🔍 4 */}
        <div
          className="mt-10 flex items-center justify-center gap-1 text-[#244d3f] sm:gap-3"
          aria-label="404"
        >
          <span className="text-8xl font-extrabold leading-none sm:text-9xl">
            4
          </span>

          <svg
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="12"
            strokeLinecap="round"
            className="h-20 w-20 transition-transform duration-300 hover:-rotate-12 sm:h-28 sm:w-28"
            aria-hidden="true"
          >
            <circle cx="42" cy="42" r="30" />
            <line x1="64" y1="64" x2="90" y2="90" />
          </svg>

          <span className="text-8xl font-extrabold leading-none sm:text-9xl">
            4
          </span>
        </div>

        {/* Message */}
        <h1 className="mt-8 text-2xl font-bold text-[#1f2937] sm:text-3xl">
          Oops! This page wandered off.
        </h1>
        <p className="mt-3 max-w-md text-sm text-gray-500 sm:text-base">
          The link may be broken, or the page may have moved. Let&apos;s get you
          back to the connections that matter.
        </p>

        {/* Actions */}
        <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Link
            href="/"
            className="btn border-0 bg-[#244d3f] px-8 text-white shadow-none hover:bg-[#1c3d32]"
          >
            Go Home
          </Link>
          <button
            type="button"
            onClick={() => router.back()}
            className="btn border-[#244d3f] bg-transparent px-8 text-[#244d3f] shadow-none hover:border-[#244d3f] hover:bg-[#244d3f] hover:text-white"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
