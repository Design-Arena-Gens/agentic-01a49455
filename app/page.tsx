import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          Modern billing for growing products
        </h1>
        <p className="mt-4 text-slate-300 max-w-prose">
          Accept subscriptions, manage invoices, and get paid. A clean, simple billing experience built with Next.js.
        </p>
        <div className="mt-8 flex gap-4">
          <Link
            href="/pricing"
            className="rounded-lg bg-[color:var(--primary)] px-5 py-2.5 text-white shadow-sm hover:bg-[color:var(--primary)]/90 transition"
          >
            View Pricing
          </Link>
          <Link
            href="/checkout"
            className="rounded-lg bg-white/10 px-5 py-2.5 text-white ring-1 ring-white/20 hover:bg-white/15 transition"
          >
            Start Checkout
          </Link>
        </div>
        <div className="mt-8 text-sm text-slate-400">
          No real payments are processed. Demo only.
        </div>
      </div>
      <div className="relative">
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-slate-300">Monthly revenue</div>
              <div className="text-3xl font-semibold">$24,680</div>
            </div>
            <div className="rounded-lg bg-[color:var(--accent)]/10 px-3 py-1.5 text-[color:var(--accent)] text-sm ring-1 ring-[color:var(--accent)]/30">
              +12.4%
            </div>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            <div className="rounded-lg bg-white/5 p-4">
              <div className="text-lg font-medium">1,284</div>
              <div className="text-xs text-slate-400">Active subs</div>
            </div>
            <div className="rounded-lg bg-white/5 p-4">
              <div className="text-lg font-medium">2.1%</div>
              <div className="text-xs text-slate-400">Churn</div>
            </div>
            <div className="rounded-lg bg-white/5 p-4">
              <div className="text-lg font-medium">$19.1</div>
              <div className="text-xs text-slate-400">ARPU</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
