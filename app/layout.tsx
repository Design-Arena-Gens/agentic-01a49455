import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Acme Billing',
  description: 'Simple subscription billing site',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <header className="border-b border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
            <Link href="/" className="font-semibold tracking-tight text-xl">
              Acme<span className="text-[var(--accent)]">Bill</span>
            </Link>
            <nav className="flex items-center gap-6 text-sm text-slate-300">
              <Link href="/pricing">Pricing</Link>
              <Link href="/checkout">Checkout</Link>
              <a
                href="https://agentic-01a49455.vercel.app"
                target="_blank"
                className="rounded-md bg-[color:var(--primary)]/10 px-3 py-1.5 text-[color:var(--primary)] ring-1 ring-[color:var(--primary)]/30"
              >
                Live
              </a>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-6xl px-6 py-12">{children}</main>
        <footer className="mt-24 border-t border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-slate-400">
            ? {new Date().getFullYear()} AcmeBill. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
