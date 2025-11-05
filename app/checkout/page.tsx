import { Suspense } from 'react';
import { CheckoutClient } from './ui/CheckoutClient';

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="text-slate-300">Loading checkout?</div>}>
      <CheckoutClient />
    </Suspense>
  );
}
