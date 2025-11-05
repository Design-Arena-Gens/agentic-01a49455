type InvoicePageProps = {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

function getParam(sp: InvoicePageProps['searchParams'], key: string) {
  const v = sp?.[key];
  return Array.isArray(v) ? v[0] : v ?? '';
}

export default function InvoicePage({ params, searchParams }: InvoicePageProps) {
  const plan = getParam(searchParams, 'plan');
  const amount = getParam(searchParams, 'amount');
  const email = getParam(searchParams, 'email');
  const name = getParam(searchParams, 'name');
  const company = getParam(searchParams, 'company');

  return (
    <div className="max-w-3xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Invoice</h1>
          <div className="text-slate-400">ID: {params.id}</div>
        </div>
        <div className="rounded-lg bg-white/5 px-4 py-2 text-right">
          <div className="text-sm text-slate-300">Amount</div>
          <div className="text-2xl font-semibold">${amount}</div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <div className="text-sm text-slate-300">Billed to</div>
          <div className="mt-1 font-medium">{name || '?'}</div>
          <div className="text-sm text-slate-400">{email || '?'}</div>
          {company ? <div className="text-sm text-slate-400">{company}</div> : null}
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <div className="text-sm text-slate-300">Plan</div>
          <div className="mt-1 font-medium capitalize">{plan || '?'}</div>
          <div className="text-sm text-slate-400">Renews monthly unless cancelled</div>
        </div>
      </div>

      <div className="mt-8 overflow-hidden rounded-xl border border-white/10">
        <table className="w-full text-sm">
          <thead className="bg-white/5 text-left text-slate-300">
            <tr>
              <th className="px-4 py-3">Description</th>
              <th className="px-4 py-3">Qty</th>
              <th className="px-4 py-3">Unit</th>
              <th className="px-4 py-3 text-right">Total</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            <tr>
              <td className="px-4 py-3">{plan} subscription</td>
              <td className="px-4 py-3">1</td>
              <td className="px-4 py-3">${amount}</td>
              <td className="px-4 py-3 text-right">${amount}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-6 text-xs text-slate-400">
        This is a demo invoice for a mock payment. No charges were made.
      </div>
    </div>
  );
}
