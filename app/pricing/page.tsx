import Link from 'next/link';

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    price: 9,
    features: ['100 customers', 'Email support', 'Basic invoices'],
    cta: 'Choose Starter',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 29,
    features: ['5,000 customers', 'Priority support', 'Advanced invoices', 'Tax calculation'],
    cta: 'Choose Pro',
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 99,
    features: ['Unlimited customers', 'SLA + support', 'Custom integrations'],
    cta: 'Contact sales',
  },
];

export default function PricingPage() {
  return (
    <div>
      <h1 className="text-4xl font-semibold">Pricing</h1>
      <p className="mt-2 text-slate-300 max-w-prose">
        Simple, transparent pricing. Pick a plan and start billing.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <div key={plan.id} className={`rounded-xl border border-white/10 bg-white/5 p-6 ${plan.popular ? 'ring-2 ring-[color:var(--accent)]/40' : ''}`}>
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-medium">{plan.name}</h2>
              {plan.popular ? (
                <span className="rounded-md bg-[color:var(--accent)]/10 px-2 py-0.5 text-xs text-[color:var(--accent)] ring-1 ring-[color:var(--accent)]/30">Popular</span>
              ) : null}
            </div>
            <div className="mt-3 text-3xl font-semibold">${plan.price}<span className="text-base font-normal text-slate-400">/mo</span></div>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              {plan.id === 'enterprise' ? (
                <a
                  href="mailto:sales@example.com"
                  className="block rounded-lg bg-white/10 px-4 py-2 text-center ring-1 ring-white/20 hover:bg-white/15"
                >
                  {plan.cta}
                </a>
              ) : (
                <Link
                  href={`/checkout?plan=${plan.id}&price=${plan.price}`}
                  className="block rounded-lg bg-[color:var(--primary)] px-4 py-2 text-center text-white hover:bg-[color:var(--primary)]/90"
                >
                  {plan.cta}
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
