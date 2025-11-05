"use client";

import { useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export function CheckoutClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedPlan = searchParams.get('plan') ?? 'pro';
  const price = Number(searchParams.get('price') ?? (selectedPlan === 'starter' ? 9 : selectedPlan === 'pro' ? 29 : 99));

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [card, setCard] = useState('');
  const [processing, setProcessing] = useState(false);
  const canSubmit = useMemo(() => fullName && email && card.length >= 12, [fullName, email, card]);

  function createInvoiceId() {
    const base = Math.random().toString(36).slice(2);
    const ts = Date.now().toString(36);
    return `inv_${base}${ts}`;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!canSubmit) return;
    setProcessing(true);
    await new Promise((r) => setTimeout(r, 800));
    const invoiceId = createInvoiceId();
    const query = new URLSearchParams({ plan: selectedPlan, amount: String(price), email, name: fullName, company });
    router.push(`/invoice/${invoiceId}?${query.toString()}`);
  }

  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-semibold">Checkout</h1>
      <p className="mt-2 text-slate-300">Complete your purchase for the {selectedPlan} plan.</p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <form onSubmit={onSubmit} className="md:col-span-2 rounded-xl border border-white/10 bg-white/5 p-6">
          <div className="grid gap-4">
            <div>
              <label className="text-sm text-slate-300">Full name</label>
              <input value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Jane Doe" className="mt-1 w-full rounded-lg bg-white/10 px-3 py-2 outline-none ring-1 ring-white/20 focus:ring-[color:var(--accent)]/40" />
            </div>
            <div>
              <label className="text-sm text-slate-300">Email</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="jane@acme.com" className="mt-1 w-full rounded-lg bg-white/10 px-3 py-2 outline-none ring-1 ring-white/20 focus:ring-[color:var(--accent)]/40" />
            </div>
            <div>
              <label className="text-sm text-slate-300">Company (optional)</label>
              <input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Acme Inc." className="mt-1 w-full rounded-lg bg-white/10 px-3 py-2 outline-none ring-1 ring-white/20 focus:ring-[color:var(--accent)]/40" />
            </div>
            <div>
              <label className="text-sm text-slate-300">Card number</label>
              <input value={card} onChange={(e) => setCard(e.target.value)} placeholder="4242 4242 4242 4242" inputMode="numeric" className="mt-1 w-full rounded-lg bg-white/10 px-3 py-2 outline-none ring-1 ring-white/20 focus:ring-[color:var(--accent)]/40" />
            </div>
          </div>

          <button
            type="submit"
            disabled={!canSubmit || processing}
            className="mt-6 w-full rounded-lg bg-[color:var(--primary)] px-5 py-2.5 text-white hover:bg-[color:var(--primary)]/90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {processing ? 'Processing?' : `Pay $${price.toFixed(2)}`}
          </button>
          <div className="mt-3 text-xs text-slate-400">This is a demo. No real payments processed.</div>
        </form>

        <aside className="rounded-xl border border-white/10 bg-white/5 p-6">
          <div className="text-sm text-slate-300">Plan</div>
          <div className="mt-1 text-xl font-medium capitalize">{selectedPlan}</div>
          <div className="mt-4 text-sm text-slate-300">Amount due</div>
          <div className="mt-1 text-3xl font-semibold">${price}<span className="text-base font-normal text-slate-400">/mo</span></div>
          <div className="mt-6 rounded-lg bg-[color:var(--accent)]/10 p-3 text-xs text-[color:var(--accent)] ring-1 ring-[color:var(--accent)]/30">
            Secure and encrypted checkout.
          </div>
        </aside>
      </div>
    </div>
  );
}
